import ViewHelper from './viewHelper';
import Welcomescreen from './components/welcomescreen';
import Desktop from './components/desktop';

const main = (() => {
  console.log('Markich OS is running');

  ViewHelper.init();
  ViewHelper.findIncludes().then((res) => {
    Welcomescreen.disappear(0);
    if (!localStorage.userLoadedOnce) {
      Welcomescreen.appear(3000);
      setTimeout(() => {
        Welcomescreen.disappear(2000, true);
        Desktop.load();
      }, 3000);
      localStorage.userLoadedOnce = true;
    }
    else {
      Desktop.load();
    }
  });
})();
