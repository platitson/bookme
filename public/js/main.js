import './sign-in.js';
import './coronavirus.js';
import './page-turner.js';
import './log-out.js';
import './destinations-turner.js';
import './destinations-builder.js';
import './feedback-form.js';
import './feedback-page.js';
import './language-select.js';
import './navbar.js';
import './translations.js';
import './hotel-search.js';
import { Translation } from './translations.js';
import { LanguageMenu } from './language-select.js';
import { ColoredClock } from './colored-clock.js';

const coloredClock = new ColoredClock({
    element: document.querySelector('.colored-clock'),
    color: 'white',
});

coloredClock.clockStart();

const t = new Translation();
t.init();
t.initPassTranslationEventListener();

const languageMenu = new LanguageMenu(t);