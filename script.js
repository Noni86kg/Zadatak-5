const toggleBtn = document.querySelector('.toggle');
const togleCircle = document.querySelector('.togle-circle');















// 3 modes
let activeMode = 0;

toggleBtn.addEventListener('click' , function(e) {
    const clicked = e.target.closest('.toggle')

    activeMode += 1;
    if (activeMode > 2) {
        activeMode = 0;
    }
    if (activeMode === 1) {
        document.documentElement.style.setProperty('--toglePos', 'center');
        document.documentElement.style.setProperty('--circlePos', '-2px');
        document.documentElement.style.setProperty('--them1bg', '#E6E6E6');
        document.documentElement.style.setProperty('--text1White', '#35352c');
        document.documentElement.style.setProperty('--toggle1bg', '#D2CDCD');
        document.documentElement.style.setProperty('--red1toggleBg', '#C85402');
        document.documentElement.style.setProperty('--display1bg', '#EEEEEE');
        document.documentElement.style.setProperty('--key1bgWhite', '#E5E4E1');
        document.documentElement.style.setProperty('--text1Gray', '#36362C');
        document.documentElement.style.setProperty('--key1shadowWhite', '#A79E91');
        document.documentElement.style.setProperty('--key1bgGray', '#378187');
        document.documentElement.style.setProperty('--key1shadowGray', '#1B6066');
        document.documentElement.style.setProperty('--red1toggleShadow', '#873901');
        document.documentElement.style.setProperty('--text1WhiteHover', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--key1bgGrayHover', '#62B5BC');
        document.documentElement.style.setProperty('--red1toggleBgHover', '#FF8A38');
    }
    if (activeMode === 2) {
        document.documentElement.style.setProperty('--toglePos', 'flex-end');
        document.documentElement.style.setProperty('--circlePos', '2px');
        document.documentElement.style.setProperty('--them1bg', '#17062A');
        document.documentElement.style.setProperty('--text1White', '#FFE53D');
        document.documentElement.style.setProperty('--toggle1bg', '#1E0936');
        document.documentElement.style.setProperty('--red1toggleBg', '#00DED0');
        document.documentElement.style.setProperty('--display1bg', '#1E0936');
        document.documentElement.style.setProperty('--key1bgWhite', '#331C4D');
        document.documentElement.style.setProperty('--text1Gray', '#FFE53D');
        document.documentElement.style.setProperty('--key1shadowWhite', '#881C9E');
        document.documentElement.style.setProperty('--key1bgGray', '#56077C');
        document.documentElement.style.setProperty('--key1shadowGray', '#BE15F4');
        document.documentElement.style.setProperty('--red1toggleShadow', '#6CF9F0');
        document.documentElement.style.setProperty('--text1WhiteHover', '#6C34AC');
        document.documentElement.style.setProperty('--key1bgGrayHover', '#8631AF');
        document.documentElement.style.setProperty('--red1toggleBgHover', '#93FFF8');
    }
    if (activeMode === 0) {
        document.documentElement.style.setProperty('--toglePos', 'flex-start');
        document.documentElement.style.setProperty('--circlePos', '-6px');
        document.documentElement.style.setProperty('--them1bg', 'rgb(58, 71, 100)');
        document.documentElement.style.setProperty('--text1White', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--toggle1bg', 'rgb(35, 44, 67)');
        document.documentElement.style.setProperty('--red1toggleBg', 'rgb(208, 63, 47)');
        document.documentElement.style.setProperty('--display1bg', 'rgb(24, 32, 52)');
        document.documentElement.style.setProperty('--key1bgWhite', 'rgb(234, 227, 220)');
        document.documentElement.style.setProperty('--text1Gray', 'rgb(68, 75, 90)');
        document.documentElement.style.setProperty('--key1shadowWhite', 'rgb(180, 165, 151)');
        document.documentElement.style.setProperty('--key1bgGray', 'rgb(99, 112, 151)');
        document.documentElement.style.setProperty('--key1shadowGray', 'rgb(64, 78, 114)');
        document.documentElement.style.setProperty('--red1toggleShadow', 'rgb(147, 38, 26)');
        document.documentElement.style.setProperty('--text1WhiteHover', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--key1bgGrayHover', 'rgb(162, 178, 225)');
        document.documentElement.style.setProperty('--red1toggleBgHover', 'rgb(249, 107, 91)');
    }
})

