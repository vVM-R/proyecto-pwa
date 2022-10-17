document.addEventListener('DOMContentLoaded', function() {
  
  const menu = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menu,{edge: 'right'});

  const form = document.querySelectorAll('.side-form');
    M.Sidenav.init(form, {edge: 'left'});
});