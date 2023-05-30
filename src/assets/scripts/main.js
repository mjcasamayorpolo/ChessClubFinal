import { Calendar } from 'fullcalendar';
import lazyframe from "lazyframe";

const videoContainer = document.querySelector('.video');
const lazyVideo = document.createElement('div');
lazyVideo.classList.add('lazyframe');
lazyVideo.setAttribute('data-vendor','youtube');
lazyVideo.setAttribute('data-src', "https://www.youtube.com/embed/Kq8NU4xx2Zc");
lazyVideo.setAttribute('data-autoplay', false);
lazyframe(lazyVideo,{
    lazyload: true,
    autoplay: false
});
videoContainer.appendChild(lazyVideo);

const calendarEl = document.querySelector('.calendar__div')
const calendar = new Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  locale: 'es-ES',
  headerToolbar: { start: 'title', center: '', end: 'prev,next' },
  firstDay: 1,
  events: [
    {
      id: 'mayo01',
      title: 'Torneo',
      description: 'Torneo de ajedrez del Mediterráneo',
      start: '2023-05-20'
    },
    {
      id: 'mayo02',
      title: 'Clase',
      description: 'Clase de ajedrez - Horario: 18:00-19:00',
      start: '2023-05-02'
    },
    {
      id: 'mayo03',
      title: 'Clase',
      description: 'Clase de ajedrez - Horario: 18:00-19:00',
      start: '2023-05-09'
    },
    {
      id: 'mayo04',
      title: 'Clase',
      description: 'Clase de ajedrez - Horario: 18:00-19:00',
      start: '2023-05-16'
    },
    {
      id: 'mayo05',
      title: 'Clase',
      description: 'Clase de ajedrez - Horario: 18:00-19:00',
      start: '2023-05-23'
    },
    {
      id: 'mayo06',
      title: 'Clase',
      description: 'Clase de ajedrez - Horario: 18:00-19:00',
      start: '2023-05-30'
    }
  ]
});
calendar.render();