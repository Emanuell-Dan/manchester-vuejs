export default {
	methods: {
    getDateAndTime(time) {
      let date = new Date(time);
      return `${date.toDateString().slice(4)} at ${date.toLocaleTimeString().slice(0, -3)}`;
    }
  }
}
