import Axios from 'axios';

const requestParams = {
	url: 'https://api.meetup.com/2',
	group: 'VueJS-Manchester',
	isSigned: 'true',
	photoHost: 'public',
	status: 'past'
};
const {url, group, isSigned, photoHost, status} = requestParams;

export const getPastEvents = () => Axios.get(url +	'/events?&sign=' + isSigned + '&photo-host=' + photoHost + '&group_urlname=' + group + '&status=' +	status);

export const getFutureEvents = () => Axios.get(url + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&group_urlname=' + group);
