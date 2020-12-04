import React from 'react'
import rotate from './logo.png'
import './App.scss'
export default function fan(){
  function press1(){
    let x= document.getElementsByClassName('section-img')[0]
   x.classList.toggle('section-imgone')
   x.classList.remove("section-imgtwo")
   x.classList.remove("section-imgthree")
      
   }
   function press2(){
     let x= document.getElementsByClassName('section-img')[0]
     x.classList.toggle('section-imgtwo')
     x.classList.remove("section-imgone")
     x.classList.remove("section-imgthree")
     
   
    }
    function press3(){
     let x= document.getElementsByClassName('section-img')[0]
      x.classList.toggle('section-imgthree')
     x.classList.remove("section-imgtwo")
    x.classList.remove("section-imgone")
     
    }
    function press0(){
     let x= document.getElementsByClassName('section-img')[0]
    x.classList.remove("section-imgthree")
     x.classList.remove("section-imgtwo")
     x.classList.remove("section-imgone")
     
    }
    
  return(
    <>
    <div style={{marginTop:'3%'}}>
    <center>
    <a href="https://twitter.com/iharicharan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @iharicharan</a>
    </center>
    </div>
  <section className='section'>  
   <img src={rotate} alt='' className='section-img'/>
  </section>
  <article>
    <div className='div'></div>
  </article>
    <article className='article'>
<div className='article-div'> 
<button onClick={press0}>OFF</button>
<button onClick={press1}>1</button>
<button onClick={press2}>2</button>
<button onClick={press3}>3</button>
</div>
</article>

   
    </>
  );
}