import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all.js';

window.addEventListener('turbolinks:load', () => {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    locales: allLocales,
    locale: 'ja',
    contentHeight: 'auto',
    plugins: [ dayGridPlugin, interactionPlugin ],
    headerToolbar: {
      start: 'prev',
      center: 'title',
      end: 'today next'
    },

    dayCellContent: function(e) {
      e.dayNumberText = e.dayNumberText.replace('日', '');
    },

    events: events,

    eventContent: function(plan) {
      var arrayOfDomNodes = [];
      
      var titleEvent = document.createElement('div');
      if(plan.event._def.title) {
        titleEvent.innerHTML = plan.event._def.title;
        titleEvent.classList = "fc-event-title fc-sticky";
      };

      var imgEventWrap = document.createElement('div');
      if(plan.event.extendedProps.image_url) {
        var imgEvent = '<img src="'+plan.event.extendedProps.image_url+'" class="w-100 h-75" >';
        imgEventWrap.classList = "fc-event-img";
        imgEventWrap.innerHTML = imgEvent;
      };

      arrayOfDomNodes = [ titleEvent,imgEventWrap ];

      return { domNodes: arrayOfDomNodes };
    },
  });

  calendar.render();
});