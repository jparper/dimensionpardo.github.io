function barindicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.documentElement.requestFullscreen();
document.documentElement.webkitRequestFullScreen();
document.addEventListener('fullscreenchange', (event) => {
  if (!document.fullscreenElement) {
    alert("Full screen change")
  }
})

function copiar() {
  var textarea = document.getElementById("textarea");
  textarea.select();
  var successful = document.execCommand('copy');
}

function getname(){
  var file = document.querySelector('input[type=file]').files[0];
  document.getElementById("errorphoto").innerHTML = file.name;
  var link = document.getElementById("link");
  var mysrc = window.URL.createObjectURL(file);
  link.href = mysrc;
  link.style.display = "block";
}
function update_image() {
  if (document.querySelector('input[type=file]').files[0]){
    var img = document.querySelector('img'); // Returns the first img element
    var file = document.querySelector('input[type=file]').files[0]; // Returns the first file element found
    img.src = window.URL.createObjectURL(file);
    var user_text = document.getElementById("user_text");
    var meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
    document.getElementById("errorphoto").innerHTML = file.name;
  }else{
    document.getElementById("errorphoto").innerHTML = "No image provided";
}}

function getvideo(){
  videoinput = document.getElementById("videoinput").files[0];
  videosrc = document.getElementById("videosrc");
  videosrc.src = window.URL.createObjectURL(videoinput);
}

function getaudio(){
  var sound = document.getElementById('audiosrc');
  audioinput = document.getElementById('audio').files[0];
  sound.src = URL.createObjectURL(audioinput);
}

function cerrar() {
  document.exitFullscreen();
  alert("How are you? ")
}

function promp() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("promp").innerHTML =
      "Hello " + person + "! How are you today?";
  }
}

function scrollup() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollFunction() {
  mybutton = document.getElementById("scrollup");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 || document.scrollTop > 50) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none"
  };
}

window.onscroll = function () { scrollFunction(), barindicator() };

function mostrarOcultar() {
  var elemento = document.getElementById("scrollup");
  if (elemento.style.display == "none") {
    elemento.style.display = "block"
  } else {
    elemento.style.display = "none"
  };
}

function confirmar() {
  var selection = confirm("Hello, how are you?")
  if (selection == true) {
    document.getElementById("confirmar").innerHTML = "Hey"
  }

}

function processFiles(files) {
  var file = files[0];

  var reader = new FileReader();

  reader.onload = function (e) {

    var output = document.getElementById("fileOutput");
    output.textContent = e.target.result;
  };
  reader.readAsText(file);
}

function datetime() {
  document.getElementById("date").innerHTML = new Date().toLocaleString();
}
setInterval('datetime()', 1000);
window.onload = function () { datetime() };

function update_pdf() {
  var file = document.getElementById('myPdf').files[0]
  if (file.type == "application/pdf") {
    var fileReader = new FileReader();
    fileReader.onload = function () {
      var pdfData = new Uint8Array(this.result);
      var loadingTask = pdfjsLib.getDocument({ data: pdfData });
      loadingTask.promise.then(function (pdf) {
        console.log('PDF loaded');
        pdf.getPage(2).then(function (page) {
          var scale = 1.5;
          var viewport = page.getViewport({ scale: scale });

          // Prepare canvas using PDF page dimensions
          var canvas = document.getElementById('pdfViewer');
          canvas.style.display = "block";
          var context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);

        });
      });
    };
    fileReader.readAsArrayBuffer(file);
  }
}

function cambiar(){
    var pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
}