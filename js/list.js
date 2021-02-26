

var select = document.getElementById("country"); 
var selectser = document.getElementById("servicelist"); 
var services = ["Website Developemnt",
"E-commerce design & development",
"Content management System",
"Web Maintanence",
"Web hosting",
"Mobile app Development",
"Android Devlopment",
"iOs",
"Digital Marketing",
"Search Engine Optimization",
"Facebook Ads / Google Ads",
"Pay Per Click",
"Content generation Marketing",
"Email Marketing",
"Social Media Marketing",
"Creative Communication",
"Advertising",
"Logo Designing",
"Visual Identity Design",
"Graphic Design",
"UI/UX Designing"];

var country = ["Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas (the)",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia (Plurinational State of)",
"Bonaire, Sint Eustatius and Saba",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Indian Ocean Territory (the)",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Cambodia",
"Cameroon",
"Canada",
"Cayman Islands (the)",
"Central African Republic (the)",
"Chad",
"Chile",
"China",
"Christmas Island",
"Cocos (Keeling) Islands (the)",
"Colombia",
"Comoros (the)",
"Congo (the Democratic Republic of the)",
"Congo (the)",
"Cook Islands (the)",
"Costa Rica",
"Croatia",
"Cuba",
"Curaçao",
"Cyprus",
"Czechia",
"Côte d'Ivoire",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic (the)",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Eswatini",
"Ethiopia",
"Falkland Islands (the) [Malvinas]",
"Faroe Islands (the)",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories (the)",
"Gabon",
"Gambia (the)",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Heard Island and McDonald Islands",
"Holy See (the)",
"Honduras",
"Hong Kong",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran (Islamic Republic of)",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea (the Democratic People's Republic of)",
"Korea (the Republic of)",
"Kuwait",
"Kyrgyzstan",
"Lao People's Democratic Republic (the)",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macao",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands (the)",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia (Federated States of)",
"Moldova (the Republic of)",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands (the)",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger (the)",
"Nigeria",
"Niue",
"Norfolk Island",
"Northern Mariana Islands (the)",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestine, State of",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines (the)",
"Pitcairn",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Republic of North Macedonia",
"Romania",
"Russian Federation (the)",
"Rwanda",
"Réunion",
"Saint Barthélemy",
"Saint Helena, Ascension and Tristan da Cunha",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Martin (French part)",
"Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Sint Maarten (Dutch part)",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Georgia and the South Sandwich Islands",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan (the)",
"Suriname",
"Svalbard and Jan Mayen",
"Sweden",
"Switzerland",
"Syrian Arab Republic",
"Taiwan",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands (the)",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates (the)",
"United Kingdom of Great Britain and Northern Ireland (the)",
"United States Minor Outlying Islands (the)",
"United States of America (the)",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe",
"Åland Islands"]; 






  

        function load_list() { 
            for (var i = 0; i < country.length; i++) { 
                var optn = country[i]; 
                var el = document.createElement("option"); 
                el.textContent = optn; 
                el.value = optn; 
                select.appendChild(el); 
            } 
           
         } 
        //  function load_services() { 
        //     for (var j = 0; j < services.length; j++) { 
        //         var soptn = services[j]; 
        //         var sl = document.createElement("option"); 
        //         sl.textContent = soptn; 
        //         sl.value = soptn; 
        //         selectser.appendChild(sl); 
        //     } 
           
        //  } 

        window.onload = load_list();

         function load_services() { 
            for (var j = 0; j < services.length; j++) { 
                var checkBox = document.createElement("input");
                var label = document.createElement("label");
                var block = document.createElement("div");
                block.className="dropdown-item";
                checkBox.type = "checkbox";
                checkBox.className="form-check-input";
                label.className="form-check-label";
                checkBox.value = services[j];
                selectser.appendChild(block);
                block.appendChild(checkBox);
                block.appendChild(label);
                label.appendChild(document.createTextNode(services[j]));

            } 
           
         } 

  

        //  var myDiv = document.getElementById("cboxes");
         
        //  for (var i = 0; i < animals.length; i++) {
        //      var checkBox = document.createElement("input");
        //      var label = document.createElement("label");
        //      checkBox.type = "checkbox";
        //      checkBox.value = animals[i];
        //      myDiv.appendChild(checkBox);
        //      myDiv.appendChild(label);
        //      label.appendChild(document.createTextNode(animals[i]));
        //  }
