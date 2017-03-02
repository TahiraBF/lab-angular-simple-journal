const mongoose = require('mongoose');
const Journal = require('../models/journal-entry.js');
mongoose.connect('mongodb://localhost/journal-development');



let journals = [
  {
    date: new Date(),
    title: "My new entry 1",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 2",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 3",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 4",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 5",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 6",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 7",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
      date: new Date(),
      title: "My new entry 8",
      Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor interdum pretium. Curabitur posuere mi eget quam volutpat maximus. In vitae gravida nisi, dignissim tincidunt velit. Etiam ut felis at ex efficitur eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc convallis neque nec ipsum mollis venenatis. Aenean viverra orci ornare nisl pharetra viverra. Nullam maximus cursus euismod. Duis auctor, arcu in lacinia commodo, tortor felis aliquet magna, ac egestas ex elit sed odio. Cras mauris libero, aliquam eget lacinia pharetra, vulputate vel enim."
  },
  {
    date: new Date(),
    title: "My new entry 9 ",
    Content: "Pellentesque non fringilla augue, id ultrices leo. Mauris at vestibulum quam. Fusce porttitor, risus vitae ornare fringilla, purus ipsum sagittis elit, quis faucibus mi purus ac libero. Nam sollicitudin congue consectetur. Fusce ultrices lacus nunc, ut ultrices nulla convallis nec. Pellentesque dui turpis, condimentum in turpis a, viverra efficitur neque. Etiam et lorem viverra mauris sagittis consectetur. Vivamus ipsum purus, posuere non gravida vitae, ornare ut felis. Donec eu iaculis augue. Aenean porttitor maximus egestas. In nec nunc ut ipsum posuere condimentum. Suspendisse nec fringilla neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis nunc eget enim lacinia fermentum."
  },
  {
    date: new Date(),
    title: "My entry 10",
    Content: "Cras eu neque tincidunt, vehicula magna a, facilisis sapien. Proin pretium, arcu vitae porta hendrerit, urna tortor tempor neque, ac aliquet ex neque in mauris. Cras maximus venenatis enim, non bibendum enim fermentum a. Suspendisse potenti. Curabitur vulputate pharetra diam. Morbi tempor lacinia urna, nec gravida orci ultrices vel. Duis at purus faucibus, accumsan tellus eu, eleifend elit. Sed ipsum nunc, accumsan vitae rhoncus ac, mollis quis risus. Curabitur at scelerisque ligula. In lacinia, tortor eget malesuada feugiat, lacus turpis cursus tortor, eget pellentesque risus odio sit amet metus. Nam id efficitur ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pulvinar ante vel nunc hendrerit, ac egestas ipsum luctus. Proin eu enim dolor."
  }
];

Journal.create(journals, (err, docs)=> {
  if (err){
		throw(err);}

  docs.forEach( (journal)=>{
		console.log(journal.title);
  });
  mongoose.connection.close();
});
