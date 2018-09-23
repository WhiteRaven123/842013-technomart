var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-window");

var mapLink = document.querySelector(".contacts img");
var mapPopup = document.querySelector(".map-window");

var buy = document.querySelectorAll(".btn-buy");
var buyPopup = document.querySelector(".modal-add-goods");

// Модальное окно обратной связи
if (popup) {
  var close = document.querySelector(".modal-close");
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("feedback-window-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-window-show");
    popup.classList.remove("modal-error");
  });

  var form = popup.querySelector(".form-feedback");
  var name = popup.querySelector(".feed-name");
  var mail = popup.querySelector(".feed-mail");
  form.addEventListener("submit", function(evt) {
    if (name.value == "" || mail.value == "") {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Не заполнены поля");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("feedback-window-show")) {
        popup.classList.remove("feedback-window-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}

// Модальное окно карты
if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");
  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("map-window-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-window-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("map-window-show")) {
        mapPopup.classList.remove("map-window-show");
      }
    }
  });
}

// Модальное окно покупки
if (buyPopup) {
  var buyClose = buyPopup.querySelector(".modal-close");
  var resume = buyPopup.querySelector(".btn-continue");
  for (var i = 0; i < buy.length; i++) {
    console.log(buy[i]);
    buy[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      buyPopup.classList.add("modal-add-show");
    });
  }

  buyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-add-show");
  });

  resume.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-add-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (buyPopup.classList.contains("modal-add-show")) {
        buyPopup.classList.remove("modal-add-show");
      }
    }
  });
}
