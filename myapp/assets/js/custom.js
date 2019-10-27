$(function() {

  if((($('.question3').length)||$('.question4').length||$('.question5').length)) {
    $('.btn--wrong').click(function() {
      this.classList.add('active');
    });
    $('.btn--right').click(function() {
      this.classList.add('active');
    });    
  }

  if ( window.innerWidth > 1023 || window.screen.width > 1023) {

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


  //mob
  if ( window.innerWidth < 1023 || window.screen.width < 1023) {
    
      
      
      /* listen to the touchMove event,
      every time it fires, grab the location
      of touch and assign it to box */
      
      document.addEventListener('touchmove', function(event) {
        // find the element that you want to drag.
        let dragElement = event.target.closest('.draggable');
        // grab the location of touch
        var touchLocation = event.targetTouches[0];
        dragElement.style = "position: absolute";
        // assign box new coordinates based on the touch.
        dragElement.style.left = touchLocation.pageX + 'px';
        dragElement.style.top = touchLocation.pageY + 'px';

        let currentDroppable = null;
        dragElement.hidden = true;
        alert(event.clientX);
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        alert(elemBelow);
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

      })
      
      /* record the position of the touch
      when released using touchend event.
      This will be the drop position. */
      
      document.addEventListener('touchend', function(event) {
        // find the element that you want to drag.
        let dragElement = event.target.closest('.draggable');
        // current box position.
        var x = parseInt(dragElement.style.left);
        var y = parseInt(dragElement.style.top);


      })
  
  }

});


// });
