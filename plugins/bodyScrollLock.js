import bodyScroll from 'body-scroll-toggle';

export const scrollLock = () => {
	bodyScroll.disable();
};

export const scrollUnlock = () => {
	bodyScroll.enable();
};
