
var trash = document.getElementsByClassName("fa-trash");

// if (el.classList) {
//   el.classList.toggle(hidden);
// } else {
//   var classes = el.hidden.split(' ');
//   var existingIndex = classes.indexOf(hidden);
//
//   if (existingIndex >= 0)
//     classes.splice(existingIndex, 1);
//   else
//     classes.push(hidden);
//
//   el.hidden = classes.join(' ');
// }

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const msg = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
