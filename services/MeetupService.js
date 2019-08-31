import Axios from 'axios';

const requestParams = {
	url: 'https://api.meetup.com/',
	group: 'VueJS-Manchester'
};
const {url, group} = requestParams;

export const getPastEvents = () => Axios.get(`${url}/${group}/events?status=past`, {
	headers: {
		'Content-Type': 'application/jsonp'
	}
});

export const getFutureEvents = () => Axios.get(`${url}/${group}/events`, {
	headers: {
		'Content-Type': 'application/jsonp'
	}
});
