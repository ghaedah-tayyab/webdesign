const testimonials =[
    {
        name: 'Emily Larson',
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:'Apple offers cutting-edge mobile phones that exceed expectations in design, performance, and innovation. I am continually impressed by the sleek design and seamless user experience provided by Apple products. Their commitment to quality and customer satisfaction truly sets them apart from the competition.'
    },
    {
        name: ' Julia Smith',
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"thinkpads laptops are top-notch and reliable. I've been impressed with the sleek design and high performance of my thinkpad laptop. It's perfect for work and entertainment, offering great value for the price."
    },
    {
        name: 'Samantha Miller',
        photoUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"I am extremely satisfied with my recent purchase from thinkpad. Their laptops are top-notch, reliable, and powerful. I can't imagine using any other brand now. Thank you thinkpad for providing such exceptional products!"
    },

];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const username= document.querySelector(".user-name");
   

let idx= 0;


updatetestimonal()

function updatetestimonal(){
 const {name, photoUrl, text} = testimonials[idx];
 imgE1.src= photoUrl;
 textE1.innerText= text;
 username.innerText=name;
 idx++;
 if(idx === testimonials.length){
    idx=0;
 }
setTimeout(()=>{
updatetestimonal();
}, 2000)
}