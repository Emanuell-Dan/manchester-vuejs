const fetch = require("node-fetch"),
    group = require("./templates/group"),
    event = require("./templates/event");

class meetup {
    constructor() {
        this.groups = require("./groupIds/meetup");
        this.apiEvents = (group) => 'https://api.meetup.com/' + group + '/events';
        this.apiPastEvents = (group) => 'https://api.meetup.com/' + group + '/events?desc=true&status=past';
        this.apiGroup = (group) => 'https://api.meetup.com/' + group;
        this.header = {
            method: 'GET',
            dataType: 'jsonp'
        };
        // Converters
        this.groupClass = group;
        this.eventClass = event;
        this.group = (group) => new this.groupClass(group.name, group.link, this.rtnGroupImg(group), group.members, null, null, "Meetup", false);
        this.event = (event) => new this.eventClass(event.name, event.link, this.rtnEventVenue(event), this.removeHTML(event.description || ""), event.time, event.time + (event.duration || 7200000), event.yes_rsvp_count, event.rsvp_limit || Infinity, event.hasOwnProperty('fee') ? false : true, this.rtnEventFee(event), event.group.name, "https://www.meetup.com/" + event.group.urlname, "Meetup", false);
    }

    rtnGroupImg(group) {
        let thumb = './img/blank_meetup.png';
        if (group.hasOwnProperty('group_photo')) {
            thumb = group.group_photo.photo_link;
        } else {
            if (group.hasOwnProperty('organizer')) {
                if (group.organizer.hasOwnProperty('photo')) {
                    thumb = group.organizer.photo.photo_link;
                }
            }
        }
        return thumb;
    }

    rtnEventFee(event) {
        return event.hasOwnProperty('fee') ? ((event.fee.currency == "GBP") ? "£" : event.fee.currency) + (Math.round(event.fee.amount * 100) / 100) : null;
    }

    rtnEventVenue(event) {
        let venueName = (event.hasOwnProperty('venue')) ? event.venue.name : "N/A";
        let venueAddress = (event.hasOwnProperty('venue')) ? event.venue.address_1 : "";
        let venuePostcode = (event.hasOwnProperty('venue')) ? event.venue.city : "";
        let venue = (venueName == "N/A") ? "N/A" : venueName + ' - ' + venueAddress + ' (' + venuePostcode + ')';
        return venue.replace("undefined", "").replace("undefined", "").replace(' - ()', "");
    }

    async getData() {
        return new Promise(resolve => {
            this.getGroups().then(groups => {
                this.getEvents().then(events => {
                    resolve([groups, events]);
                })
            });
        });
    }

    async getGroups() {
        return new Promise(resolve => {
            Promise.all(this.groups.map(groupId => fetch(this.apiGroup(groupId), this.header))).then(responses =>
                Promise.all(responses.map(res => res.text()))
            ).then(texts => {
                let json = texts.map(t => JSON.parse(t)).filter(e => !e.hasOwnProperty("errors")).map(this.group);
                resolve(json);
            })
        })
    }

    async getEvents() {
        return new Promise(resolve => {
            Promise.all(this.groups.map(groupId => fetch(this.apiEvents(groupId), this.header))).then(responses =>
                Promise.all(responses.map(res => res.text()))
            ).then(texts => {
                let json = texts.map(t => JSON.parse(t));
                let converted = [].concat(...json).filter(e => !e.hasOwnProperty("errors")).map(this.event);
                resolve(converted);
            })
        })
    }

    removeHTML(html) {
        return html.replace(/(<([^>]+)>)/ig, "");
    }
}

// new meetup().getEvents().then(console.log)
// new meetup().getGroups().then(console.log)

module.exports = meetup;
