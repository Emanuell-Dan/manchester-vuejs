/*
	** Custom directive for lazy loading images.
*/

export default {
  inserted: el => {
		// Function responsible for replacing the src value with data-url.
    function loadImage() {
      const imageElement = Array.from(el.children).find(el => el.nodeName === "IMG");
			
      if (imageElement) {
				// Listener that will fire a callback function when the loading is finished.
				// Callback will be responsible for hiding the spinner and adding the animation (fade-in effect) to the image using a CSS class.
        imageElement.addEventListener("load", () => setTimeout(() => el.classList.add("loaded"), 100));
        imageElement.addEventListener("error", () => console.log('error'));
        imageElement.src = imageElement.dataset.url;
      }
    }

		// Intersection Observer’s function fired when it detects that the element enters the viewport or a parent component element.
    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

		// Responsible for creating our Intersection Observer and attaching it to our element.
		// Accepts a callback that is fired when the observed element passes the specified threshold and the options object that carries our observer options.
    function createObserver() {
      const options = {
        root: null, // reference object used to base the visibility of our watched element
        threshold: "0" // execute as soon as even one pixel is visible
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
		}
		
		// Falllback
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  }
};
