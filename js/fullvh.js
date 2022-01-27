const setFillHeight = () => {
const vh = window.innerHeight * 0.01; document.documentElement.style.setProperty('--vh', `${vh}px`); }
window.addEventListener('resize', setFillHeight);// 画面のサイズ変動があった時に高さを再計算する
setFillHeight(); // 初期化
