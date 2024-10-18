gsap.registerPlugin(ScrollTrigger);


const {innerHeight} = window;

gsap.to(".scale__item", {
    scale: 6, stager: 0.25,
    scrollTrigger: {
        trigger: "#scale",
        // start: "top bottom", 
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 2,
        pin: true, 
        markers: true 
    }
}) 

gsap.to(".scale__text", {
    scale: 3,       // Увеличиваем текст до 50 раз
    stagger: 0.25,   // Задержка анимации для каждого элемента
    scrollTrigger: {
      trigger: ".scale__info",         // Триггер для текста — это элемент с классом .scale__item
    //   start: "top 50%",             // Анимация текста начинается, когда верх .scale__item достигает нижней границы окна
      end: `+=${innerHeight}`,         // Анимация заканчивается через высоту экрана
      scrub: true,                     // Анимация зависит от скролла
      pin: true,                       // Закрепляем элемент
      markers: true                    // Включаем маркеры для отладки (можно убрать)
    }
  });



