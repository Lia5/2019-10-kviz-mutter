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
  if($('.draggable').length) {
    let isDragging = false;

    document.addEventListener('mousedown', function(event) {
    
      let dragElement = event.target.closest('.draggable');
    
      if (!dragElement) return;
    
      event.preventDefault();
    
      dragElement.ondragstart = function() {
          return false;
      };
    
      let coords, shiftX, shiftY;
    
      startDrag(dragElement, event.clientX, event.clientY);
    
      function onMouseUp(event) {
        finishDrag();
        

        let currentDroppable = null;
        dragElement.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        dragElement.hidden = false;
        
        // событие mousemove может произойти и когда указатель за пределами окна
        // (мяч перетащили за пределы экрана)

        // если clientX/clientY за пределами окна, elementFromPoint вернёт null
        if (!elemBelow) return;

        // потенциальные цели переноса помечены классом droppable (может быть и другая логика)
        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable != droppableBelow) {
          // мы либо залетаем на цель, либо улетаем из неё
          // внимание: оба значения могут быть null
          //   currentDroppable=null,
          //     если мы были не над droppable до этого события (например, над пустым пространством)
          //   droppableBelow=null,
          //     если мы не над droppable именно сейчас, во время этого события

          if (currentDroppable) {
            // логика обработки процесса "вылета" из droppable (удаляем подсветку)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            // логика обработки процесса, когда мы "влетаем" в элемент droppable
            enterDroppable(currentDroppable);
          }
        }
        let dragElementId = dragElement.getAttribute('id').substr(15, 2);
        if (elemBelow.classList.contains('bellow')) {
           var elemBelowId = elemBelow.getAttribute('id').substr(14, 2);
        }
       

        if (dragElementId == elemBelowId) {

          elemBelow.classList.add('right');
        } else {
          elemBelow.classList.add('error');
        }
 
      };
    
      function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
      }
    
      // on drag start:
      //   remember the initial shift
      //   move the element position:fixed and a direct child of body
      function startDrag(element, clientX, clientY) {
        if(isDragging) {
          return;
        }
        if ($('.bellow').hasClass('error')) {
          $('.bellow').removeClass('error');
         }
        isDragging = true;
    
        document.addEventListener('mousemove', onMouseMove);
        element.addEventListener('mouseup', onMouseUp);
    
        shiftX = clientX - element.getBoundingClientRect().left;
        shiftY = clientY - element.getBoundingClientRect().top;
    
        element.style.position = 'fixed';
    
        moveAt(clientX, clientY);
      };
    
      // switch to absolute coordinates at the end, to fix the element in the document
      function finishDrag() {
        if(!isDragging) {
          return;
        }
    
        isDragging = false;
    
        dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
        dragElement.style.position = 'absolute';
    
        document.removeEventListener('mousemove', onMouseMove);
        dragElement.removeEventListener('mouseup', onMouseUp);

      }

  
    
      function moveAt(clientX, clientY) {
        // new window-relative coordinates
        let newX = clientX - shiftX;
        let newY = clientY - shiftY;
    
        // check if the new coordinates are below the bottom window edge
        let newBottom = newY + dragElement.offsetHeight; // new bottom
    
        // below the window? let's scroll the page
        if (newBottom > document.documentElement.clientHeight) {
          // window-relative coordinate of document end
          let docBottom = document.documentElement.getBoundingClientRect().bottom;
    
          // scroll the document down by 10px has a problem
          // it can scroll beyond the end of the document
          // Math.min(how much left to the end, 10)
          let scrollY = Math.min(docBottom - newBottom, 10);
    
          // calculations are imprecise, there may be rounding errors that lead to scrolling up
          // that should be impossible, fix that here
          if (scrollY < 0) scrollY = 0;
    
          window.scrollBy(0, scrollY);
    
          // a swift mouse move make put the cursor beyond the document end
          // if that happens -
          // limit the new Y by the maximally possible (right at the bottom of the document)
          newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
        }
    
        // check if the new coordinates are above the top window edge (similar logic)
        if (newY < 0) {
          // scroll up
          let scrollY = Math.min(-newY, 10);
          if (scrollY < 0) scrollY = 0; // check precision errors
    
          window.scrollBy(0, -scrollY);
          // a swift mouse move can put the cursor beyond the document start
          newY = Math.max(newY, 0); // newY may not be below 0
        }
    
    
        // limit the new X within the window boundaries
        // there's no scroll here so it's simple
        if (newX < 0) newX = 0;
        if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
          newX = document.documentElement.clientWidth - dragElement.offsetWidth;
        }
    
        dragElement.style.left = newX + 'px';
        dragElement.style.top = newY + 'px';
      }
    
    });
  }

  //qa6
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
  //qa7
  if($('.question7').length) {
    $(".question__letters input").keyup(function() {
      var value = $(this).val().toLowerCase();
      var letter = $(this).attr('data-letter');
      if (value == letter) {
          $(this).addClass('letter-right').parent();
      } else {
        $(this).addClass('letter-error').parent();
      }
    });
  }


  //qa10
  if($('.question10').length) {
    $(".question10__number").keyup(function() {
      var value = $(this).val();
      var number = $(this).attr('data-number');
      console.log(value);
      console.log(number);
      if (value == number) {
          console.log('ppp');
          $(this).addClass('letter-right').parent();
      } else {
        $(this).addClass('letter-error').parent();
      }
    });
  }


});


// });
