//массив имен волшебников
var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гаррик'];

//массив волшебников
var wizard = [{
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(45, 102, 10)',
    eyesColor: 'rgb(10,10,10)'
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(104, 10, 78)',
    eyesColor: 'rgb(45,45,45)'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(78, 215, 1)',
    eyesColor: 'rgb(126,10,10)',
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(205, 202, 240)',
    eyesColor: 'rgb(184,215,180)'
  },
];


//показ окна настройки персонажа
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//лист в который будут добовляться другие волшебники 
var similarListElement = userDialog.querySelector('.setup-similar-list');

//шаблон волшебников
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


//функция изминения волшебников
var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};


//перебор и вывод всех волшебников
for (var i = 0; i < wizard.length; i++) {
  similarListElement.appendChild(renderWizard(wizard[i]));
}

//показ списка волшебников
userDialog.querySelector('.setup-similar').classList.remove('hidden');