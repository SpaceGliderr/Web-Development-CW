var modalContent;
var closeModal;

function showModal(n) {
  modalContent = document.getElementById("modal-" + n);
  closeModal = document.getElementsByClassName("close" + n)[0];

  modalContent.style.display = "block";

  closeModal.onclick = function () {
    modalContent.style.display = "none";
  }
}

function getModalContent() {
  return modalContent;
}

window.onclick = function () {
  if (event.target == getModalContent()) {
    getModalContent().style.display = "none";
  }
}

function showDesc(n) {
  descContent = document.getElementById("user-desc" + n).classList;
  descContent.remove('hidden');
}

function getDescContent() {
  return descContent;
}

function hideDesc() {
  getDescContent().add('hidden');
}

var upvote1, upvote2, upvote3, upvote4;
var downvote1, downvote2, downvote3, downvote4;
function ratings(n, x, y) {
  if(y == 1) {
    upvote1 = document.getElementById("upvote-blank" + x).classList;
    upvote2 = document.getElementById("upvote-color" + x).classList;

    upvote3 = document.getElementById("modal-upvote-blank" + x).classList;
    upvote4 = document.getElementById("modal-upvote-color" + x).classList;

    downvote1 = document.getElementById("downvote-blank" + x).classList;
    downvote2 = document.getElementById("downvote-color" + x).classList;

    downvote3 = document.getElementById("modal-downvote-blank" + x).classList;
    downvote4 = document.getElementById("modal-downvote-color" + x).classList;

    controlRatings(n, upvote1, upvote2, upvote3, upvote4, downvote1, downvote3, downvote4);
  } else {
    upvote1 = document.getElementById("modal-upvote-blank" + x).classList;
    upvote2 = document.getElementById("modal-upvote-color" + x).classList;

    upvote3 = document.getElementById("upvote-blank" + x).classList;
    upvote4 = document.getElementById("upvote-color" + x).classList;

    downvote1 = document.getElementById("modal-downvote-blank" + x).classList;
    downvote2 = document.getElementById("modal-downvote-color" + x).classList;

    downvote3 = document.getElementById("downvote-blank" + x).classList;
    downvote4 = document.getElementById("downvote-color" + x).classList;

    controlRatings(n, upvote1, upvote2, upvote3, upvote4, downvote1, downvote3, downvote4);
  }
}

function controlRatings(n, upvote1, upvote2, upvote3, upvote4, downvote1, downvote3, downvote4) {
  if(n == 1) {
    upvote1.add('hidden');
    upvote2.remove('hidden');

    upvote3.add('hidden');
    upvote4.remove('hidden');

    downvote1.remove('hidden');
    downvote2.add('hidden');

    downvote3.remove('hidden');
    downvote4.add('hidden');

  } else if (n == 2) {
    upvote1.remove('hidden');
    upvote2.add('hidden');

    upvote3.remove('hidden');
    upvote4.add('hidden');

  } else if (n == 3) {
    downvote1.add('hidden');
    downvote2.remove('hidden');

    downvote3.add('hidden');
    downvote4.remove('hidden');

    upvote1.remove('hidden');
    upvote2.add('hidden');

    upvote3.remove('hidden');
    upvote4.add('hidden');

  } else {
    downvote1.remove('hidden');
    downvote2.add('hidden');

    downvote3.remove('hidden');
    downvote4.add('hidden');
  }
}
