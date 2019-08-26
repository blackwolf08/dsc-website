window.onload = function() {
  let body = document.querySelector('body');
  body.style.display = 'block';
  scrolly();

  var myEvents = [
    {
      date: '05:00 pm',
      content: 'Introduction'
    },
    {
      date: '06:00 pm',
      content: 'Project presentation'
    },
    {
      date: '7:00 pm',
      content: 'Swags distribution!'
    }
  ];

  $('#my-timeline').roadmap(myEvents);
  $('#my-timeline').roadmap(myEvents, {
    eventsPerSlide: 5 // default: 6
  });

  $('#my-timeline').roadmap(myEvents, {
    slide: 2 // default: 1
  });

  $('#my-timeline').roadmap(myEvents, {
    // default: 'prev'
    prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',

    // default: 'next'
    nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
  });

  $('#my-timeline').roadmap(myEvents, {
    eventTemplate:
      '<li class="timeline__events__event">' +
      '<div class="event">' +
      '<div class="event__date">####DATE###</div>' +
      '<div class="event__content">####CONTENT###</div>' +
      '</div>' +
      '</li>'
  });
  $('#my-timeline').roadmap(myEvents, {
    // auto, horizontal, vertical
    orientation: 'auto'
  });
};
