 *{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  text-decoration: none;
  border:none;
  outline:none;
  font-family: 'Poppins', sans-serif;
  
}

/* Hamile common color root ma declear garda paxi tei color directly color= var(--bg-color) vanera use garda hunxa */
:root{
  --bg-color: #1f242d;
  --second-bg-color: #323946;
  --text-color: #fff;
  --main-color: #0ef;
}


html{
  font-size: 62.5%;

  /* Overflow is the property that controls waht happens to the content that is too big to fit into an area */
  /* Overflow hidden garda, the overflow is clipped, and the rest of the content will be invisible */
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Root ma hamile color haru seclect gareko xum tei color use garnu hamile var() use garnu parxa */
body{
  background: var(--bg-color);
  color: var(--text-color);
}

section{
  /* min-height propert defines the minimum height of an element */
  min-height: 100vh;
  padding: 10rem 9% 2rem;

}
.home{
  /* By usig display: flex, the element are automatically align like colomun or row with auto width and auto height */
  display: flex;
  justify-content: center;
  align-items: center;

}

.home-content h3{
font-size: 3.2rem;
}
.home-content h3:nth-of-type(2) {
  margin-bottom: 2rem;
}

span{
  color: var(--main-color);
}



.header{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

}

.header.sticky{
  border-bottom: .1rem solid rgba(0, 0, 0, .2);
}

.logo{
  font-size: 2.5rem;
  color: var(--text-color);
  font-weight: 600;

  /* Cursoe property specifies the mouse cursor to be displayed when pointing over an element */
  cursor: default;
}

.navbar a{
  font-size: 1.7rem;
  color: var(--text-color);
  margin-left: 4rem ;
  transition: .3s;
}

.navbar a:hover, .navbar a.active{
    color: var(--main-color);
}



#menu-icon{
  font-size: 3.6rem;
  color: var(--text-color);
  display: none; 
}

.home-img img{
  width: 35vw;  
  padding: 3%;
  background: linear-gradient(#2193b0, #6dd5ed);
 border-radius:100% 73% 63% 100% / 100% 73% 99% 69% ;
transition: 1s ease;
animation: floatImage 4s ease-in-out infinite;
}

@keyframes floatImage {
  0%, 100%{
  transform: translateY(0);
  }

  50%{
    transform: translateY(-2.4rem);
  }

}

.home-img img:hover{

  background: linear-gradient(#27abcc, #82e8ff);
  border-radius:42% 59% 44% 56% / 39% 39% 63% 54%  ;
  filter: drop-shadow(5px 5px 10px #105cdf);
  padding: 0%;
}

.home-content p{
  font-size: 1.6rem;
}

.social-media a{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  background: transparent ;
  border: .2rem solid var(--main-color);
  border-radius: 50%;
  font-size: 2rem;
  color: var(--main-color);
  margin: 3rem 1.5rem 3rem 0;
  transition: transform, background 0.3s, color 0.3s, box-shadow 5s;
}

.social-media a:hover{
  transform: none;
  background: var(--main-color);
  color: var(--second-bg-color);
  box-shadow: 0 0 10rem var(--main-color);

}
 
.btn {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1.6rem;
  color: var(--second-bg-color);
  letter-spacing: .1rem;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn:hover{
  box-shadow: none;
  transform: translateY(-1px);
  transform: scale(0.98);
}

.about{
display: flex;
justify-content: center;
align-items: center;
gap: 2rem;
background: var(--second-bg-color);
}

.about-img img{
  width: 35vw;
  width: 35vw;  
  padding: 3%;
  background: linear-gradient(#2193b0, #6dd5ed);
  border-radius: 66% 62% 53% 84% / 71% 47% 71% 57% ;
transition:all 1s ease;
animation: floatImage 4s ease-in-out infinite;
}

.about-img img:hover{
  background: linear-gradient(#27abcc, #82e8ff);
  border-radius:100% 70% 53% 100% / 100% 100% 73% 68% ;
  filter: drop-shadow(5px 5px 10px #105cdf);
  padding: 0%;
}

.heading{
  text-align: center;
  font-size: 4.5rem;
}
.about-content h2{
  text-align: left;
  line-height: 1.2;
}

.about-content h3{
  font-size: 2.6rem;

}

.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}
.services h2{
  margin-bottom: 5rem;

}

.services-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
}

.services-container .services-box{
  flex: 1 1 30rem;
  background: var(--second-bg-color);
  padding: 3rem 2rem 4rem;
  border-radius: 2rem;
  text-align: center;
  border: .2rem solid var(--bg-color);
}

.services-box i{
  font-size: 7rem;
  color: var(--main-color);
}

.services-box h3{
  font-size: 2.6rem;

}
.services-box p{
  font-size: 1.6rem;
  margin: 1rem 0 3rem;
}
.services-container .services-box:hover {
border-color: var(--main-color);
transform: scale(1.02);
}


.portfolio{
  background-color: var(--second-bg-color);
}

.portfolio h2{
  margin-bottom: 4rem;
}

.portfolio-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.5rem;
}

.portfolio-container .portfolio-box{
  position: relative;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  overflow: hidden;
  display: flex;
}

.portfolio-box img{
  width: 100%;
  transition: .5s ease;
}

.portfolio-box:hover img{
  transform: scale(1.1);
}

.portfolio-box .portfolio-layer{
 position: absolute;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: linear-gradient(rgba(0,0,0,.1), var(--main-color));
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 text-align: center;
 padding: 0 4rem;
 transform: translateY(100%);
 transition: .5s ease;
}

.portfolio-box:hover .portfolio-layer{
  transform: translateY(0);
}

.portfolio-layer h4{
  font-size: 3rem;
}

.portfolio-layer p{
  font-size: 1.6rem;
  margin: .3rem 0 1rem;
}

.portfolio-layer a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: var(--text-color);
  border-radius: 50%;
}

.portfolio-layer a i{
  font-size: 2rem;
  color: var(--second-bg-color);
}


.contact h2{
  margin-bottom: 3rem;
}

.contact form{
  max-width: 70rem;
  margin: 1rem auto;
  text-align: center;

}

.contact form .input-box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.contact form .input-box input, .contact form textarea{
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: var(--second-bg-color);
  border-radius: .8rem;
  margin: .7rem 0;

}

.contact form .input-box input{
  width: 49%;
}

.contact form textarea{
  resize: none;
}

.contact form .btn{
  margin-top: 2rem;
  cursor: pointer;
}

 
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background-color: var(--second-bg-color);
}

.footer-text pre{
font-size: 1.6rem;
}

.footer-iconTop a{
display: inline-flex;
justify-content: center;
align-items: center;
padding: .8rem;
background: var(--main-color);
border-radius: 50%;
transition: .5s ease;
}

.footer-iconTop a i{
font-size: 2.4rem;
color: var(--second-bg-color);

}

.footer-iconTop a:hover{
  box-shadow: 0 0 1rem var(--main-color);
}

/* breakpoint */
@media (max-width: 1200px){
  html{
    font-size: 55%;
  }
}




@media (max-width: 991px){
  .header{
    padding: 2rem 3%;
  }

  section{
    padding: 10rem 3% 2rem;
  }
  
  .services{
    padding-bottom: 7rem;
  }

  .portfolio{
    padding-bottom: 7rem;
  }

  .contact{
    min-height: auto;
  }

  .footer{
   padding: 2rem 3%;
  }
}



header .navigation {
  display: none;
}

.navigation{
  width: 400px;
  height: 70;
  background: var(--main-color);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 3px var(--main-color);
}

.navigation ul{
display: flex;
  width: 350px;
}

.navigation ul .list{
  position: relative;
  list-style:none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a{
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
  
}

.navigation ul li a .icon{
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--bg-color);
}

.navigation ul li.active a .icon {
  transform: translateY(-32px);
}

.navigation ul li a .text{
  position: absolute;
  color: var(--bg-color);
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.05;
  transition: 0.5s;
  opacity: 0;
}

.navigation ul li.active a .text{
  opacity: 1;
  transform: translateY(10px);
}

.indicator{
  position: absolute;
  width: 70px;
  top: -50%;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid var(--bg-color);
  transition: 0.5s;
}

.indicator::before{
  content: '';
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: var(--main-color);
  border-top-right-radius: 200px ;
  box-shadow: 0 -10px 0 var(--bg-color)
}

.indicator::after{
  content: '';
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: var(--main-color);
  border-top-left-radius: 20px;
  box-shadow: 0 -10px 0 0 var(--clr)
}

.navigation ul li:nth-child(1).active ~ .indicator{
  transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator{
  transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator{
  transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator{
  transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator{
  transform: translateX(calc(70px * 4));
}










@media (max-width: 768px){
  #menu-icon{
    display: none;
  }
 
section .home-content{
  margin-top: 9px;
}

section .about-content{
  margin-top: 20px;
}

.services .heading{
  margin-top: 15px;
}

.portfolio .heading{
  margin-top: 15px
}

 header .navigation{
  display:flex;
 }

  .navbar{
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    padding: 1rem 3%;
    background: var(--bg-color);
    border-top: .1rem solid rgba(0, 0, 0, .2);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
    display: none;
  }

  .header .logo{
    display: none;
  }

  .header{
    justify-content: center;
  }


  .navbar.active{
    display: block;
  }

  header .navigation ion-icon{
    font-size: 2.5rem;
  }

  .navbar a{
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
  }

  .home{
    flex-direction: column;
  }

  .home-content h3{
    font-size: 5rem;

  }

  .home-img img{
    width: 70vw;
    margin-top: 4rem;
  }

  .about{
    flex-direction: column-reverse;
  }
  .about img{
    width: 70vw;
    margin-top: 4rem;
  }

  .services h2{
    margin-bottom: 3rem;
  }


  .portfolio h2{
    margin-bottom: 3rem;
  }

  .portfolio-container{
    grid-template-columns: repeat(2, 1fr);
  }
}




@media(max-width: 617px){
  .portfolio-container{
    grid-template-columns: 1fr;
  }
}


@media(max-width: 450px){
  html{
    font-size: 50%;
  }

  .contact form .input-box input{
    width: 100%;
  }
}

@media(max-width: 365px){
  .home-img img{
    width: 90vw;
  }

  .about-img img{
    width: 90vw;
  }

  .footer{
    flex-direction: column-reverse;
    
  }
  .footer p{
    text-align: center;
    margin-top: 2rem;
  }
}


.home-content .text-animation{
  position: relative;
}

.home-content .text-animation h1{
  position: absolute;
  font-size: 5.6rem;
  font-weight: 700;
}

.home-content .text-animation h1:nth-child(1){
  color: transparent;
  -webkit-text-stroke: 0.4px var(--main-color);

}

.home-content .text-animation h1:nth-child(2){
  color: var(--main-color);
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate{
  0%,100%{
    /* clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%); */
    clip-path: polygon(0% 56%, 6% 61%, 12% 64%, 20% 66%, 26% 66%, 33% 65%, 40% 61%, 46% 56%, 51% 51%, 57% 46%, 67% 44%, 76% 43%, 83% 43%, 89% 46%, 96% 50%, 100% 56%, 99% 100%, 0% 100%);
  }
  50%{
    /* clip-path: polygon(0% 60%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 84% 45%, 100% 52%, 100% 100%, 0% 100%);
  } */
  clip-path: polygon(0% 56%, 4% 51%, 10% 47%, 17% 44%, 25% 44%, 32% 48%, 39% 53%, 44% 57%, 49% 60%, 57% 64%, 65% 66%, 73% 69%, 81% 70%, 88% 68%, 95% 64%, 100% 56%, 99% 100%, 0% 100%);
}
}




/* NEW HTML KO LAGI */
