var current_picture, picture;


current_picture = 0;
picture = ['https://i.ibb.co/PZJ8G3q/thumb-card6.jpg', 'https://i.ibb.co/0Q6hSQg/thumb-card7.jpg', 'https://i.ibb.co/Jy03mBm/thumb-card8.jpg'];
let element_pic = document.getElementById('pic');
element_pic.setAttribute("src", picture[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic2 = document.getElementById('pic');
  element_pic2.setAttribute("src", picture[0]);
  picture.push(picture.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pic3 = document.getElementById('pic');
  element_pic3.setAttribute("src", picture.slice(-1)[0]);
  picture.unshift(picture.pop());

});