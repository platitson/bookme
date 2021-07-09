import './sign-in.js';
import './coronavirus.js';
import './page-turner.js';
import './log-out.js';
import './destinations-turner.js';
import './destinations-builder.js';
import './feedback-form.js';
import './feedback-page.js';
import { ColoredClock } from './colored-clock.js';

const coloredClock = new ColoredClock({
    element: document.querySelector('.colored-clock'),
    color: 'white',
});

coloredClock.clockStart();