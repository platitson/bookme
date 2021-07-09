import './sign-in.js';
import './coronavirus.js';
import './page-turner.js';
import './log-out.js';
import './destinations-turner.js';
import './destinations-builder.js';
import './feedback-form.js';
import './feedback-page.js';
import './language-select.js';
import './translations.js';
import { Clock } from './clock.js';
import { Translation } from './translations.js';
import { LanguageMenu } from './language-select.js';

const clock = new Clock({
    clock: document.getElementById('clock')
});

clock.clockStart();

const t = new Translation();
t.init();
t.initPassTranslationEventListener();

const languageMenu = new LanguageMenu(t);