
const slider1 = document.getElementById("i1");
const output1 = document.getElementById("s1");
const slider2 = document.getElementById("i2");
const output2 = document.getElementById("s2");
const slider3 = document.getElementById("i3");
const output3 = document.getElementById("s3");
document.addEventListener('DOMContentLoaded', (event) => {


  function updateColor() {
    const red = slider1.value;
    const green = slider2.value;
    const blue = slider3.value;
    const root = document.documentElement;

    output1.textContent = red;
    output2.textContent = green;
    output3.textContent = blue;

    root.style.setProperty("--red", red);
    root.style.setProperty("--green", green);
    root.style.setProperty("--blue", blue);

    document.getElementById("the_color").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  slider1.addEventListener('input', updateColor);
  slider2.addEventListener('input', updateColor);
  slider3.addEventListener('input', updateColor);

  
  updateColor();
});

button = document.getElementById("copy");



function myFunction(){

  const red = slider1.value.toString();
  const green = slider2.value.toString();
  const blue = slider3.value.toString();

  all_text = "(" + red +"," + green +"," +blue + ")";
  
  
  navigator.clipboard.writeText(all_text);

  

}
