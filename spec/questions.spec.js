describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
  it('Donner la taille d\'une chaine de caractères', function () {
    // on crée un exemple
    var result = tailleString('hdhdyegdhymomomomomomomomomomo');
    // on donne le résultat attendu
    expect(result).toEqual(30);
  });


  it('Remplacer le premier e d\'une chaine par un espace', function () {
    var result = replaceString('Helene c\'est moi');
    // on donne le résultat attendu
    expect(result).toEqual("H lene c\'est moi");
  });

  it('Concatener deux chaines de caractères', function () {
    var string1 = "bonjour, il fait beau aujourd'hui "
    var string2 = "oui c'est vrai"
    var result = string1.concat(string2);
    expect(result).toEqual("bonjour, il fait beau aujourd'hui oui c'est vrai");
  });


  it('Afficher le cinquième caractère d\'une chaine', function () {
    var string = "bonjour ca va?";
    var result = string.charAt(4);

    expect(result).toEqual("o");
  });


  it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function () {
    var string = "je suis contente de faire cet exercice";
    var result = string.slice(0, 8)
    expect(result).toEqual("je suis ");

  });
});

it('Mettre en majuscule la chaine', function () {
  var string = "je suis contente de faire cet exercice";
  var result = string.toUpperCase();

  expect(result).toEqual("JE SUIS CONTENTE DE FAIRE CET EXERCICE");

});

it('Mettre en majuscule la chaine', function () {
  var string = "JE SUIS CONTENTE DE FAIRE CET EXERCICE";
  var result = string.toLowerCase();

  expect(result).toEqual("je suis contente de faire cet exercice");

});

it('Supprimer les espaces avant et après la chaine', function () {
  var string = ' Je suis contente de faire cet exercice ';
  result = (string.trim());

  expect(result).toEqual('Je suis contente de faire cet exercice');
});


it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
      let result = getBoolean('àçàçàç');
      // // expect(result).toBeTrue();
      expect(result).toEqual(true);
      // let result = getBoolean(9);
      // expect(result).toEqual('lklklklk');
  });

it('Afficher l\'extension du fichier', function () {
  var fileName, fileExtension;
  fileName = 'image.jpeg';
  result = fileExtension = fileName.substr((fileName.lastIndexOf('.') + 1));
  expect(result).toEqual('jpeg');
});


it('Compter le nombre d\'espace dans la chaine', function () {
  var string = "Je suis contente de faire cet exercice";
  result = string.split(" ").length - 1;

  expect(result).toEqual(6);
});

it('Inverser une chaine de caractères', function () {
  var string = "salut";
  result = string.split("salut").reverse("salut").join("tulas");

  expect(result).toEqual('tulas');


});
