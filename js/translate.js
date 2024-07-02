// capturando los datos del archivo JSON y creando la funcion de traduccion

$.getJSON("js/idiomas.json", function (json) {
  const contenedor = document.getElementById("titulo-nombre");

  // validando que no exista de la variable "lang" en localStorage
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "es"); //creando la varible en localStorage con el idioma por defecto
  }

  //capturando el idioma que se especificó en la ultima visita a la pagina web
  let defaultLang = localStorage.getItem("lang");

  //asignando el texto en el idioma especificado a cada elemento de la pagina
  $(".lang").each(function (index, value) {
    $(this).text(json[defaultLang][$(this).attr("key")]);
  });

  if (defaultLang == "en" && $("#en").hasClass("enable") == true) {
    $("#en").removeClass("enable");
    $("#es").addClass("enable");
  }

  //evento para cambiar el idioma
  $(".translate").click(function () {
    //capturando el id del elemento para conocer el idioma selecionado
    let lang = $(this).attr("id");

    //guardando en localStorage el idioma seleccionado
    localStorage.setItem("lang", lang);

    //aplicando el texto de los elementos en el idioma
    $(".lang").each(function (index, value) {
      $(this).text(json[lang][$(this).attr("key")]);
    });

    $(".translate").toggleClass("enable");
  });
});
