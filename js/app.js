
window.onload = function() {

	


    ScreenManager.showScreen('intro');


    play_bt.onclick = function(){

        ScreenManager.showScreen('game');

        ColorWheel.generateCircle('circle_svg', 3);
    }



};


