"use strict";
let modal_modal_list = document.querySelectorAll('[data-id]');
modal_modal_list.forEach((e) => {
  let data = e.getAttribute('data-id'),
    // modal_content = document.querySelector('.modal[data-modal="' + data + '"]'),
    modal_content_data = e.innerHTML,
    layout = '<div class="modal__overlay"><div class="modal__body"><button class="modal__close">X</button>' + modal_content_data + '</div></div>';

  let hide = () => e.style.display = 'none';

  hide();

  let show = () => e.style.display = 'block';

  e.innerHTML = layout;

  let close_btn = e.querySelector('.modal__close');

  close_btn.addEventListener('click', hide)

  let modal_btn = document.querySelectorAll('.btn[data-modal="' + data + '"]');
  modal_btn.forEach((e) => {
    e.addEventListener('click', show)
  })
})