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
      date: '05:15 pm',
      content: 'Project presentation'
    },
    {
      date: '05:40 pm',
      content: 'What are the new tech stacks?'
    },
    {
      date: '06:00 pm',
      content: 'QUIZ! and Schwags!'
    },
    {
      date: '06:30 pm',
      content: 'Difference between Development and Competitive Programming'
    },
    {
      date: '06:40 pm',
      content: "Faculty Advisor DSC - Mahendra Gurve Sir's Speech "
    },
    {
      date: '06:50 pm',
      content: 'Coordinator Introduction'
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
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  });
};
