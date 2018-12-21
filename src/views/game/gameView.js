import BaseView from '../baseView/baseView.js';
import bus from '../../js/modules/EventBus.js';
import GameService from '../../services/gameService.js';

export default class GameView extends BaseView {
    constructor(el, router) {
        super(el);
        this.RouterModule = router;
        bus.on('startgame', async (text) => {
            this.el.innerHTML = '';
            const gameService = new GameService(this.el, this.backToMenu.bind(this), false);

        });
    }

    backToMenu(text){
        this.el.innerHTML = '';
        this.RouterModule.open('/', text);
    }

    render(text) {
        bus.emit('startgame', text);
    }

}