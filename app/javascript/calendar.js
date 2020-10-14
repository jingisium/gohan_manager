import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all.js';

window.addEventListener('turbolinks:load', () => {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    locales: allLocales,
    locale: 'ja',
    plugins: [ dayGridPlugin, interactionPlugin ]
  });

  calendar.render();
});