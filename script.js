const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response=document.querySelector("p")

btn1.addEventListener("click", () => {
  // Code à exécuter lorsque btn1 est cliqué
     Console.log( "click sur le bouton") ;
     });

     questionContainer.addEventListener("click", () => {
     questionContainer.classList.toggle('question-click')
     });
  btn1.addEventListener("click", () => {
     btn1.style.background = 'green';
     response.style.background = 'green';
     response.classList.add('show-response');
     });

 btn2.addEventListener("click", () => {
        btn2.style.background = 'red';
        response.style.background = 'red';
        response.classList.add('show-response');
        });

        //mousemove
       const mousemove=document.querySelector(".mousemove");
       console.log(mousemove)
        window.addEventListener("mousemove", (e)=>{
            console.log(e);
                mousemove.style.left=e.pageX + "px";
                mousemove.style.top=e.pageY + "px";
            
        });

        window.addEventListener("mousedown", ()=>{
            mousemove.style.transform="scale(2) translate(-25%, -25%"
        });

        window.addEventListener("mouseup", ()=>{
            mousemove.style.transform="scale(1) translate(-50%, -50%)";
        });

        window.addEventListener("mouseenter", (e)=>{
            console.log(e)
        })

        questionContainer.addEventListener("mouseout", ()=>{
            questionContainer.style.background='rgba(0, 0, 0, 0.3)'
        });

        response.addEventListener("mouseover", ()=>{
            response.style.transform="rotate(1deg)"
        });

        // keydown event

        const keydownContainer=document.querySelector(".keydown");
        console.log(keydownContainer);
        document.addEventListener("keydown", (e)=>{
            console.log(e);
            
        keydownContainer.textContent=e.key;
        if(e.key==="j"){
         keydownContainer.style.background='pink';
     }else if(e.key ==="h"){
         keydownContainer.style.background='red';
     }else{
     keydownContainer.style.background='blue'; 
         }
     })

     const nav=document.querySelector("nav");
     console.log(nav);

     window.addEventListener("scroll", ()=>{
         if(window.scrollY>200){
     nav.style.top=0;
     }else{
     nav.style.top="-150px"
    }
 });

         const form=document.querySelector("form")
         const formInput=document.querySelector("input[type='text']");
         console.log(formInput);
         const inputSelect=document.querySelector("select");
         const userName=document.querySelector("#userName");
         const langage=document.querySelector("#langage");
         let user;
         let lang
         formInput.addEventListener("input", (e)=>{
console.log(e.target.value)
userName.textContent=e.target.value
user=e.target.value
 })

    inputSelect.addEventListener("input", (e)=>{
console.log(e.target.value)
    lang=e.target.value
langage.textContent=e.target.value
langage.innerHTML=`<div style="color:red">
${e.target.value}
</div>
`
     })
        form.addEventListener("submit", (e)=>{
             e.preventDefault();
         alert(`votre nom est: ${user} et votre langage preferé est ${lang}`)
        if(cgv.checked){
             alert("tout est ok")
         }else{
     alert(`veuillez cochez les cgc`)  }
 });

     const image=document.getElementById("image");

        function loadRessorce(){
         console.log("page entierement chargé");
     }

     window.addEventListener("load", loadRessorce );
    image.addEventListener("load", ()=>{

     console.log("image chargée")
})

     document.getElementById("input").addEventListener("blur", function (){
        this.style.backgroundcolor="green"
     });

         const inputNom=document.getElementById("nom")
         inputNom.addEventListener("focus", function (){
          this.classList.add("green")
     })

     const boxes=document.querySelectorAll(".box");

console.log(boxes)
             boxes.forEach((box)=>{
            box.addEventListener("click", ()=>{
            console.log(e.target);
        e.target.style.transform="scale(0.5)"
    })
 })

        //window
console.log(window.innerWidth);
console.log(innerHeight);

console.log(window.document.title);

console.log(navigator.userAgent);

console.log(Location.href);

// location.href = "http://google.com";

console.log(location.hostname);

console.log(location.pathname);

// history du naviateur
history.back();

// history.forward();
console.log('tantative de navigation en avant');

console.log(history.length);


