const bars = document.querySelector('.bars');
let openmenu = 0;
//트리거변수

bars.addEventListener('click', () => {
	const headerTabMenu = document.querySelector('.header-tab-menu');
	if (openmenu == 0) {
		headerTabMenu.style.top = '110px';
		openmenu = 1;
	} else if (openmenu == 1) {
		headerTabMenu.style.top = '-120px';
		openmenu = 0;
	}
});

//페이지를 스크롤할때 헤더의 디자인이 변경됨
window.addEventListener('scroll', () => {
	let header = document.querySelector('.header');
	let bottomBar = document.querySelector('.bottom-bar');
	let topBar = document.querySelector('.top-bar');
	const headerTabMenu = document.querySelector('.header-tab-menu');

	//스크롤을 조금이라도 내리면 바뀌게할예정
	//100인이유는 스크롤을 마우스에서 한칸 내리면 이동하는 단위가 100입니다
	if (window.pageYOffset > 100) {
		topBar.style.display = 'none';
		headerTabMenu.style.top = '-150px';
		header.style.height = '50px';
		bottomBar.style.bottom = '-50px';
		openmenu = 0;
	} else {
		topBar.style.display = 'flex';
		header.style.height = '110px';
		bottomBar.style.bottom = '0px';
	}
});
