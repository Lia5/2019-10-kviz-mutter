$(function() {

  if((($('.question3').length)||$('.question4').length||$('.question5').length)) {
    $('.btn--wrong').click(function() {
      this.classList.add('active');
    });
    $('.btn--right').click(function() {
      this.classList.add('active');
    });    
  }


  //qa1
  if($('.question1').length) {
    let currentDroppable = null;
    let currentDroppableError = null;

    question1__word1.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word1.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word1.getBoundingClientRect().top;
      question1__word1.style.position = 'absolute';
      question1__word1.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word1.style.left = pageX - shiftX + 'px';
        question1__word1.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word1.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic1');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word1.onmouseup = null;
      };
    };
    question1__word2.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word2.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word2.getBoundingClientRect().top;
      question1__word2.style.position = 'absolute';
      question1__word2.style.zIndex = 1000;
      document.body.append(question1__word2);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word2.style.left = pageX - shiftX + 'px';
        question1__word2.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word2.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic2');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word2.onmouseup = null;
      };
    };
    question1__word3.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word3.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word3.getBoundingClientRect().top;
      question1__word3.style.position = 'absolute';
      question1__word3.style.zIndex = 1000;
      document.body.append(question1__word3);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word3.style.left = pageX - shiftX + 'px';
        question1__word3.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word3.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic3');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word3.onmouseup = null;
      };
    };
    question1__word4.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word4.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word4.getBoundingClientRect().top;
      question1__word4.style.position = 'absolute';
      question1__word4.style.zIndex = 1000;
      document.body.append(question1__word4);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word4.style.left = pageX - shiftX + 'px';
        question1__word4.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word4.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic4');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word4.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word4.onmouseup = null;
      };
    };
    question1__word5.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word5.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word5.getBoundingClientRect().top;
      question1__word5.style.position = 'absolute';
      question1__word5.style.zIndex = 1000;
      document.body.append(question1__word5);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word5.style.left = pageX - shiftX + 'px';
        question1__word5.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word5.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word5.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic5');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word5.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word5.onmouseup = null;
      };
    };
    question1__word6.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word6.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word6.getBoundingClientRect().top;
      question1__word6.style.position = 'absolute';
      question1__word6.style.zIndex = 1000;
      document.body.append(question1__word6);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word6.style.left = pageX - shiftX + 'px';
        question1__word6.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word6.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word6.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic6');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word6.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word6.onmouseup = null;
      };
    };
    question1__word7.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word7.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word7.getBoundingClientRect().top;
      question1__word7.style.position = 'absolute';
      question1__word7.style.zIndex = 1000;
      document.body.append(question1__word7);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word7.style.left = pageX - shiftX + 'px';
        question1__word7.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word7.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word7.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic7');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word7.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word7.onmouseup = null;
      };
    };
    question1__word8.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word8.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word8.getBoundingClientRect().top;
      question1__word8.style.position = 'absolute';
      question1__word8.style.zIndex = 1000;
      document.body.append(question1__word8);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word8.style.left = pageX - shiftX + 'px';
        question1__word8.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word8.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word8.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic8');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word8.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word8.onmouseup = null;
      };
    };
    question1__word9.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word9.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word9.getBoundingClientRect().top;
      question1__word9.style.position = 'absolute';
      question1__word9.style.zIndex = 1000;
      document.body.append(question1__word9);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word9.style.left = pageX - shiftX + 'px';
        question1__word9.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word9.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word9.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic9');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word9.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word9.onmouseup = null;
      };
    };
    question1__word10.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word10.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word10.getBoundingClientRect().top;
      question1__word10.style.position = 'absolute';
      question1__word10.style.zIndex = 1000;
      document.body.append(question1__word10);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word10.style.left = pageX - shiftX + 'px';
        question1__word10.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word10.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word10.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic10');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word10.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word10.onmouseup = null;
      };
    };
    question1__word11.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word11.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word11.getBoundingClientRect().top;
      question1__word11.style.position = 'absolute';
      question1__word11.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word11.style.left = pageX - shiftX + 'px';
        question1__word11.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word11.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word11.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic11');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word11.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word11.onmouseup = null;
      };
    };
    question1__word12.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word12.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word12.getBoundingClientRect().top;
      question1__word12.style.position = 'absolute';
      question1__word12.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word12.style.left = pageX - shiftX + 'px';
        question1__word12.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word12.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word12.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic12');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word12.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word12.onmouseup = null;
      };
    };
    question1__word13.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word13.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word13.getBoundingClientRect().top;
      question1__word13.style.position = 'absolute';
      question1__word13.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word13.style.left = pageX - shiftX + 'px';
        question1__word13.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word13.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word13.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic13');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word13.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word13.onmouseup = null;
      };
    };
    question1__word14.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word14.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word14.getBoundingClientRect().top;
      question1__word14.style.position = 'absolute';
      question1__word14.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word14.style.left = pageX - shiftX + 'px';
        question1__word14.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word14.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word14.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic14');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word14.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word14.onmouseup = null;
      };
    };
    question1__word15.onmousedown = function(event) {
      let shiftX = event.clientX - question1__word15.getBoundingClientRect().left;
      let shiftY = event.clientY - question1__word15.getBoundingClientRect().top;
      question1__word15.style.position = 'absolute';
      question1__word15.style.zIndex = 1000;
      document.body.append(question1__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question1__word15.style.left = pageX - shiftX + 'px';
        question1__word15.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question1__word15.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question1__word15.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question1__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question1__pic15');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question1__word15.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question1__word15.onmouseup = null;
      };
    };





    function enterDroppableError(elem) {
      elem.classList.add('error');
    }

    function leaveDroppableError(elem) {
      elem.classList.remove('error');
    }

    function enterDroppable(elem) {
      elem.classList.add('right');
    }

    function leaveDroppable(elem) {
      elem.classList.remove('right');
    }
    question1__word1.ondragstart = function() {
      return false;
    };
    question1__word2.ondragstart = function() {
      return false;
    };
    question1__word3.ondragstart = function() {
      return false;
    };
    question1__word4.ondragstart = function() {
      return false;
    };
    question1__word5.ondragstart = function() {
      return false;
    };
    question1__word6.ondragstart = function() {
      return false;
    };
    question1__word7.ondragstart = function() {
      return false;
    };
    question1__word8.ondragstart = function() {
      return false;
    };
    question1__word9.ondragstart = function() {
      return false;
    };
    question1__word10.ondragstart = function() {
      return false;
    };
    question1__word11.ondragstart = function() {
      return false;
    };
    question1__word12.ondragstart = function() {
      return false;
    };
    question1__word13.ondragstart = function() {
      return false;
    };
    question1__word14.ondragstart = function() {
      return false;
    };
    question1__word15.ondragstart = function() {
      return false;
    };
  }



  //qa2
  if($('.question2').length) {
    let currentDroppable = null;
    let currentDroppableError = null;
    question2__word1.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word1.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word1.getBoundingClientRect().top;
      question2__word1.style.position = 'absolute';
      question2__word1.style.zIndex = 1000;
      document.body.append(question2__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word1.style.left = pageX - shiftX + 'px';
        question2__word1.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word1.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic1');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word1.onmouseup = null;
      };
    };
    question2__word2.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word2.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word2.getBoundingClientRect().top;
      question2__word2.style.position = 'absolute';
      question2__word2.style.zIndex = 1000;
      document.body.append(question2__word2);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word2.style.left = pageX - shiftX + 'px';
        question2__word2.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word2.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic2');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word2.onmouseup = null;
      };
    };
    question2__word3.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word3.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word3.getBoundingClientRect().top;
      question2__word3.style.position = 'absolute';
      question2__word3.style.zIndex = 1000;
      document.body.append(question2__word3);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word3.style.left = pageX - shiftX + 'px';
        question2__word3.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word3.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic3');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word3.onmouseup = null;
      };
    };
    question2__word4.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word4.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word4.getBoundingClientRect().top;
      question2__word4.style.position = 'absolute';
      question2__word4.style.zIndex = 1000;
      document.body.append(question2__word4);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word4.style.left = pageX - shiftX + 'px';
        question2__word4.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word4.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic4');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word4.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word4.onmouseup = null;
      };
    };
    question2__word5.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word5.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word5.getBoundingClientRect().top;
      question2__word5.style.position = 'absolute';
      question2__word5.style.zIndex = 1000;
      document.body.append(question2__word5);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word5.style.left = pageX - shiftX + 'px';
        question2__word5.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word5.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word5.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic5');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word5.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word5.onmouseup = null;
      };
    };
    question2__word6.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word6.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word6.getBoundingClientRect().top;
      question2__word6.style.position = 'absolute';
      question2__word6.style.zIndex = 1000;
      document.body.append(question2__word6);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word6.style.left = pageX - shiftX + 'px';
        question2__word6.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word6.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word6.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic6');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word6.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word6.onmouseup = null;
      };
    };
    question2__word7.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word7.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word7.getBoundingClientRect().top;
      question2__word7.style.position = 'absolute';
      question2__word7.style.zIndex = 1000;
      document.body.append(question2__word7);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word7.style.left = pageX - shiftX + 'px';
        question2__word7.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word7.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word7.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic7');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word7.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word7.onmouseup = null;
      };
    };
    question2__word8.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word8.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word8.getBoundingClientRect().top;
      question2__word8.style.position = 'absolute';
      question2__word8.style.zIndex = 1000;
      document.body.append(question2__word8);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word8.style.left = pageX - shiftX + 'px';
        question2__word8.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word8.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word8.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic8');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word8.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word8.onmouseup = null;
      };
    };
    question2__word9.onmousedown = function(event) {
      let shiftX = event.clientX - question2__word9.getBoundingClientRect().left;
      let shiftY = event.clientY - question2__word9.getBoundingClientRect().top;
      question2__word9.style.position = 'absolute';
      question2__word9.style.zIndex = 1000;
      document.body.append(question2__word9);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question2__word9.style.left = pageX - shiftX + 'px';
        question2__word9.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question2__word9.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question2__word9.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question2__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question2__pic9');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question2__word9.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question2__word9.onmouseup = null;
      };
    };


    function enterDroppableError(elem) {
      elem.classList.add('error');
    }

    function leaveDroppableError(elem) {
      elem.classList.remove('error');
    }

    function enterDroppable(elem) {
      elem.classList.add('right');
    }

    function leaveDroppable(elem) {
      elem.classList.remove('right');
    }
    question2__word1.ondragstart = function() {
      return false;
    };
    question2__word2.ondragstart = function() {
      return false;
    };
    question2__word3.ondragstart = function() {
      return false;
    };
    question2__word4.ondragstart = function() {
      return false;
    };
    question2__word5.ondragstart = function() {
      return false;
    };
    question2__word6.ondragstart = function() {
      return false;
    };
    question2__word7.ondragstart = function() {
      return false;
    };
    question2__word8.ondragstart = function() {
      return false;
    };
    question2__word9.ondragstart = function() {
      return false;
    };
  }

  //qa6


  //qa2
  if($('.question6').length) {
    let currentDroppable = null;
    let currentDroppableError = null;
    question6__word1.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word1.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word1.getBoundingClientRect().top;
      question6__word1.style.position = 'absolute';
      question6__word1.style.zIndex = 1000;
      document.body.append(question6__word1);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word1.style.left = pageX - shiftX + 'px';
        question6__word1.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word1.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic1');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word1.onmouseup = null;
      };
    };
    question6__word2.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word2.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word2.getBoundingClientRect().top;
      question6__word2.style.position = 'absolute';
      question6__word2.style.zIndex = 1000;
      document.body.append(question6__word2);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word2.style.left = pageX - shiftX + 'px';
        question6__word2.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word2.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word2.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic2');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word2.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word2.onmouseup = null;
      };
    };
    question6__word3.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word3.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word3.getBoundingClientRect().top;
      question6__word3.style.position = 'absolute';
      question6__word3.style.zIndex = 1000;
      document.body.append(question6__word3);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word3.style.left = pageX - shiftX + 'px';
        question6__word3.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word3.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word3.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic3');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word3.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word3.onmouseup = null;
      };
    };
    question6__word4.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word4.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word4.getBoundingClientRect().top;
      question6__word4.style.position = 'absolute';
      question6__word4.style.zIndex = 1000;
      document.body.append(question6__word4);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word4.style.left = pageX - shiftX + 'px';
        question6__word4.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word4.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word4.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic4');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word4.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word4.onmouseup = null;
      };
    };
    question6__word11.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word11.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word11.getBoundingClientRect().top;
      question6__word11.style.position = 'absolute';
      question6__word11.style.zIndex = 1000;
      document.body.append(question6__word11);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word11.style.left = pageX - shiftX + 'px';
        question6__word11.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word11.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word11.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic1');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word11.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word11.onmouseup = null;
      };
    };
    question6__word22.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word22.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word22.getBoundingClientRect().top;
      question6__word22.style.position = 'absolute';
      question6__word22.style.zIndex = 1000;
      document.body.append(question6__word22);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word22.style.left = pageX - shiftX + 'px';
        question6__word22.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word22.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word22.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic2');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word22.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word22.onmouseup = null;
      };
    };
    question6__word33.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word33.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word33.getBoundingClientRect().top;
      question6__word33.style.position = 'absolute';
      question6__word33.style.zIndex = 1000;
      document.body.append(question6__word33);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word33.style.left = pageX - shiftX + 'px';
        question6__word33.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word33.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word33.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic3');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word33.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word33.onmouseup = null;
      };
    };
    question6__word44.onmousedown = function(event) {
      let shiftX = event.clientX - question6__word44.getBoundingClientRect().left;
      let shiftY = event.clientY - question6__word44.getBoundingClientRect().top;
      question6__word44.style.position = 'absolute';
      question6__word44.style.zIndex = 1000;
      document.body.append(question6__word44);
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        question6__word44.style.left = pageX - shiftX + 'px';
        question6__word44.style.top = pageY - shiftY + 'px';
      }
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        question6__word44.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        question6__word44.hidden = false;
        if (!elemBelow) return;
        let droppableBelowError = elemBelow.closest('.question__pic');
        if (currentDroppableError != droppableBelowError) {
          if (currentDroppableError) { // null when we were not over a droppable before this event
            leaveDroppableError(currentDroppableError);
          }
          currentDroppableError = droppableBelowError;
          if (currentDroppableError) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppableError(currentDroppableError);
          }
        }
        let droppableBelow = elemBelow.closest('#question6__pic4');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }
      document.addEventListener('mousemove', onMouseMove);

      question6__word44.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        question6__word44.onmouseup = null;
      };
    };


    function enterDroppableError(elem) {
      elem.classList.add('error');
    }

    function leaveDroppableError(elem) {
      elem.classList.remove('error');
    }

    function enterDroppable(elem) {
      elem.classList.add('right');
    }

    function leaveDroppable(elem) {
      elem.classList.remove('right');
    }
    question6__word1.ondragstart = function() {
      return false;
    };
    question6__word2.ondragstart = function() {
      return false;
    };
    question6__word3.ondragstart = function() {
      return false;
    };
    question6__word4.ondragstart = function() {
      return false;
    };
    question6__word11.ondragstart = function() {
      return false;
    };
    question6__word22.ondragstart = function() {
      return false;
    };
    question6__word33.ondragstart = function() {
      return false;
    };
    question6__word44.ondragstart = function() {
      return false;
    };
  }
    

});


// });
