!function(a) {
    var i = {};
    function n(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return a[e].call(t.exports, t, t.exports, n),
        t.l = !0,
        t.exports
    }
    n.m = a,
    n.c = i,
    n.d = function(a, i, e) {
        n.o(a, i) || Object.defineProperty(a, i, {
            enumerable: !0,
            get: e
        })
    }
    ,
    n.r = function(a) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(a, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(a, i) {
        if (1 & i && (a = n(a)),
        8 & i)
            return a;
        if (4 & i && "object" == typeof a && a && a.__esModule)
            return a;
        var e = Object.create(null);
        if (n.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: a
        }),
        2 & i && "string" != typeof a)
            for (var t in a)
                n.d(e, t, function(i) {
                    return a[i]
                }
                .bind(null, t));
        return e
    }
    ,
    n.n = function(a) {
        var i = a && a.__esModule ? function() {
            return a.default
        }
        : function() {
            return a
        }
        ;
        return n.d(i, "a", i),
        i
    }
    ,
    n.o = function(a, i) {
        return Object.prototype.hasOwnProperty.call(a, i)
    }
    ,
    n.p = "",
    n(n.s = 2)
}([function(a, i) {
    var n = document.querySelector(".email-form__password-input")
      , e = document.querySelector(".email-form__view-icon");
    window.landingConfig.forms && n && "password" === n.getAttribute("type") && (e.classList.add("email-form__view-icon_close"),
    e.onclick = function() {
        n && "password" === n.getAttribute("type") ? (n.setAttribute("type", "text"),
        e.classList.add("email-form__view-icon_open"),
        e.classList.remove("email-form__view-icon_close")) : (n.setAttribute("type", "password"),
        e.classList.add("email-form__view-icon_close"),
        e.classList.remove("email-form__view-icon_open"))
    }
    )
}
, function(a, i) {
    function n(a) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
        )(a)
    }
    function e(a, i) {
        for (var e = 0; e < i.length; e++) {
            var t = i[e];
            t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value"in t && (t.writable = !0),
            Object.defineProperty(a, (r = t.key,
            o = void 0,
            o = function(a, i) {
                if ("object" !== n(a) || null === a)
                    return a;
                var e = a[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var t = e.call(a, i || "default");
                    if ("object" !== n(t))
                        return t;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === i ? String : Number)(a)
            }(r, "string"),
            "symbol" === n(o) ? o : String(o)), t)
        }
        var r, o
    }
    var t = function() {
        function a() {
            !function(a, i) {
                if (!(a instanceof i))
                    throw new TypeError("Cannot call a class as a function")
            }(this, a),
            this._notif = document.querySelector(".alert"),
            this._notif && (this._text = document.querySelector(".alert__text"),
            this._closeBtn = this._notif.querySelector(".alert__close"),
            this._initCloseBtn())
        }
        var i, n, t;
        return i = a,
        (n = [{
            key: "closeNotif",
            value: function() {
                this._notif.classList.remove("alert_active"),
                clearInterval(this._timer)
            }
        }, {
            key: "_initCloseBtn",
            value: function() {
                var a = this;
                this._closeBtn.addEventListener("click", (function() {
                    a.closeNotif()
                }
                ))
            }
        }, {
            key: "show",
            value: function(a) {
                var i = this;
                clearInterval(this._timer),
                this._text.innerText = a,
                this._notif.classList.add("alert_active"),
                this._timer = setTimeout((function() {
                    i.closeNotif()
                }
                ), 3e3)
            }
        }]) && e(i.prototype, n),
        t && e(i, t),
        Object.defineProperty(i, "prototype", {
            writable: !1
        }),
        a
    }();
    window.formNotif = new t
}
, function(a, i, n) {
    "use strict";
    n.r(i);
    n(3);
    var e = new Date((new Date).setFullYear((new Date).getFullYear() + 1)).toUTCString();
    function t(a) {
        if (!a)
            return "";
        var i = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return i ? decodeURIComponent(i[1]) : ""
    }
    function r() {
        document.cookie = "siteWasVisited=true; expires=" + e
    }
    var o = window.landingConfig;
    window.siteLink = o.links.site;
    var s, l = function() {
        var a = document.querySelector(".main__wheel-layout");
        return a.classList.contains("stage-2") && a.classList.contains("stage-1-complete") ? (a.classList.add("spin-to-stage-three"),
        a.classList.remove("stage-2"),
        void setTimeout((function() {
            a.classList.remove("spin-to-stage-three"),
            a.classList.add("stage-3"),
            document.querySelector(".main__achievements-spin").classList.remove("hide"),
            o.forms && setTimeout((function() {
                document.querySelector(".modal").classList.add("show"),
                document.cookie = "formWasShown=true; expires=" + e
            }
            ), 1e3),
            o.forms || (setTimeout((function() {
                return window.location.replace(document.querySelector("#btn-redirect").href)
            }
            ), 1500),
            r())
        }
        ), 3600)) : a.classList.contains("stage-1") ? (a.classList.add("spin-to-stage-two"),
        a.classList.remove("stage-1"),
        void setTimeout((function() {
            a.classList.remove("spin-to-stage-two"),
            a.classList.add("stage-2"),
            a.classList.add("stage-1-complete"),
            document.querySelector(".main__achievements-bonus").classList.remove("hide")
        }
        ), 3600)) : void 0
    };
    document.querySelectorAll(".run-circle").forEach((function(a) {
        a.addEventListener("click", (function() {
            return l()
        }
        ))
    }
    )),
    s = o.oldCookieName,
    (t("formWasShown") || t(s + "_spinned")) && o.forms && document.querySelector(".modal").classList.add("show"),
    document.body.clientWidth < 479 ? (document.querySelector("body").style.minHeight = "".concat(window.innerHeight, "px"),
    document.querySelector(".main").style.minHeight = "".concat(window.innerHeight, "px")) : (document.querySelector("body").style.minHeight = "100vh",
    document.querySelector(".main").style.minHeight = "100vh");
    var u = {
        russian: {
            ukraine: "Украина",
            russia: "Россия",
            turkey: "Турция",
            brazil: "Бразилия",
            kazakhstan: "Казахстан",
            belarus: "Беларусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа и Барбуда",
            armenia: "Армения",
            argentina: "Аргентина",
            australia: "Австралия",
            austria: "Австрия",
            azerbaijan: "Азербайджан",
            bangladesh: "Бангладеш",
            bahamas: "Багамы",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Белиз",
            belgium: "Бельгия",
            benin: "Бенин",
            bulgaria: "Болгария",
            bolivia: "Боливия",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Босния и Герцеговина",
            butane: "Бутан",
            burundi: "Бурунди",
            brunei: "Бруней",
            "burkina faso": "Буркина-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Великобритания",
            hungary: "Венгрия",
            venezuela: "Венесуэла",
            vietnam: "Вьетнам",
            gabon: "Габон",
            gambia: "Гамбия",
            guinea: "Гвинея",
            "guinea bissau": "Гвинея-Бисау",
            honduras: "Гондурас",
            haiti: "Гаити",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Дания",
            "democratic republic of the congo": "Демократическая Республика Конго",
            dominica: "Доминика",
            "dominican republic": "Доминиканская Республика",
            djibouti: "Джибути",
            "equatorial guinea": "Экваториальная Гвинея",
            eritrea: "Эритрея",
            estonia: "Эстония",
            ethiopia: "Эфиопия",
            egypt: "Египет",
            germany: "Германия",
            greece: "Греция",
            georgia: "Грузия",
            zambia: "Замбия",
            israel: "Израиль",
            spain: "Испания",
            india: "Индия",
            indonesia: "Индонезия",
            jordan: "Иордания",
            iran: "Иран",
            ireland: "Ирландия",
            iceland: "Исландия",
            italy: "Италия",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кения",
            kiribati: "Кирибати",
            colombia: "Колумбия",
            "costa rica": "Коста-Рика",
            cuba: "Куба",
            "prc (people's republic of china)": "КНР (Китайская Народная Республика)",
            kyrgyzstan: "Киргизия",
            latvia: "Латвия",
            lesotho: "Лесото",
            libya: "Ливия",
            liberia: "Либерия",
            lebanon: "Ливан",
            lithuania: "Литва",
            liechtenstein: "Лихтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикий",
            mauritania: "Мавритания",
            madagascar: "Мадагаскар",
            macedonia: "Македония",
            mozambique: "Мозамбик",
            morocco: "Марокко",
            malawi: "Малави",
            malta: "Мальта",
            malaysia: "Малайзия",
            mali: "Мали",
            "marshall islands": "Маршалловы Острова",
            mexico: "Мексика",
            mongolia: "Монголия",
            moldova: "Молдавия",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нидерланды",
            niger: "Нигер",
            nigeria: "Нигерия",
            norway: "Норвегия",
            "new zealand": "Новая Зеландия",
            oman: "Оман",
            pakistan: "Пакистан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польша",
            portugal: "Португалия",
            rwanda: "Руанда",
            romania: "Румыния",
            "saint vincent and the grenadines": "Сент-Винсент и Гренадины",
            "saint kitts and nevis": "Сент-Китс и Невис",
            "saint lucia": "Сент-Люсия",
            "sao tome and principe": "Сан-Томе и Принсипи",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Саудовская Аравия",
            swaziland: "Свазиленд",
            seychelles: "Сейшельские Острова",
            senegal: "Сенегал",
            serbia: "Сербия",
            "solomon islands": "Соломоновы Острова",
            slovakia: "Словакия",
            slovenia: "Словения",
            somalia: "Сомали",
            montenegro: "Черногория",
            switzerland: "Швейцария",
            sweden: "Швеция",
            "sierra leone": "Сьерра-Леоне",
            suriname: "Суринам",
            tajikistan: "Таджикистан",
            turkmenistan: "Туркменистан",
            tanzania: "Танзания",
            thailand: "Таиланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринидад и Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Тунис",
            fiji: "Фиджи",
            philippines: "Филиппины",
            finland: "Финляндия",
            france: "Франция",
            chad: "Чад",
            "czech republic": "Чехия",
            chile: "Чили",
            "south africa": "ЮАР",
            croatia: "Хорватия",
            uruguay: "Уругвай",
            uzbekistan: "Узбекистан",
            "sri lanka": "Шри-Ланка",
            jamaica: "Ямайка",
            japan: "Япония"
        },
        english: {
            ukraine: "Ukraine",
            russia: "Russia",
            turkey: "Turkey",
            brazil: "Brazil",
            kazakhstan: "Kazakhstan",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua and Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaijan",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Bahrain",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Belgium",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia and Herzegovina",
            butane: "Butane",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "United Kingdom",
            hungary: "Hungary",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabon",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Grenada",
            denmark: "Denmark",
            "democratic republic of the congo": "Democratic republic of the Congo",
            dominica: "Dominica",
            "dominican republic": "Dominican republic",
            djibouti: "Djibouti",
            "equatorial guinea": "Equatorial Guinea",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Ethiopia",
            egypt: "Egypt",
            germany: "Germany",
            greece: "Greece",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "Spain",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordan",
            iran: "Iran",
            ireland: "Ireland",
            iceland: "Iceland",
            italy: "Italy",
            "cape verde": "Cape Verde",
            qatar: "Qatar",
            Cameroon: "Cameroon",
            kenya: "Kenya",
            kiribati: "Kiribati",
            colombia: "Colombia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "PRC (people's republic of China)",
            kyrgyzstan: "Kyrgyzstan",
            latvia: "Latvia",
            lesotho: "Lesotho",
            libya: "Libya",
            liberia: "Liberia",
            lebanon: "Lebanon",
            lithuania: "Lithuania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxembourg",
            mauritius: "Mauritius",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia",
            mozambique: "Mozambique",
            morocco: "Morocco",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malaysia",
            mali: "Mali",
            "marshall islands": "Marshall islands",
            mexico: "Mexico",
            mongolia: "Mongolia",
            moldova: "Moldova",
            monaco: "Monaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Netherlands",
            niger: "Niger",
            nigeria: "Nigeria",
            norway: "Norway",
            "new zealand": "New Zealand",
            oman: "Oman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Peru",
            poland: "Poland",
            portugal: "Portugal",
            rwanda: "Rwanda",
            romania: "Romania",
            "saint vincent and the grenadines": "Saint Vincent and the Grenadines",
            "saint kitts and nevis": "Saint Kitts and Nevis",
            "saint lucia": "Saint Lucia",
            "sao tome and principe": "Sao Tome and Principe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Saudi Arabia",
            swaziland: "Swaziland",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Solomon islands",
            slovakia: "Slovakia",
            slovenia: "Slovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Switzerland",
            sweden: "Sweden",
            "sierra leone": "Sierra Leone",
            suriname: "Suriname",
            tajikistan: "Tajikistan",
            turkmenistan: "Turkmenistan",
            tanzania: "Tanzania",
            thailand: "Thailand",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad and Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunisia",
            fiji: "Fiji",
            philippines: "Philippines",
            finland: "Finland",
            france: "France",
            chad: "Chad",
            "czech republic": "Czech republic",
            chile: "Chile",
            "south africa": "South africa",
            croatia: "Croatia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistan",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japan",
            canada: "Canada"
        },
        portugal: {
            ukraine: "Ucrânia",
            russia: "Federação Russa",
            turkey: "República da Turquia",
            brazil: "Brasil",
            kazakhstan: "Cazaquistão",
            belarus: "Bielorrússia",
            andorra: "Andorra",
            "antigua and barbuda": "Antígua e Barbuda",
            armenia: "Armênia",
            argentina: "Argentina",
            australia: "Austrália",
            austria: "Áustria",
            azerbaijan: "Azerbaijão",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Barém",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgária",
            bolivia: "Bolívia",
            botswana: "Botsuana",
            "bosnia and herzegovina": "Bósnia e Herzegovina",
            butane: "Butão",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Reino Unido",
            hungary: "Hungria",
            venezuela: "Venezuela",
            vietnam: "Vietnã",
            gabon: "Gabão",
            gambia: "Gâmbia",
            guinea: "Guiné",
            "guinea bissau": "Guiné-Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Gana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática do Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibuti",
            "equatorial guinea": "Guiné Equatorial",
            eritrea: "Eritreia",
            estonia: "Estônia",
            ethiopia: "Etiópia",
            egypt: "Egito",
            germany: "Alemanha",
            greece: "Grécia",
            georgia: "Geórgia",
            zambia: "Zâmbia",
            israel: "Israel",
            spain: "Espanha",
            india: "Índia",
            indonesia: "Indonésia",
            jordan: "Jordânia",
            iran: "Irão",
            ireland: "Irlanda",
            iceland: "Islândia",
            italy: "Itália",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camarões",
            kenya: "Quênia",
            kiribati: "Kiribati",
            colombia: "Colômbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular da China",
            kyrgyzstan: "Quirguistão",
            latvia: "Letônia",
            lesotho: "Lesoto",
            libya: "Líbia",
            liberia: "Libéria",
            lebanon: "Líbano",
            lithuania: "Lituânia",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Maurícia",
            mauritania: "Mauritânia",
            madagascar: "Madagáscar",
            macedonia: "Macedônia",
            mozambique: "Moçambique",
            morocco: "Marrocos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malásia",
            mali: "Mali",
            "marshall islands": "Ilhas Marshall",
            mexico: "México",
            mongolia: "Mongólia",
            moldova: "Moldova",
            monaco: "Mônaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Baixos",
            niger: "Níger",
            nigeria: "Nigéria",
            norway: "Noruega",
            "new zealand": "Nova Zelândia",
            oman: "Omã",
            pakistan: "Paquistão",
            palau: "Palau",
            paraguay: "Paraguai",
            peru: "Peru",
            poland: "Polônia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Romênia",
            "saint vincent and the grenadines": "São Vicente e Granadinas",
            "saint kitts and nevis": "São Cristóvão e Nevis",
            "saint lucia": "Santa Lúcia",
            "sao tome and principe": "São Tomé e Príncipe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arábia Saudita",
            swaziland: "Suazilândia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Sérvia",
            "solomon islands": "Ilhas Salomão",
            slovakia: "Eslováquia",
            slovenia: "Eslovênia",
            somalia: "Somália",
            montenegro: "Montenegro",
            switzerland: "Suíça",
            sweden: "Suécia",
            "sierra leone": "Serra Leoa",
            suriname: "Suriname",
            tajikistan: "Tajiquistão",
            turkmenistan: "Turquemenistão",
            tanzania: "Tanzânia",
            thailand: "Tailândia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trindade e Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunísia",
            fiji: "Fiji",
            philippines: "Filipinas",
            finland: "Finlândia",
            france: "França",
            chad: "Chade",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "África do Sul",
            croatia: "Croácia",
            uruguay: "Uruguai",
            uzbekistan: "Usbequistão",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japão"
        },
        indian: {
            ukraine: "Ukraine",
            russia: "Russia",
            turkey: "Turkey",
            brazil: "Brazil",
            kazakhstan: "Kazakhstan",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua and Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaijan",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Bahrain",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Belgium",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia and Herzegovina",
            butane: "Butane",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "United Kingdom",
            hungary: "Hungary",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabon",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Grenada",
            denmark: "Denmark",
            "democratic republic of the congo": "Democratic republic of the Congo",
            dominica: "Dominica",
            "dominican republic": "Dominican republic",
            djibouti: "Djibouti",
            "equatorial guinea": "Equatorial Guinea",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Ethiopia",
            egypt: "Egypt",
            germany: "Germany",
            greece: "Greece",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "Spain",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordan",
            iran: "Iran",
            ireland: "Ireland",
            iceland: "Iceland",
            italy: "Italy",
            "cape verde": "Cape Verde",
            qatar: "Qatar",
            Cameroon: "Cameroon",
            kenya: "Kenya",
            kiribati: "Kiribati",
            colombia: "Colombia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "PRC (people's republic of China)",
            kyrgyzstan: "Kyrgyzstan",
            latvia: "Latvia",
            lesotho: "Lesotho",
            libya: "Libya",
            liberia: "Liberia",
            lebanon: "Lebanon",
            lithuania: "Lithuania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxembourg",
            mauritius: "Mauritius",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia",
            mozambique: "Mozambique",
            morocco: "Morocco",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malaysia",
            mali: "Mali",
            "marshall islands": "Marshall islands",
            mexico: "Mexico",
            mongolia: "Mongolia",
            moldova: "Moldova",
            monaco: "Monaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Netherlands",
            niger: "Niger",
            nigeria: "Nigeria",
            norway: "Norway",
            "new zealand": "New Zealand",
            oman: "Oman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Peru",
            poland: "Poland",
            portugal: "Portugal",
            rwanda: "Rwanda",
            romania: "Romania",
            "saint vincent and the grenadines": "Saint Vincent and the Grenadines",
            "saint kitts and nevis": "Saint Kitts and Nevis",
            "saint lucia": "Saint Lucia",
            "sao tome and principe": "Sao Tome and Principe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Saudi Arabia",
            swaziland: "Swaziland",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Solomon islands",
            slovakia: "Slovakia",
            slovenia: "Slovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Switzerland",
            sweden: "Sweden",
            "sierra leone": "Sierra Leone",
            suriname: "Suriname",
            tajikistan: "Tajikistan",
            turkmenistan: "Turkmenistan",
            tanzania: "Tanzania",
            thailand: "Thailand",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad and Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunisia",
            fiji: "Fiji",
            philippines: "Philippines",
            finland: "Finland",
            france: "France",
            chad: "Chad",
            "czech republic": "Czech republic",
            chile: "Chile",
            "south africa": "South africa",
            croatia: "Croatia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistan",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japan",
            canada: "Canada"
        },
        azerbaijani: {
            ukraine: "Ukrayna",
            russia: "Rusiya",
            turkey: "Türkiyə",
            brazil: "Braziliya",
            kazakhstan: "Qazaxıstan",
            belarus: "Belarusiya",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua and Barbuda",
            armenia: "Ermənistan",
            argentina: "Argentina",
            australia: "Avstraliya",
            austria: "Avstriya",
            azerbaijan: "Azərbaycan",
            bangladesh: "Banqladeş",
            bahamas: "Baham adaları",
            bahrain: "Bəxreyn",
            barbados: "Barbados",
            belize: "Beliz",
            belgium: "Belçika",
            benin: "Benin",
            bulgaria: "Bolqarıstan",
            bolivia: "Boliviya",
            botswana: "Botsvana",
            "bosnia and herzegovina": "Bosniya və Herseqovina",
            butane: "Butan",
            burundi: "Burundi",
            brunei: "Bruney",
            "burkina faso": "Burkina-Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Virciniya adaları (Böyük Britaniya)",
            hungary: "Macarıstan",
            venezuela: "Venesuela",
            vietnam: "Vyetnam",
            gabon: "Qabon",
            gambia: "Qambiya",
            guinea: "Qvineya",
            "guinea bissau": "Qvineya-Bisau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Qvatemala",
            ghana: "Qana",
            grenada: "Qrenada",
            denmark: "Danimarka",
            "democratic republic of the congo": "Konqo Demokratik Respublikası",
            dominica: "Dominika",
            "dominican republic": "Dominikan Respublikası",
            djibouti: "Cibuti",
            "equatorial guinea": "Ekvatorial Qvineya",
            eritrea: "Eritreya",
            estonia: "Estoniya",
            ethiopia: "Efiopiya",
            egypt: "Misir",
            germany: "Almaniya",
            greece: "Yunanıstan",
            georgia: "Gürcüstan",
            zambia: "Zambiya",
            israel: "İsrail",
            spain: "İspaniya",
            india: "Hindistan",
            indonesia: "İndoneziya",
            jordan: "İordaniya",
            iran: "İran",
            ireland: "İrlandiya",
            iceland: "İslandiya",
            italy: "İtaliya",
            "cape verde": "Kabo-Verde",
            qatar: "Qətər",
            Cameroon: "Kamerun",
            kenya: "Keniya",
            kiribati: "Kiribati",
            colombia: "Kolumbiya",
            "costa rica": "Kosta-Rika",
            cuba: "Kuba",
            "prc (people's republic of china)": "ÇXR (Çin Xalq Respublikası)",
            kyrgyzstan: "Qırğızıstan",
            latvia: "Latviya",
            lesotho: "Lesoto",
            libya: "Liviya",
            liberia: "Liberiy",
            lebanon: "Livan",
            lithuania: "Litva",
            liechtenstein: "Lixtenşteyn",
            luxembourg: "Lüksemburq",
            mauritius: "Mavrikiy",
            mauritania: "Mavritaniya",
            madagascar: "Madaqaskar",
            macedonia: "Şimali Makedoniya",
            mozambique: "Mozambik",
            morocco: "Marokko",
            malawi: "Malavi",
            malta: "Malta",
            malaysia: "Malayziya",
            mali: "Somali",
            "marshall islands": "Marşal adaları",
            mexico: "Meksika",
            mongolia: "Monqolustan",
            moldova: "Moldova",
            monaco: "Monako",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Niderland",
            niger: "Niger",
            nigeria: "Nigeriya",
            norway: "Norveç",
            "new zealand": "Yeni Zelandiya",
            oman: "Oman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraqvay",
            peru: "Peru",
            poland: "Polşa",
            portugal: "Portuqaliya",
            rwanda: "Ruanda",
            romania: "Rumıniya",
            "saint vincent and the grenadines": "Sen-Vinsent və Qrenadin",
            "saint kitts and nevis": "Sent-Kits vı Nevis",
            "saint lucia": "Sent-Lüsiya",
            "sao tome and principe": "San-Tome və Prinsipi",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Səudiyyə Ərəbistanı",
            swaziland: "Esvatini",
            seychelles: "Seyşel adaları",
            senegal: "Sineqal",
            serbia: "Serbiya",
            "solomon islands": "Solomon Adaları",
            slovakia: "Slovakiya",
            slovenia: "Sloveniya",
            somalia: "Somali",
            montenegro: "Monteneqro",
            switzerland: "İsveçrə",
            sweden: "Bir daha fırlat",
            "sierra leone": "Syerra-Leone",
            suriname: "Surinam",
            tajikistan: "Tacikistan",
            turkmenistan: "Türkmənistan",
            tanzania: "Tanzaniya",
            thailand: "Tayland",
            togo: "Toqo",
            tonga: "Tonqa",
            "trinidad and tobago": "Trinidad və Tobaqo",
            tuvalu: "Tuvalu",
            tunisia: "Tunis",
            fiji: "Fici",
            philippines: "Filippin adaları",
            finland: "Finlandiya",
            france: "Fransa",
            chad: "Çad",
            "czech republic": "Çexiya",
            chile: "Çili",
            "south africa": "CAR",
            croatia: "Xorvatiya",
            uruguay: "Uruqvay",
            uzbekistan: "Özbəkistan",
            "sri lanka": "Şri-Lanka",
            jamaica: "Yamayka",
            japan: "Yaponiya"
        },
        ukrainian: {
            ukraine: "Україна",
            russia: "Росія",
            turkey: "Туреччина",
            brazil: "Бразилія",
            kazakhstan: "Казахстан",
            belarus: "Білорусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа і Барбуда",
            armenia: "Вірменія",
            argentina: "Аргентина",
            australia: "Австралія",
            austria: "Австрія",
            azerbaijan: "Азербайджан",
            bangladesh: "Бангладеш",
            bahamas: "Багами",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Беліз",
            belgium: "Бельгія",
            benin: "Бенін",
            bulgaria: "Болгарія",
            bolivia: "Болівія",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Боснія і Герцеговина",
            butane: "Бутан",
            burundi: "Бурунді",
            brunei: "Бруней",
            "burkina faso": "Буркіна-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Великобританія",
            hungary: "Угорщина",
            venezuela: "Венесуела",
            vietnam: "В’єтнам",
            gabon: "Габон",
            gambia: "Гамбія",
            guinea: "Гвінея",
            "guinea bissau": "Гвінея-Бісау",
            honduras: "Гондурас",
            haiti: "Гаїті",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Данія",
            "democratic republic of the congo": "Демократична Республіка Конго",
            dominica: "Домініка",
            "dominican republic": "Домініканська Республіка",
            djibouti: "Джибуті",
            "equatorial guinea": "Екваторіальна Гвінея",
            eritrea: "Еритрея",
            estonia: "Естонія",
            ethiopia: "Ефіопія",
            egypt: "Єгипет",
            germany: "Німеччина",
            greece: "Греція",
            georgia: "Грузія",
            zambia: "Замбія",
            israel: "Ізраїль",
            spain: "Іспанія",
            india: "Індія",
            indonesia: "Індонезія",
            jordan: "Йорданія",
            iran: "Іран",
            ireland: "Ірландія",
            iceland: "Ісландія",
            italy: "Італія",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кенія",
            kiribati: "Кірібаті",
            colombia: "Колумбія",
            "costa rica": "Коста-Ріка",
            cuba: "Куба",
            "prc (people's republic of china)": "КНР (Китайська Народна Республіка)",
            kyrgyzstan: "Киргизія",
            latvia: "Латвія",
            lesotho: "Лесото",
            libya: "Лівія",
            liberia: "Ліберія",
            lebanon: "Ліван",
            lithuania: "Литва",
            liechtenstein: "Ліхтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикій",
            mauritania: "Мавританія",
            madagascar: "Мадагаскар",
            macedonia: "Македонія",
            mozambique: "Мозамбік",
            morocco: "Марокко",
            malawi: "Малаві",
            malta: "Мальта",
            malaysia: "Малайзія",
            mali: "Малі",
            "marshall islands": "Маршаллові Острови",
            mexico: "Мексика",
            mongolia: "Монголія",
            moldova: "Молдова",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нідерланди",
            niger: "Нігер",
            nigeria: "Нігерія",
            norway: "Норвегія",
            "new zealand": "Нова Зеландія",
            oman: "Оман",
            pakistan: "Пакистан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польща",
            portugal: "Португалія",
            rwanda: "Руанда",
            romania: "Румунія",
            "saint vincent and the grenadines": "Сент-Вінсент і Гренадіни",
            "saint kitts and nevis": "Сент-Кітс і Невіс",
            "saint lucia": "Сент-Люсія",
            "sao tome and principe": "Сан-Томе і Прінсіпі",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Саудівська Аравія",
            swaziland: "Свазіленд",
            seychelles: "Сейшельські Острови",
            senegal: "Сенегал",
            serbia: "Сербія",
            "solomon islands": "Соломонові Острови",
            slovakia: "Словаччина",
            slovenia: "Словенія",
            somalia: "Сомалі",
            montenegro: "Чорногорія",
            switzerland: "Швейцарія",
            sweden: "Швеція",
            "sierra leone": "Сьєрра-Леоне",
            suriname: "Суринам",
            tajikistan: "Таджикистан",
            turkmenistan: "Туркменистан",
            tanzania: "Танзанія",
            thailand: "Таїланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринідад і Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Туніс",
            fiji: "Фіджі",
            philippines: "Філіппіни",
            finland: "Фінляндія",
            france: "Франція",
            chad: "Чад",
            "czech republic": "Чехія",
            chile: "Чилі",
            "south africa": "ПАР",
            croatia: "Хорватія",
            uruguay: "Уругвай",
            uzbekistan: "Узбекистан",
            "sri lanka": "Шрі-Ланка",
            jamaica: "Ямайка",
            japan: "Японія"
        },
        turkish: {
            ukraine: "Ukrayna",
            russia: "Rusya",
            turkey: "Türkiye",
            brazil: "Brezilya",
            kazakhstan: "Kazakistan",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua ve Barbuda",
            armenia: "Ermenistan",
            argentina: "Arjantin",
            australia: "Avustralya",
            austria: "Avusturya",
            azerbaijan: "Azerbaycan",
            bangladesh: "Bangladeş",
            bahamas: "Bahamalar",
            bahrain: "Bahreyn",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Belçika",
            benin: "Benin",
            bulgaria: "Bulgaristan",
            bolivia: "Bolivya",
            botswana: "Botsvana",
            "bosnia and herzegovina": "Bosna-Hersek",
            butane: "Butan",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Birleşik Krallık",
            hungary: "Macaristan",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabon",
            gambia: "Gambiya",
            guinea: "Gine",
            "guinea bissau": "Gine-Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Gana",
            grenada: "Grenada",
            denmark: "Danimarka",
            "democratic republic of the congo": "Demokratik Kongo Cumhuriyeti",
            dominica: "Dominika",
            "dominican republic": "Dominik Cumhuriyeti",
            djibouti: "Cibuti",
            "equatorial guinea": "Ekvator Ginesi",
            eritrea: "Eritre",
            estonia: "Estonya",
            ethiopia: "Etiyopya",
            egypt: "Mısır",
            germany: "Almanya",
            greece: "Yunanistan",
            georgia: "Gürcistan",
            zambia: "Zambiya",
            israel: "İsrail",
            spain: "İspanya",
            india: "Hindistan",
            indonesia: "Endonezya",
            jordan: "Ürdün",
            iran: "İran",
            ireland: "İrlanda",
            iceland: "İzlanda",
            italy: "İtalya",
            "cape verde": "Yeşil Burun Adaları",
            qatar: "Katar",
            Cameroon: "Kamerun",
            kenya: "Kenya",
            kiribati: "Kiribati",
            colombia: "Kolombiya",
            "costa rica": "Kosta Rika",
            cuba: "Küba",
            "prc (people's republic of china)": "PRC (Çin Halk Cumhuriyeti)",
            kyrgyzstan: "Kırgızistan",
            latvia: "Letonya",
            lesotho: "Lesotho",
            libya: "Libya",
            liberia: "Liberya",
            lebanon: "Lübnan",
            lithuania: "Litvanya",
            liechtenstein: "Lihtenştayn",
            luxembourg: "Lüksemburg",
            mauritius: "Mauritius",
            mauritania: "Moritanya",
            madagascar: "Madagaskar",
            macedonia: "Makedonya",
            mozambique: "Mozambik",
            morocco: "Fas",
            malawi: "Malavi",
            malta: "Malta",
            malaysia: "Malezya",
            mali: "Mali",
            "marshall islands": "Marshall Adaları",
            mexico: "Meksika",
            mongolia: "Moğolistan",
            moldova: "Moldova",
            monaco: "Monako",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Hollanda",
            niger: "Nijer",
            nigeria: "Nijerya",
            norway: "Norveç",
            "new zealand": "Yeni Zelanda",
            oman: "Umman",
            pakistan: "Pakistan",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Peru",
            poland: "Polonya",
            portugal: "Portekiz",
            rwanda: "Ruanda",
            romania: "Romanya",
            "saint vincent and the grenadines": "Aziz Vincent ve Grenadinler",
            "saint kitts and nevis": "Saint Kitts ve Nevis",
            "saint lucia": "Saint Lucia",
            "sao tome and principe": "Sao Tome ve Principe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Suudi Arabistan",
            swaziland: "Svaziland",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Sırbistan",
            "solomon islands": "Solomon Adaları",
            slovakia: "Slovakya",
            slovenia: "Slovenya",
            somalia: "Somali",
            montenegro: "Karadağ",
            switzerland: "İsviçre",
            sweden: "İsveç",
            "sierra leone": "Sierra Leone",
            suriname: "Surinam",
            tajikistan: "Tacikistan",
            turkmenistan: "Türkmenistan",
            tanzania: "Tanzanya",
            thailand: "Tayland",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad ve Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunus",
            fiji: "Fiji",
            philippines: "Filipinler",
            finland: "Finlandiya",
            france: "Fransa",
            chad: "Çad",
            "czech republic": "Çek Cumhuriyeti",
            chile: "Şili",
            "south africa": "Güney Afrika",
            croatia: "Hırvatistan",
            uruguay: "Uruguay",
            uzbekistan: "Özbekistan",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaika",
            japan: "Japonya"
        },
        kazakh: {
            ukraine: "Украина",
            russia: "Ресей",
            turkey: "Түркия",
            brazil: "Бразилия",
            kazakhstan: "Қазақстан",
            belarus: "Беларусь",
            andorra: "Андорра",
            "antigua and barbuda": "Антигуа және Барбуда",
            armenia: "Армения",
            argentina: "Аргентина",
            australia: "Аустралия",
            austria: "Аустрия",
            azerbaijan: "Әзірбайжан",
            bangladesh: "Бангладеш",
            bahamas: "Багам аралдары",
            bahrain: "Бахрейн",
            barbados: "Барбадос",
            belize: "Белиз",
            belgium: "Бельгия",
            benin: "Бенин",
            bulgaria: "Болгария",
            bolivia: "Боливия",
            botswana: "Ботсвана",
            "bosnia and herzegovina": "Босния және Герцеговина",
            butane: "Бутан",
            burundi: "Бурунди",
            brunei: "Бруней",
            "burkina faso": "Буркина-Фасо",
            vanuatu: "Вануату",
            "united kingdom": "Ұлыбритания",
            hungary: "Мажарстан",
            venezuela: "Венесуэла",
            vietnam: "Вьетнам",
            gabon: "Габон",
            gambia: "Гамбия",
            guinea: "Гвинея",
            "guinea bissau": "Гвинея-Бисау",
            honduras: "Гондурас",
            haiti: "Гаити",
            guatemala: "Гватемала",
            ghana: "Гана",
            grenada: "Гренада",
            denmark: "Дания",
            "democratic republic of the congo": "Конго Демократиялық Республикасы",
            dominica: "Доминика",
            "dominican republic": "Доминикан Республикасы",
            djibouti: "Джибути",
            "equatorial guinea": "Экваторлық Гвинея",
            eritrea: "Эритрея",
            estonia: "Эстония",
            ethiopia: "Эфиопия",
            egypt: "Мысыр",
            germany: "Германия",
            greece: "Грекия",
            georgia: "Грузия",
            zambia: "Замбия",
            israel: "Израиль",
            spain: "Испания",
            india: "Үндістан",
            indonesia: "Индонезия",
            jordan: "Иордания",
            iran: "Иран",
            ireland: "Ирландия",
            iceland: "Исландия",
            italy: "Италия",
            "cape verde": "Кабо-Верде",
            qatar: "Катар",
            Cameroon: "Камерун",
            kenya: "Кения",
            kiribati: "Кирибати",
            colombia: "Колумбия",
            "costa rica": "Коста-Рика",
            cuba: "Куба",
            "prc (people's republic of china)": "ҚХР (Қытай Халық Республикасы)",
            kyrgyzstan: "Қырғызстан",
            latvia: "Латвия",
            lesotho: "Лесото",
            libya: "Ливия",
            liberia: "Либерия",
            lebanon: "Ливан",
            lithuania: "Литва",
            liechtenstein: "Лихтенштейн",
            luxembourg: "Люксембург",
            mauritius: "Маврикий",
            mauritania: "Мавритания",
            madagascar: "Мадагаскар",
            macedonia: "Солтүстік Македония",
            mozambique: "Мозамбик",
            morocco: "Марокко",
            malawi: "Малави",
            malta: "Мальта",
            malaysia: "Малайзия",
            mali: "Мали",
            "marshall islands": "Маршал Аралдары",
            mexico: "Мексика",
            mongolia: "Моңғолия",
            moldova: "Молдова",
            monaco: "Монако",
            nauru: "Науру",
            nepal: "Непал",
            netherlands: "Нидерланд",
            niger: "Нигер",
            nigeria: "Нигерия",
            norway: "Норвегия",
            "new zealand": "Жаңа Зеландия",
            oman: "Оман",
            pakistan: "Пәкістан",
            palau: "Палау",
            paraguay: "Парагвай",
            peru: "Перу",
            poland: "Польша",
            portugal: "Португалия",
            rwanda: "Руанда",
            romania: "Румыния",
            "saint vincent and the grenadines": "Сент-Винсент және Гренадиндер",
            "saint kitts and nevis": "Сент-Китс және Невис",
            "saint lucia": "Сент-Люсия",
            "sao tome and principe": "Сан-Томе және Принсипи",
            salvador: "Сальвадор",
            samoa: "Самоа",
            "saudi arabia": "Сауд Арабиясы",
            swaziland: "Свазиленд",
            seychelles: "Сейшел Аралдары",
            senegal: "Сенегал",
            serbia: "Сербия",
            "solomon islands": "Соломон Аралдары",
            slovakia: "Словакия",
            slovenia: "Словения",
            somalia: "Сомали",
            montenegro: "Черногория",
            switzerland: "Швейцария",
            sweden: "Швеция",
            "sierra leone": "Сьерра-Леоне",
            suriname: "Суринам",
            tajikistan: "Тәжікстан",
            turkmenistan: "Түрікменстан",
            tanzania: "Танзания",
            thailand: "Тайланд",
            togo: "Того",
            tonga: "Тонга",
            "trinidad and tobago": "Тринидад және Тобаго",
            tuvalu: "Тувалу",
            tunisia: "Тунис",
            fiji: "Фиджи",
            philippines: "Филиппиндер",
            finland: "Финляндия",
            france: "Франция",
            chad: "Чад",
            "czech republic": "Чехія",
            chile: "Чилі",
            "south africa": "ОАР",
            croatia: "Хорватия",
            uruguay: "Уругвай",
            uzbekistan: "Өзбекстан",
            "sri lanka": "Шри-Ланка",
            jamaica: "Ямайка",
            japan: "Жапония"
        },
        brazilian: {
            ukraine: "Ucrânia",
            russia: "Federação Russa",
            turkey: "República da Turquia",
            brazil: "Brasil",
            kazakhstan: "Cazaquistão",
            belarus: "Bielorrússia",
            andorra: "Andorra",
            "antigua and barbuda": "Antígua e Barbuda",
            armenia: "Armênia",
            argentina: "Argentina",
            australia: "Austrália",
            austria: "Áustria",
            azerbaijan: "Azerbaijão",
            bangladesh: "Bangladesh",
            bahamas: "Bahamas",
            bahrain: "Barém",
            barbados: "Barbados",
            belize: "Belize",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgária",
            bolivia: "Bolívia",
            botswana: "Botsuana",
            "bosnia and herzegovina": "Bósnia e Herzegovina",
            butane: "Butão",
            burundi: "Burundi",
            brunei: "Brunei",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Reino Unido",
            hungary: "Hungria",
            venezuela: "Venezuela",
            vietnam: "Vietnã",
            gabon: "Gabão",
            gambia: "Gâmbia",
            guinea: "Guiné",
            "guinea bissau": "Guiné-Bissau",
            honduras: "Honduras",
            haiti: "Haiti",
            guatemala: "Guatemala",
            ghana: "Gana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática do Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibuti",
            "equatorial guinea": "Guiné Equatorial",
            eritrea: "Eritreia",
            estonia: "Estônia",
            ethiopia: "Etiópia",
            egypt: "Egito",
            germany: "Alemanha",
            greece: "Grécia",
            georgia: "Geórgia",
            zambia: "Zâmbia",
            israel: "Israel",
            spain: "Espanha",
            india: "Índia",
            indonesia: "Indonésia",
            jordan: "Jordânia",
            iran: "Irão",
            ireland: "Irlanda",
            iceland: "Islândia",
            italy: "Itália",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camarões",
            kenya: "Quênia",
            kiribati: "Kiribati",
            colombia: "Colômbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular da China",
            kyrgyzstan: "Quirguistão",
            latvia: "Letônia",
            lesotho: "Lesoto",
            libya: "Líbia",
            liberia: "Libéria",
            lebanon: "Líbano",
            lithuania: "Lituânia",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Maurícia",
            mauritania: "Mauritânia",
            madagascar: "Madagáscar",
            macedonia: "Macedônia",
            mozambique: "Moçambique",
            morocco: "Marrocos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malásia",
            mali: "Mali",
            "marshall islands": "Ilhas Marshall",
            mexico: "México",
            mongolia: "Mongólia",
            moldova: "Moldova",
            monaco: "Mônaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Baixos",
            niger: "Níger",
            nigeria: "Nigéria",
            norway: "Noruega",
            "new zealand": "Nova Zelândia",
            oman: "Omã",
            pakistan: "Paquistão",
            palau: "Palau",
            paraguay: "Paraguai",
            peru: "Peru",
            poland: "Polônia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Romênia",
            "saint vincent and the grenadines": "São Vicente e Granadinas",
            "saint kitts and nevis": "São Cristóvão e Nevis",
            "saint lucia": "Santa Lúcia",
            "sao tome and principe": "São Tomé e Príncipe",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arábia Saudita",
            swaziland: "Suazilândia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Sérvia",
            "solomon islands": "Ilhas Salomão",
            slovakia: "Eslováquia",
            slovenia: "Eslovênia",
            somalia: "Somália",
            montenegro: "Montenegro",
            switzerland: "Suíça",
            sweden: "Suécia",
            "sierra leone": "Serra Leoa",
            suriname: "Suriname",
            tajikistan: "Tajiquistão",
            turkmenistan: "Turquemenistão",
            tanzania: "Tanzânia",
            thailand: "Tailândia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trindade e Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunísia",
            fiji: "Fiji",
            philippines: "Filipinas",
            finland: "Finlândia",
            france: "França",
            chad: "Chade",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "África do Sul",
            croatia: "Croácia",
            uruguay: "Uruguai",
            uzbekistan: "Usbequistão",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japão"
        },
        uzbek: {
            ukraine: "Ukraina",
            russia: "Rossiya",
            turkey: "Turkiya",
            brazil: "Braziliya",
            kazakhstan: "Qozog‘iston",
            belarus: "Belarus",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua va Barbuda",
            armenia: "Armaniston",
            argentina: "Argentina",
            australia: "Avstraliya",
            austria: "Avstriya",
            azerbaijan: "Ozarbayjon",
            bangladesh: "Bangladesh",
            bahamas: "Bagam orollari",
            bahrain: "Bahrayn",
            barbados: "Barbados",
            belize: "Beliz",
            belgium: "Belgiya",
            benin: "Benin",
            bulgaria: "Bolgariya",
            bolivia: "Boliviya",
            botswana: "Botsvana",
            "bosnia and herzegovina": "Bosniya va Gertsegovina",
            butane: "Butan",
            burundi: "Burundi",
            brunei: "Bruney",
            "burkina faso": "Burkina-Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Buyuk Britaniya",
            hungary: "Vengriya",
            venezuela: "Venesuela",
            vietnam: "Vyetnam",
            gabon: "Gabon",
            gambia: "Gambiya",
            guinea: "Gvineya",
            "guinea bissau": "Gvineya-Bisau",
            honduras: "Gonduras",
            haiti: "Gaiti",
            guatemala: "Gvatemala",
            ghana: "Gana",
            grenada: "Grenada",
            denmark: "Daniya",
            "democratic republic of the congo": "Kongo Demokratik Respublikasi",
            dominica: "Dominika",
            "dominican republic": "Dominikan Respublikasi",
            djibouti: "Jibuti",
            "equatorial guinea": "Ekvatorial Gvineya",
            eritrea: "Eritreya",
            estonia: "Estoniya",
            ethiopia: "Efiopiya",
            egypt: "Misr",
            germany: "Germaniya",
            greece: "Gretsiya",
            georgia: "Gruziya",
            zambia: "Zambiya",
            israel: "Isroil",
            spain: "Ispaniya",
            india: "Hindiston",
            indonesia: "Indoneziya",
            jordan: "Iordaniya",
            iran: "Eron",
            ireland: "Irlandiya",
            iceland: "Islandiya",
            italy: "Italiya",
            "cape verde": "Kabo-Verde",
            qatar: "Qatar",
            Cameroon: "Kamerun",
            kenya: "Keniya",
            kiribati: "Kiribati",
            colombia: "Kolumbiya",
            "costa rica": "Kosta-Rika",
            cuba: "Kuba",
            "prc (people's republic of china)": "XXR (Xitoy Xalq Respublikasi)",
            kyrgyzstan: "Qirg‘iziston",
            latvia: "Latviya",
            lesotho: "Lesoto",
            libya: "Liviya",
            liberia: "Liberiya",
            lebanon: "Livan",
            lithuania: "Litva",
            liechtenstein: "Lixtenshteyn",
            luxembourg: "Lyuksemburg",
            mauritius: "Mavrikiy",
            mauritania: "Mavritaniya",
            madagascar: "Madagaskar",
            macedonia: "Shimoliy Makedoniya",
            mozambique: "Mozambik",
            morocco: "Marokash",
            malawi: "Malavi",
            malta: "Malta",
            malaysia: "Malayziya",
            mali: "Mali",
            "marshall islands": "Marshall orollari",
            mexico: "Meksika",
            mongolia: "Mo‘g‘uliston",
            moldova: "Moldaviya",
            monaco: "Monako",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Niderlandiya",
            niger: "Niger",
            nigeria: "Nigeriya",
            norway: "Norvegiya",
            "new zealand": "Yangi Zelandiya",
            oman: "Ummon",
            pakistan: "Pokiston",
            palau: "Palau",
            paraguay: "Paragvay",
            peru: "Peru",
            poland: "Polsha",
            portugal: "Portugaliya",
            rwanda: "Ruanda",
            romania: "Ruminiya",
            "saint vincent and the grenadines": "Sent-Vinsent va Grenadina",
            "saint kitts and nevis": "Sent-Kits va Nevis",
            "saint lucia": "Sent-Lyusiya",
            "sao tome and principe": "San-Tome va Prinsipi",
            salvador: "Salvador",
            samoa: "Samoa",
            "saudi arabia": "Saudiya Arabistoni",
            swaziland: "Esvatini",
            seychelles: "Seyshel orollari",
            senegal: "Senegal",
            serbia: "Serbiya",
            "solomon islands": "Solomon orollari",
            slovakia: "Slovakiya",
            slovenia: "Sloveniya",
            somalia: "Somali",
            montenegro: "Chernogoriya",
            switzerland: "Shveytsariya",
            sweden: "Shvetsiya",
            "sierra leone": "Serra-Leone",
            suriname: "Surinam",
            tajikistan: "Tojikiston",
            turkmenistan: "Turkmaniston",
            tanzania: "Tanzaniya",
            thailand: "Tayland",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "Trinidad va Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Tunis",
            fiji: "Fiji",
            philippines: "Filippin",
            finland: "Finlyandiya",
            france: "Fransiya",
            chad: "Chad",
            "czech republic": "Chexiya",
            chile: "Chili",
            "south africa": "JAR",
            croatia: "Xorvatiya",
            uruguay: "Urugvay",
            uzbekistan: "O‘zbekiston",
            "sri lanka": "Shri-Lanka",
            jamaica: "Yamayka",
            japan: "Yaponiya"
        },
        spanish: {
            ukraine: "Ucrania",
            russia: "Federación Rusa",
            turkey: "Turquía",
            brazil: "Brasil",
            kazakhstan: "Kazajstán",
            belarus: "Bielorrusia",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua y Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaiyán",
            bangladesh: "Bangladesh",
            bahamas: "Las Bahamas",
            bahrain: "Bahréin",
            barbados: "Barbados",
            belize: "Belice",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia y Herzegovina",
            butane: "Bután",
            burundi: "Burundi",
            brunei: "Brunéi",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Gran Bretaña",
            hungary: "Hungría",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabón",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea-Bisáu",
            honduras: "Honduras",
            haiti: "Haití",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática del Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibouti",
            "equatorial guinea": "Guinea Ecuatorial",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Etiopía",
            egypt: "Egipto",
            germany: "Alemania",
            greece: "Grecia",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "España",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordán",
            iran: "Irán",
            ireland: "Irlanda",
            iceland: "Islandia",
            italy: "Italia",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camerún",
            kenya: "Kenia",
            kiribati: "Kiribati",
            colombia: "Columbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular China",
            kyrgyzstan: "Kirguizstán",
            latvia: "Letonia",
            lesotho: "Lesoto",
            libya: "Libia",
            liberia: "Liberia",
            lebanon: "Líbano",
            lithuania: "Lituania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Mauricio",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia del Norte",
            mozambique: "Mozambique",
            morocco: "Marruecos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malasia",
            mali: "Mali",
            "marshall islands": "República de las Islas Marshall",
            mexico: "México",
            mongolia: "Mongolia",
            moldova: "Moldavia",
            monaco: "Mónaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Bajos",
            niger: "Níger",
            nigeria: "Nigeria",
            norway: "Noruega",
            "new zealand": "Nueva Zelanda",
            oman: "Omán",
            pakistan: "Pakistán",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Perú",
            poland: "Polonia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Rumania",
            "saint vincent and the grenadines": "San Vicente y las Granadinas",
            "saint kitts and nevis": "San Cristóbal y Nieves",
            "saint lucia": "Santa Lucía",
            "sao tome and principe": "Santo Tomé y Príncipe",
            salvador: "El Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arabia Saudita",
            swaziland: "Swazilandia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Islas Salomón",
            slovakia: "Eslovaquia",
            slovenia: "Eslovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Suiza",
            sweden: "Suecia",
            "sierra leone": "Sierra Leona",
            suriname: "Surinam",
            tajikistan: "Tayikistan",
            turkmenistan: "Turkmenistán",
            tanzania: "Tanzania",
            thailand: "Tailandia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "República de Trinidad y Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Túnez",
            fiji: "Fiyi",
            philippines: "Filipinas",
            finland: "Finlandia",
            france: "Francia",
            chad: "Chad",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "Republica Sudafricana",
            croatia: "Croacia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistán",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japón"
        },
        hindi: {
            ukraine: "यूक्रेन",
            russia: "रूसी संघ",
            turkey: "तुर्की",
            brazil: "ब्राज़िल",
            kazakhstan: "कजाकिस्तान",
            belarus: "बेलोरूस",
            andorra: "एंडोरा",
            "antigua and barbuda": "अण्टीगुआ और बारबूडा",
            armenia: "आर्मीनिया",
            argentina: "अर्जेंटीना",
            australia: "ऑस्ट्रेलिया",
            austria: "ऑस्ट्रिया",
            azerbaijan: "अज़रबैजान",
            bangladesh: "बांग्लादेश",
            bahamas: "बहामास",
            bahrain: "बहरीन",
            barbados: "बारबाडोस",
            belize: "बेलीज़",
            belgium: "बेल्जियम",
            benin: "बेनिन",
            bulgaria: "बुल्गारिया",
            bolivia: "बोलीविया",
            botswana: "बोत्सवाना",
            "bosnia and herzegovina": "बोस्निया और हर्जेगोविना",
            butane: "भूटान",
            burundi: "बुरुंडी",
            brunei: "ब्रुनेई",
            "burkina faso": "बुर्किना फासो",
            vanuatu: "वानूआतू",
            "united kingdom": "यूनाइटेड किंगडम",
            hungary: "हंगरी",
            venezuela: "वेनेजुएला",
            vietnam: "वियतनामВьетнам",
            gabon: "गबॉन",
            gambia: "गाम्बिया",
            guinea: "गिनी",
            "guinea bissau": "गिनी-बिसाऊ",
            honduras: "होंडुरस",
            haiti: "हैती",
            guatemala: "ग्वाटेमाला",
            ghana: "घाना",
            grenada: "ग्रेनाडा",
            denmark: "डेनमार्क",
            "democratic republic of the congo": "कांगो लोकतांत्रिक गणराज्य",
            dominica: "डोमिनिका",
            "dominican republic": "डोमिनिकन गणराज्य",
            djibouti: "जिबूती",
            "equatorial guinea": "भूमध्यवर्ती गिनी",
            eritrea: "इरीट्रिया",
            estonia: "एस्तोनिया",
            ethiopia: "इथियोपिया",
            egypt: "मिस्र",
            germany: "जर्मनी",
            greece: "यूनान",
            georgia: "जॉर्जिया",
            zambia: "जाम्बिया",
            israel: "इजराइल",
            spain: "स्पेन",
            india: "भारत",
            indonesia: "इंडोनेशिया",
            jordan: "जॉर्डन",
            iran: "ईरान",
            ireland: "आयरलैंड",
            iceland: "आइसलैंड",
            italy: "इटली",
            "cape verde": "केप वर्ड",
            qatar: "कतर",
            Cameroon: "कैमरून",
            kenya: "केन्या",
            kiribati: "किरिबाती",
            colombia: "कोलंबिया",
            "costa rica": "कोस्टा रिका",
            cuba: "क्यूबा",
            "prc (people's republic of china)": "पीआरसी (चीनी जनवादी गणराज्य)",
            kyrgyzstan: "किर्गिज़स्तान",
            latvia: "लातविया",
            lesotho: "लेसोथो",
            libya: "लीबिया",
            liberia: "लाइबेरिया",
            lebanon: "लेबनान",
            lithuania: "लिथुआनिया",
            liechtenstein: "लिकटेंस्टाइन",
            luxembourg: "लक्ज़मबर्ग",
            mauritius: "मॉरीशस",
            mauritania: "मॉरितानिया",
            madagascar: "मेडागास्कर",
            macedonia: "उत्तर मैसेडोनिया",
            mozambique: "मोजाम्बिक",
            morocco: "मोरक्को",
            malawi: "मलावी",
            malta: "माल्टा",
            malaysia: "मलेशिया",
            mali: "माली",
            "marshall islands": "मार्शल द्वीपसमूह",
            mexico: "मेक्सिको",
            mongolia: "मंगोलिया",
            moldova: "मॉल्डोवा",
            monaco: "मोनाको",
            nauru: "मोनाको",
            nepal: "नेपाल",
            netherlands: "नीदरलैंड",
            niger: "नाइजर",
            nigeria: "नाइजीरिया",
            norway: "नॉर्वे",
            "new zealand": "न्यूज़ीलैंड",
            oman: "ओमान",
            pakistan: "पाकिस्तान",
            palau: "पलाऊ",
            paraguay: "पैराग्वे",
            peru: "पेरू",
            poland: "पोलैंड",
            portugal: "पुर्तगाल",
            rwanda: "रवांडा",
            romania: "रोमानिया",
            "saint vincent and the grenadines": "सेंट विंसेंट और ग्रेनडिंस",
            "saint kitts and nevis": "संत किट्ट्स और नेविस",
            "saint lucia": "संत लूसिया",
            "sao tome and principe": "साओ तोमे और प्रिन्सिपी",
            salvador: "अल साल्वाडोर",
            samoa: "समोआ",
            "saudi arabia": "सऊदी अरब",
            swaziland: "एस्वातीनी",
            seychelles: "सेशेल्स",
            senegal: "सेनेगल",
            serbia: "सर्बिया",
            "solomon islands": "सोलोमन द्वीपसमूह",
            slovakia: "स्लोवाकिया",
            slovenia: "स्लोवेनिया",
            somalia: "सोमालिया",
            montenegro: "मॉन्टेनीग्रो",
            switzerland: "स्विट्ज़रलैंड",
            sweden: "स्वीडन",
            "sierra leone": "सिएरा लियोन",
            suriname: "सूरीनाम",
            tajikistan: "ताजिकिस्तान",
            turkmenistan: "तुर्कमेनिस्तान",
            tanzania: "तंजानिया",
            thailand: "थाईलैंड",
            togo: "टोगो",
            tonga: "टोंगा",
            "trinidad and tobago": "त्रिनिदाद और टोबैगो",
            tuvalu: "तुवालू",
            tunisia: "ट्यूनिस",
            fiji: "फ़िजी",
            philippines: "फिलीपींस",
            finland: "फिनलैंड",
            france: "फ्रांस",
            chad: "चाड",
            "czech republic": "चेक रिपब्लिक",
            chile: "चिली",
            "south africa": "दक्षिण अफ्रीका",
            croatia: "क्रोएशिया",
            uruguay: "उरुग्वे",
            uzbekistan: "उज़्बेकिस्तान",
            "sri lanka": "श्रीलंका",
            jamaica: "जमैका",
            japan: "जापान"
        },
        chilean: {
            ukraine: "Ucrania",
            russia: "Federación Rusa",
            turkey: "Turquía",
            brazil: "Brasil",
            kazakhstan: "Kazajstán",
            belarus: "Bielorrusia",
            andorra: "Andorra",
            "antigua and barbuda": "Antigua y Barbuda",
            armenia: "Armenia",
            argentina: "Argentina",
            australia: "Australia",
            austria: "Austria",
            azerbaijan: "Azerbaiyán",
            bangladesh: "Bangladesh",
            bahamas: "Las Bahamas",
            bahrain: "Bahréin",
            barbados: "Barbados",
            belize: "Belice",
            belgium: "Bélgica",
            benin: "Benin",
            bulgaria: "Bulgaria",
            bolivia: "Bolivia",
            botswana: "Botswana",
            "bosnia and herzegovina": "Bosnia y Herzegovina",
            butane: "Bután",
            burundi: "Burundi",
            brunei: "Brunéi",
            "burkina faso": "Burkina Faso",
            vanuatu: "Vanuatu",
            "united kingdom": "Gran Bretaña",
            hungary: "Hungría",
            venezuela: "Venezuela",
            vietnam: "Vietnam",
            gabon: "Gabón",
            gambia: "Gambia",
            guinea: "Guinea",
            "guinea bissau": "Guinea-Bisáu",
            honduras: "Honduras",
            haiti: "Haití",
            guatemala: "Guatemala",
            ghana: "Ghana",
            grenada: "Granada",
            denmark: "Dinamarca",
            "democratic republic of the congo": "República Democrática del Congo",
            dominica: "Dominica",
            "dominican republic": "República Dominicana",
            djibouti: "Djibouti",
            "equatorial guinea": "Guinea Ecuatorial",
            eritrea: "Eritrea",
            estonia: "Estonia",
            ethiopia: "Etiopía",
            egypt: "Egipto",
            germany: "Alemania",
            greece: "Grecia",
            georgia: "Georgia",
            zambia: "Zambia",
            israel: "Israel",
            spain: "España",
            india: "India",
            indonesia: "Indonesia",
            jordan: "Jordán",
            iran: "Irán",
            ireland: "Irlanda",
            iceland: "Islandia",
            italy: "Italia",
            "cape verde": "Cabo Verde",
            qatar: "Catar",
            Cameroon: "Camerún",
            kenya: "Kenia",
            kiribati: "Kiribati",
            colombia: "Columbia",
            "costa rica": "Costa Rica",
            cuba: "Cuba",
            "prc (people's republic of china)": "República Popular China",
            kyrgyzstan: "Kirguizstán",
            latvia: "Letonia",
            lesotho: "Lesoto",
            libya: "Libia",
            liberia: "Liberia",
            lebanon: "Líbano",
            lithuania: "Lituania",
            liechtenstein: "Liechtenstein",
            luxembourg: "Luxemburgo",
            mauritius: "Mauricio",
            mauritania: "Mauritania",
            madagascar: "Madagascar",
            macedonia: "Macedonia del Norte",
            mozambique: "Mozambique",
            morocco: "Marruecos",
            malawi: "Malawi",
            malta: "Malta",
            malaysia: "Malasia",
            mali: "Mali",
            "marshall islands": "República de las Islas Marshall",
            mexico: "México",
            mongolia: "Mongolia",
            moldova: "Moldavia",
            monaco: "Mónaco",
            nauru: "Nauru",
            nepal: "Nepal",
            netherlands: "Países Bajos",
            niger: "Níger",
            nigeria: "Nigeria",
            norway: "Noruega",
            "new zealand": "Nueva Zelanda",
            oman: "Omán",
            pakistan: "Pakistán",
            palau: "Palau",
            paraguay: "Paraguay",
            peru: "Perú",
            poland: "Polonia",
            portugal: "Portugal",
            rwanda: "Ruanda",
            romania: "Rumania",
            "saint vincent and the grenadines": "San Vicente y las Granadinas",
            "saint kitts and nevis": "San Cristóbal y Nieves",
            "saint lucia": "Santa Lucía",
            "sao tome and principe": "Santo Tomé y Príncipe",
            salvador: "El Salvador",
            samoa: "Samoa",
            "saudi arabia": "Arabia Saudita",
            swaziland: "Swazilandia",
            seychelles: "Seychelles",
            senegal: "Senegal",
            serbia: "Serbia",
            "solomon islands": "Islas Salomón",
            slovakia: "Eslovaquia",
            slovenia: "Eslovenia",
            somalia: "Somalia",
            montenegro: "Montenegro",
            switzerland: "Suiza",
            sweden: "Suecia",
            "sierra leone": "Sierra Leona",
            suriname: "Surinam",
            tajikistan: "Tayikistan",
            turkmenistan: "Turkmenistán",
            tanzania: "Tanzania",
            thailand: "Tailandia",
            togo: "Togo",
            tonga: "Tonga",
            "trinidad and tobago": "República de Trinidad y Tobago",
            tuvalu: "Tuvalu",
            tunisia: "Túnez",
            fiji: "Fiyi",
            philippines: "Filipinas",
            finland: "Finlandia",
            france: "Francia",
            chad: "Chad",
            "czech republic": "República Checa",
            chile: "Chile",
            "south africa": "Republica Sudafricana",
            croatia: "Croacia",
            uruguay: "Uruguay",
            uzbekistan: "Uzbekistán",
            "sri lanka": "Sri Lanka",
            jamaica: "Jamaica",
            japan: "Japón"
        },
        bangladesh: {
            ukraine: "ইউক্রেন",
            russia: "রাশিয়ান ফেডারেশন",
            turkey: "তুরস্ক",
            brazil: "ব্রাজিল",
            kazakhstan: "কাজাখস্তান",
            belarus: "বেলারুশ",
            andorra: "এন্ডোরা",
            "antigua and barbuda": "অ্যান্টিগুয়া ও বার্বুডা",
            armenia: "আর্মেনিয়া",
            argentina: "আর্জেন্টিনা",
            australia: "অস্ট্রেলিয়া",
            austria: "অস্ট্রিয়া",
            azerbaijan: "আজারবাইজান",
            bangladesh: "বাংলাদেশ",
            bahamas: "বাহামা",
            bahrain: "বাহরাইন",
            barbados: "বার্বাডোজ",
            belize: "বেলিজ",
            belgium: "বেলজিয়াম",
            benin: "বেনিন",
            bulgaria: "বুলগেরিয়া",
            bolivia: "বোলিভিয়া",
            botswana: "বতসোয়ানা",
            "bosnia and herzegovina": "বসনিয়া ও হার্জেগোভিনা",
            butane: "ভুটান",
            burundi: "বুরুন্ডি",
            brunei: "ব্রুনেই",
            "burkina faso": "বুর্কিনা ফাসো",
            vanuatu: "ভানুয়াতু",
            "united kingdom": "যুক্তরাজ্য",
            hungary: "হাঙ্গেরি",
            venezuela: "ভেনেজুয়েলা",
            vietnam: "ভিয়েতনাম",
            gabon: "গাবন",
            gambia: "গাম্বিয়া",
            guinea: "গিনি",
            "guinea bissau": "গিনি-বিসাউ",
            honduras: "হন্ডুরাস",
            haiti: "হাইতি",
            guatemala: "গুয়াতেমালা",
            ghana: "ঘানা",
            grenada: "গ্রেনাডা",
            denmark: "ডেনমার্ক",
            "democratic republic of the congo": "ডেমোক্রেটিক প্রজাতন্ত্র কঙ্গো",
            dominica: "ডোমিনিকা",
            "dominican republic": "ডোমিনিকান প্রজাতন্ত্র",
            djibouti: "জিবুতি",
            "equatorial guinea": "ইকুয়েটরিয়াল গিনি",
            eritrea: "ইরিত্রিয়া",
            estonia: "এস্তোনিয়া",
            ethiopia: "ইথিওপিয়া",
            egypt: "মিশর",
            germany: "জার্মানি",
            greece: "গ্রীস",
            georgia: "জর্জিয়া",
            zambia: "জাম্বিয়া",
            israel: "ইসরায়েল",
            spain: "স্পেন",
            india: "ভারত",
            indonesia: "ইন্দোনেশিয়া",
            jordan: "জর্ডন",
            iran: "ইরান",
            ireland: "আয়ারল্যান্ড",
            iceland: "আইসল্যান্ড",
            italy: "ইতালি",
            "cape verde": "কেপ ভার্দে",
            qatar: "কাতার",
            Cameroon: "ক্যামেরুন",
            kenya: "কেনিয়া",
            kiribati: "কিরিবাতি",
            colombia: "কলোম্বিয়া",
            "costa rica": "কোস্টা রিকা",
            cuba: "কিউবা",
            "prc (people's republic of china)": "প্রজাতন্ত্র গণপ্রজাতন্ত্র চীন",
            kyrgyzstan: "কিরগিজিস্তান",
            latvia: "লাতভিয়া",
            lesotho: "লেসোথো",
            libya: "লিবিয়া",
            liberia: "লাইবেরিয়া",
            lebanon: "লেবানন",
            lithuania: "লিথুয়ানিয়া",
            liechtenstein: "লিচেনস্টাইন",
            luxembourg: "লাক্সেমবার্গ",
            mauritius: "মরিশাস",
            mauritania: "মরিতানিয়া",
            madagascar: "মাদাগাস্কার",
            macedonia: "ম্যাসেডোনিয়া",
            mozambique: "মোজাম্বিক",
            morocco: "মরক্কো",
            malawi: "মালাউই",
            malta: "মাল্টা",
            malaysia: "মালয়েশিয়া",
            mali: "মালি",
            "marshall islands": "মার্শাল দ্বীপপুঞ্জ",
            mexico: "মেক্সিকো",
            mongolia: "মঙ্গোলিয়া",
            moldova: "মোল্দাভিয়া",
            monaco: "মোনাকো",
            nauru: "নাউরু",
            nepal: "নেপাল",
            netherlands: "নেদারল্যান্ডস",
            niger: "নাইজার",
            nigeria: "নাইজেরিয়া",
            norway: "নরওয়ে",
            "new zealand": "নিউজিল্যান্ড",
            oman: "ওমান",
            pakistan: "পাকিস্তান",
            palau: "পালাউ",
            paraguay: "প্যারাগুয়ে",
            peru: "পেরু",
            poland: "পোল্যান্ড",
            portugal: "পর্তুগাল",
            rwanda: "রুয়ান্ডা",
            romania: "রোমানিয়া",
            "saint vincent and the grenadines": "সেন্ট ভিনসেন্ট এবং গ্রেনাডাইনস",
            "saint kitts and nevis": "সেন্ট কিটস ও নেভিস",
            "saint lucia": "সেন্ট লুসিয়া",
            "sao tome and principe": "সাও টোমে ও প্রিন্সিপি",
            salvador: "সালভাদোর",
            samoa: "সামোয়া",
            "saudi arabia": "সৌদি আরব",
            swaziland: "সোয়াজিল্যান্ড",
            seychelles: "সিসিলস",
            senegal: "সেনেগাল",
            serbia: "সার্বিয়া",
            "solomon islands": "সলোমন দ্বীপপুঞ্জ",
            slovakia: "স্লোভাকিয়া",
            slovenia: "স্লোভেনিয়া",
            somalia: "সোমালিয়া",
            montenegro: "মন্টিনিগ্রো",
            switzerland: "সুইজারল্যান্ড",
            sweden: "সুইডেন",
            "sierra leone": "সিয়েরা লিওন",
            suriname: "সুরিনাম",
            tajikistan: "তাজিকিস্তান",
            turkmenistan: "তুর্কমেনিস্তান",
            tanzania: "তানজানিয়া",
            thailand: "থাইল্যান্ড",
            togo: "টোগো",
            tonga: "টঙ্গা",
            "trinidad and tobago": "ত্রিনিদাদ ও টোবাগো",
            tuvalu: "টুভালু",
            tunisia: "তিউনিসিয়া",
            fiji: "ফিজি",
            philippines: "ফিলিপাইন্স",
            finland: "ফিনল্যান্ড",
            france: "ফ্রান্স",
            chad: "চাদ",
            "czech republic": "চেক প্রজাতন্ত্র",
            chile: "চিলি",
            "south africa": "দক্ষিণ আফ্রিকা",
            croatia: "ক্রোয়েশিয়া",
            uruguay: "উরুগুয়ে",
            uzbekistan: "উজ্বেকিস্তান",
            "sri lanka": "শ্রীলংকা",
            jamaica: "জামাইকা",
            japan: "জাপান"
        }
    }
      , c = {
        ukraine: {
            mask: "+380",
            img: "img/country/ukraine.png",
            lang: "ukrainian"
        },
        russia: {
            mask: "+7",
            img: "img/country/russia.png"
        },
        turkey: {
            mask: "+90",
            img: "img/country/turkey.png",
            lang: "turkish"
        },
        brazil: {
            mask: "+55",
            img: "img/country/brazil.png",
            lang: "brazilian"
        },
        kazakhstan: {
            mask: "+7",
            img: "img/country/kazakhstan.png",
            lang: "kazakhstan"
        },
        belarus: {
            mask: "+375",
            img: "img/country/belarus.png"
        },
        andorra: {
            mask: "+376",
            img: "img/country/andorra.png"
        },
        "antigua and barbuda": {
            mask: "+268",
            img: "img/country/antigua-and-barbuda.png"
        },
        armenia: {
            mask: "+374",
            img: "img/country/armenia.png"
        },
        argentina: {
            mask: "+54",
            img: "img/country/argentina.png"
        },
        australia: {
            mask: "+61",
            img: "img/country/australia.png"
        },
        austria: {
            mask: "+43",
            img: "img/country/austria.png"
        },
        azerbaijan: {
            mask: "+994",
            img: "img/country/azerbaijan.png",
            lang: "azerbaijani"
        },
        bangladesh: {
            mask: "+880",
            img: "img/country/bangladesh.png"
        },
        bahamas: {
            mask: "+242",
            img: "img/country/bahamas.png"
        },
        bahrain: {
            mask: "+973",
            img: "img/country/bahrain.png"
        },
        barbados: {
            mask: "+246",
            img: "img/country/barbados.png"
        },
        belize: {
            mask: "+501",
            img: "img/country/belize.png"
        },
        belgium: {
            mask: "+32",
            img: "img/country/belgium.png"
        },
        benin: {
            mask: "+229",
            img: "img/country/benin.png"
        },
        bulgaria: {
            mask: "+359",
            img: "img/country/bulgaria.png"
        },
        bolivia: {
            mask: "+591",
            img: "img/country/bolivia.png"
        },
        botswana: {
            mask: "+267",
            img: "img/country/botswana.png"
        },
        "bosnia and herzegovina": {
            mask: "+387",
            img: "img/country/bosnia-and-herzegovina.png"
        },
        butane: {
            mask: "+975",
            img: "img/country/bhutan.png"
        },
        burundi: {
            mask: "+257",
            img: "img/country/burundi.png"
        },
        brunei: {
            mask: "+673",
            img: "img/country/brunei.png"
        },
        "burkina faso": {
            mask: "+226",
            img: "img/country/burkina-faso.png"
        },
        vanuatu: {
            mask: "+678",
            img: "img/country/vanuatu.png"
        },
        "united kingdom": {
            mask: "+44",
            img: "img/country/great-britain.png"
        },
        hungary: {
            mask: "+36",
            img: "img/country/hungary.png"
        },
        venezuela: {
            mask: "+58",
            img: "img/country/venezuela.png"
        },
        vietnam: {
            mask: "+84",
            img: "img/country/vietnam.png"
        },
        gabon: {
            mask: "+241",
            img: "img/country/gabon.png"
        },
        gambia: {
            mask: "+220",
            img: "img/country/gambia.png"
        },
        guinea: {
            mask: "+224",
            img: "img/country/guinea.png"
        },
        "guinea bissau": {
            mask: "+245",
            img: "img/country/guinea-bissau.png"
        },
        honduras: {
            mask: "+504",
            img: "img/country/honduras.png"
        },
        haiti: {
            mask: "+509",
            img: "img/country/haiti.png"
        },
        guatemala: {
            mask: "+502",
            img: "img/country/guatemala.png"
        },
        ghana: {
            mask: "+233",
            img: "img/country/ghana.png"
        },
        grenada: {
            mask: "+473",
            img: "img/country/grenada.png"
        },
        denmark: {
            mask: "+45",
            img: "img/country/denmark.png"
        },
        "democratic republic of the congo": {
            mask: "+243",
            img: "img/country/congodr.png"
        },
        dominica: {
            mask: "+767",
            img: "img/country/dominica.png"
        },
        "dominican republic": {
            mask: "+809",
            img: "img/country/dominican-republic.png"
        },
        djibouti: {
            mask: "+253",
            img: "img/country/djibouti.png"
        },
        "equatorial guinea": {
            mask: "+240",
            img: "img/country/equatorial-guinea.png"
        },
        eritrea: {
            mask: "+291",
            img: "img/country/eritrea.png"
        },
        estonia: {
            mask: "+372",
            img: "img/country/estonia.png"
        },
        ethiopia: {
            mask: "+251",
            img: "img/country/ethiopia.png"
        },
        egypt: {
            mask: "+20",
            img: "img/country/egypt.png"
        },
        germany: {
            mask: "+49",
            img: "img/country/germany.png"
        },
        greece: {
            mask: "+30",
            img: "img/country/greece.png"
        },
        georgia: {
            mask: "+995",
            img: "img/country/georgia.png"
        },
        zambia: {
            mask: "+260",
            img: "img/country/zambia.png"
        },
        israel: {
            mask: "+972",
            img: "img/country/israel.png"
        },
        spain: {
            mask: "+34",
            img: "img/country/spain.png"
        },
        india: {
            mask: "+91",
            img: "img/country/india.png",
            lang: "indian"
        },
        indonesia: {
            mask: "+62",
            img: "img/country/indonesia.png"
        },
        jordan: {
            mask: "+962",
            img: "img/country/jordan.png"
        },
        iran: {
            mask: "+98",
            img: "img/country/iran.png"
        },
        ireland: {
            mask: "+353",
            img: "img/country/ireland.png"
        },
        iceland: {
            mask: "+354",
            img: "img/country/iceland.png"
        },
        italy: {
            mask: "+39",
            img: "img/country/italy.png"
        },
        "cape verde": {
            mask: "+238",
            img: "img/country/cape-verde.png"
        },
        qatar: {
            mask: "+974",
            img: "img/country/quatar.png"
        },
        Cameroon: {
            mask: "+237",
            img: "img/country/cameroon.png"
        },
        kenya: {
            mask: "+254",
            img: "img/country/kenya.png"
        },
        kiribati: {
            mask: "+686",
            img: "img/country/kiribati.png"
        },
        colombia: {
            mask: "+57",
            img: "img/country/colombia.png"
        },
        "costa rica": {
            mask: "+506",
            img: "img/country/costa-rica.png"
        },
        cuba: {
            mask: "+53",
            img: "img/country/cuba.png"
        },
        "prc (people's republic of china)": {
            mask: "+86",
            img: "img/country/china.png"
        },
        kyrgyzstan: {
            mask: "+996",
            img: "img/country/kyrgyzstan.png"
        },
        latvia: {
            mask: "+371",
            img: "img/country/latvia.png"
        },
        lesotho: {
            mask: "+266",
            img: "img/country/lesotho.png"
        },
        libya: {
            mask: "+218",
            img: "img/country/libya.png"
        },
        liberia: {
            mask: "+231",
            img: "img/country/liberia.png"
        },
        lebanon: {
            mask: "+961",
            img: "img/country/lebanon.png"
        },
        lithuania: {
            mask: "+370",
            img: "img/country/lithuania.png"
        },
        liechtenstein: {
            mask: "+423",
            img: "img/country/liechtenstein.png"
        },
        luxembourg: {
            mask: "+352",
            img: "img/country/luxembourg.png"
        },
        mauritius: {
            mask: "+230",
            img: "img/country/mauritius.png"
        },
        mauritania: {
            mask: "+222",
            img: "img/country/mauritania.png"
        },
        madagascar: {
            mask: "+261",
            img: "img/country/madagascar.png"
        },
        macedonia: {
            mask: "+389",
            img: "img/country/macedonia.png"
        },
        mozambique: {
            mask: "+258",
            img: "img/country/mozambique.png"
        },
        morocco: {
            mask: "+212",
            img: "img/country/morocco.png"
        },
        malawi: {
            mask: "+265",
            img: "img/country/malawi.png"
        },
        malta: {
            mask: "+356",
            img: "img/country/malta.png"
        },
        malaysia: {
            mask: "+60",
            img: "img/country/malaysia.png"
        },
        mali: {
            mask: "+223",
            img: "img/country/mali.png"
        },
        "marshall islands": {
            mask: "+692",
            img: "img/country/marshall-islands.png"
        },
        mexico: {
            mask: "+52",
            img: "img/country/mexico.png",
            lang: "mexican"
        },
        mongolia: {
            mask: "+976",
            img: "img/country/mongolia.png"
        },
        moldova: {
            mask: "+373",
            img: "img/country/moldova.png"
        },
        monaco: {
            mask: "+377",
            img: "img/country/monaco.png"
        },
        nauru: {
            mask: "+674",
            img: "img/country/nauru.png"
        },
        nepal: {
            mask: "+977",
            img: "img/country/nepal.png"
        },
        netherlands: {
            mask: "+31",
            img: "img/country/netherlands.png"
        },
        niger: {
            mask: "+227",
            img: "img/country/niger.png"
        },
        nigeria: {
            mask: "+234",
            img: "img/country/nigeria.png"
        },
        norway: {
            mask: "+47",
            img: "img/country/norway.png"
        },
        "new zealand": {
            mask: "+64",
            img: "img/country/new-zealand.png"
        },
        oman: {
            mask: "+968",
            img: "img/country/oman.png"
        },
        pakistan: {
            mask: "+92",
            img: "img/country/pakistan.png"
        },
        palau: {
            mask: "+680",
            img: "img/country/palau.png"
        },
        paraguay: {
            mask: "+595",
            img: "img/country/paraguay.png"
        },
        peru: {
            mask: "+51",
            img: "img/country/peru.png",
            lang: "spanish"
        },
        poland: {
            mask: "+48",
            img: "img/country/poland.png"
        },
        portugal: {
            mask: "+351",
            img: "img/country/portugal.png"
        },
        rwanda: {
            mask: "+250",
            img: "img/country/rwanda.png"
        },
        romania: {
            mask: "+40",
            img: "img/country/romania.png"
        },
        "saint vincent and the grenadines": {
            mask: "+784",
            img: "img/country/saint-vincent-and-the-grenadines.png"
        },
        "saint kitts and nevis": {
            mask: "+869",
            img: "img/country/saint-kitts-and-nevis.png"
        },
        "saint lucia": {
            mask: "+758",
            img: "img/country/saint-lucia.png"
        },
        "sao tome and principe": {
            mask: "+239",
            img: "img/country/sao-tome-and-principe.png"
        },
        salvador: {
            mask: "+503",
            img: "img/country/salvador.png"
        },
        samoa: {
            mask: "+685",
            img: "img/country/samoa.png"
        },
        "saudi arabia": {
            mask: "+966",
            img: "img/country/saudi-arabia.png"
        },
        swaziland: {
            mask: "+268",
            img: "img/country/swaziland.png"
        },
        seychelles: {
            mask: "+248",
            img: "img/country/seychelles.png"
        },
        senegal: {
            mask: "+221",
            img: "img/country/senegal.png"
        },
        serbia: {
            mask: "+381",
            img: "img/country/serbia.png"
        },
        "solomon islands": {
            mask: "+677",
            img: "img/country/solomon-islands.png"
        },
        slovakia: {
            mask: "+421",
            img: "img/country/slovakia.png"
        },
        slovenia: {
            mask: "+386",
            img: "img/country/slovenia.png"
        },
        somalia: {
            mask: "+252",
            img: "img/country/somalia.png"
        },
        montenegro: {
            mask: "+382",
            img: "img/country/montenegro.png"
        },
        switzerland: {
            mask: "+41",
            img: "img/country/switzerland.png"
        },
        sweden: {
            mask: "+46",
            img: "img/country/sweden.png"
        },
        "sierra leone": {
            mask: "+232",
            img: "img/country/sierra-leone.png"
        },
        suriname: {
            mask: "+597",
            img: "img/country/suriname.png"
        },
        tajikistan: {
            mask: "+992",
            img: "img/country/tajikistan.png"
        },
        turkmenistan: {
            mask: "+993",
            img: "img/country/turkmenistan.png"
        },
        tanzania: {
            mask: "+255",
            img: "img/country/tanzania.png"
        },
        thailand: {
            mask: "+66",
            img: "img/country/thailand.png"
        },
        togo: {
            mask: "+228",
            img: "img/country/togo.png"
        },
        tonga: {
            mask: "+676",
            img: "img/country/tonga.png"
        },
        "trinidad and tobago": {
            mask: "+868",
            img: "img/country/trinidad-and-tobago.png"
        },
        tuvalu: {
            mask: "+688",
            img: "img/country/tuvalu.png"
        },
        tunisia: {
            mask: "+216",
            img: "img/country/tunisia.png"
        },
        fiji: {
            mask: "+679",
            img: "img/country/fiji.png"
        },
        philippines: {
            mask: "+63",
            img: "img/country/philippines.png"
        },
        finland: {
            mask: "+358",
            img: "img/country/finland.png"
        },
        france: {
            mask: "+33",
            img: "img/country/france.png"
        },
        chad: {
            mask: "+235",
            img: "img/country/chad.png"
        },
        "czech republic": {
            mask: "+420",
            img: "img/country/czechia.png"
        },
        chile: {
            mask: "+56",
            img: "img/country/chile.png",
            lang: "chilean"
        },
        "south africa": {
            mask: "+27",
            img: "img/country/republic-of-south-africa.png"
        },
        croatia: {
            mask: "+385",
            img: "img/country/croatia.png"
        },
        uruguay: {
            mask: "+598",
            img: "img/country/uruguay.png"
        },
        uzbekistan: {
            mask: "+998",
            img: "img/country/uzbekistan.png",
            lang: "uzbek"
        },
        "sri lanka": {
            mask: "+94",
            img: "img/country/sri-lanka.png"
        },
        jamaica: {
            mask: "+876",
            img: "img/country/jamaica.png"
        },
        japan: {
            mask: "+81",
            img: "img/country/japan.png"
        },
        canada: {
            mask: "+1",
            img: "img/country/canada.png",
            lang: "english"
        }
    };
    function m(a) {
        switch (a) {
        case "+380":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+7":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        case "+90":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+55":
        case "+351":
        case "+994":
            window.phonePattern = /^([0-9]{12,13})?(\+[0-9]{12,13})?$/i;
            break;
        case "+998":
            window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
            break;
        case "+51":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        case "+91":
            window.phonePattern = /^([0-9]{10,13})?(\+[0-9]{10,13})?$/i;
            break;
        case "+77":
            window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
            break;
        case "+56":
            window.phonePattern = /^([0-9]{10,11})?(\+[0-9]{10,11})?$/i;
            break;
        case "+52":
            window.phonePattern = /^([0-9]{11,13})?(\+[0-9]{11,13})?$/i;
            break;
        default:
            window.phonePattern = /^([0-9]{9,13})?(\+[0-9]{9,13})?$/i
        }
    }
    function d(a) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
        )(a)
    }
    function g(a, i) {
        if (!(a instanceof i))
            throw new TypeError("Cannot call a class as a function")
    }
    function b(a, i) {
        for (var n = 0; n < i.length; n++) {
            var e = i[n];
            e.enumerable = e.enumerable || !1,
            e.configurable = !0,
            "value"in e && (e.writable = !0),
            Object.defineProperty(a, (t = e.key,
            r = void 0,
            r = function(a, i) {
                if ("object" !== d(a) || null === a)
                    return a;
                var n = a[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var e = n.call(a, i || "default");
                    if ("object" !== d(e))
                        return e;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === i ? String : Number)(a)
            }(t, "string"),
            "symbol" === d(r) ? r : String(r)), e)
        }
        var t, r
    }
    function p(a, i, n) {
        return i && b(a.prototype, i),
        n && b(a, n),
        Object.defineProperty(a, "prototype", {
            writable: !1
        }),
        a
    }
    var h, y = window.landingConfig;
    window.links = {
        site: y.links[y.prodLink].site,
        phone: y.links[y.prodLink].phone,
        email: y.links[y.prodLink].email
    },
    window.pageState = {
        warnings: {
            rules: y.translate[y.translate.default].rules,
            inputCorrectPhone: y.translate[y.translate.default].inputCorrectPhone,
            inputCorrectEmail: y.translate[y.translate.default].inputCorrectEmail,
            inputPassword: y.translate[y.translate.default].inputPassword,
            passwordShort: y.translate[y.translate.default].passwordShort,
            passwordLong: y.translate[y.translate.default].passwordLong
        }
    },
    function(a) {
        return !!t("siteWasVisited") || !!t(a)
    }(y.oldCookieName) && (window.location.href = window.links.site + window.location.search),
    m(document.querySelector(".js--phoneInput").value),
    new (function() {
        function a() {
            g(this, a),
            this._navs = {
                email: document.getElementById("reg-btn-email"),
                phone: document.getElementById("reg-btn-tel")
            },
            this._forms = {
                email: document.getElementById("email-form"),
                phone: document.getElementById("phone-form")
            },
            this._buttons = {
                email: this._forms.email.querySelector(".submit-btn"),
                phone: this._forms.phone.querySelector(".submit-btn")
            },
            this._inputs = {
                phone: this._forms.phone.querySelector(".js--phoneInput"),
                email: this._forms.email.querySelector(".email-form__email-input"),
                password: this._forms.email.querySelector(".email-form__password-input")
            },
            this._checkboxes = {
                phone: document.getElementById("check-rules-p"),
                email: document.getElementById("check-rules-e")
            },
            this._emailPattern = /^[a-zA-Z0-9_.-]{1,99}@{1}[a-zA-Z_-]{1,}\.{1}[A-Za-z]{2,4}$/i,
            this._initNavSwitchers(),
            this._initReg(),
            this._setClassActive()
        }
        return p(a, [{
            key: "_initNavSwitchers",
            value: function() {
                var a = this;
                this._navs.email.addEventListener("click", (function() {
                    a._switchForm("email")
                }
                )),
                this._navs.phone.addEventListener("click", (function() {
                    a._switchForm("phone")
                }
                ))
            }
        }, {
            key: "_classSwitcher",
            value: function(a) {
                "phone" === a ? (this._forms.email.classList.remove("active"),
                this._navs.email.classList.remove("active"),
                this._forms.phone.classList.add("active"),
                this._navs.phone.classList.add("active")) : "email" === a && (this._forms.email.classList.add("active"),
                this._navs.email.classList.add("active"),
                this._forms.phone.classList.remove("active"),
                this._navs.phone.classList.remove("active"))
            }
        }, {
            key: "_switchForm",
            value: function(a) {
                this._classSwitcher(a)
            }
        }, {
            key: "_setClassActive",
            value: function() {
                this._classSwitcher("phone")
            }
        }, {
            key: "_checkPhone",
            value: function() {
                return !!(window.phonePattern.test(this._inputs.phone.value) && this._inputs.phone.value.length > 3) || (window.formNotif.show(window.pageState.warnings.inputCorrectPhone),
                !1)
            }
        }, {
            key: "_checkRules",
            value: function(a) {
                return !!a.checked || (window.formNotif.show(window.pageState.warnings.rules),
                !1)
            }
        }, {
            key: "_getCaptchaToken",
            value: function() {
                return new Promise((function(a) {
                    grecaptcha.enterprise.ready((function() {
                        grecaptcha.enterprise.execute(y.registrationData.captchaKey, {
                            action: "registration"
                        }).then((function(i) {
                            y.isXMLHttpRequest ? a(i) : (document.getElementById("recaptchaToken").setAttribute("value", i),
                            document.getElementById("e-recaptchaToken").setAttribute("value", i),
                            a())
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_checkEmail",
            value: function() {
                return !!this._emailPattern.test(this._inputs.email.value) || (window.formNotif.show(window.pageState.warnings.inputCorrectEmail),
                !1)
            }
        }, {
            key: "_checkPassword",
            value: function() {
                return this._inputs.password.value.length > 14 ? (this._inputs.password.focus(),
                window.formNotif.show(window.pageState.warnings.passwordLong),
                !1) : this._inputs.password.value.length < 6 ? (window.formNotif.show(window.pageState.warnings.passwordShort),
                this._inputs.password.focus(),
                !1) : !(this._inputs.password.value.length < 1) || void window.formNotif.show(window.pageState.warnings.inputPassword)
            }
        }, {
            key: "_submitForm",
            value: function(a) {
                var i = this;
                if (y.isXMLHttpRequest) {
                    var n = this;
                    this._getCaptchaToken().then((function(e) {
                        var t = n._formSendRequest(a, e);
                        i._sendRequest(t, a)
                    }
                    ))
                } else
                    y.registrationData && y.registrationData.captchaKey ? this._getCaptchaToken().then((function() {
                        r(),
                        a.submit()
                    }
                    )) : (r(),
                    a.submit())
            }
        }, {
            key: "checkForm",
            value: function(a) {
                a === this._forms.phone ? this._checkPhone() && this._checkRules(this._checkboxes.phone) && this._submitForm(this._forms.phone) : a === this._forms.email && this._checkEmail() && this._checkPassword() && this._checkRules(this._checkboxes.email) && this._submitForm(this._forms.email)
            }
        }, {
            key: "_initReg",
            value: function() {
                var a = this;
                this._buttons.phone.addEventListener("click", (function() {
                    a.checkForm(a._forms.phone)
                }
                )),
                this._buttons.email.addEventListener("click", (function() {
                    a.checkForm(a._forms.email)
                }
                )),
                this._inputs.phone.addEventListener("keydown", (function(i) {
                    13 === i.which && a.checkForm(a._forms.phone)
                }
                )),
                this._inputs.email.addEventListener("keydown", (function(i) {
                    13 === i.which && a._inputs.password.focus()
                }
                )),
                this._inputs.password.addEventListener("keydown", (function(i) {
                    13 === i.which && a.checkForm(a._forms.email)
                }
                ))
            }
        }]),
        a
    }()),
    new (function() {
        function a() {
            g(this, a),
            this._siteLink = window.links.site,
            this._hash = window.location.search,
            this._reddirectLinks = document.querySelectorAll(".redirectlink"),
            this._formEmail = document.getElementById("email-form"),
            this._formPhone = document.getElementById("phone-form"),
            this._initLinks(),
            this._initForms()
        }
        return p(a, [{
            key: "_initLinks",
            value: function() {
                for (var a = 0; a < this._reddirectLinks.length; a++)
                    this._reddirectLinks[a].addEventListener("click", (function() {
                        r()
                    }
                    )),
                    this._reddirectLinks[a].href = this._siteLink + this._hash
            }
        }, {
            key: "_initForms",
            value: function() {
                this._formEmail.action = window.links.email + this._hash,
                this._formPhone.action = window.links.phone + this._hash
            }
        }]),
        a
    }()),
    h = "spa-ua-license" === window.landingConfig.prodLink ? window.landingConfig.forms.phone.list.filter((function(a) {
        return "ukraine" === a
    }
    )) : window.landingConfig.forms.phone.list.filter((function(a) {
        return "ukraine" !== a
    }
    ));
    var k, v = window.landingConfig.translate.default, f = [], w = document.querySelector(".js--phoneInput");
    function z(a, i) {
        f.splice(0, f.length),
        h.forEach((function(i) {
            var n = {
                country: u[a][i],
                mask: c[i].mask,
                img: c[i].img,
                lang: c[i].lang
            };
            f.push(n)
        }
        )),
        f.forEach((function(n, e, t) {
            (i === n.lang && void 0 !== i || a === n.lang) && t.splice(0, 0, t.splice(e, 1)[0])
        }
        )),
        document.querySelector(".select-phone__placeholder-logo").src = f[0].img,
        document.querySelector(".select-phone__placeholder-input").value = f[0].mask,
        w.setAttribute("data-number", "".concat(w.value)),
        m(w.getAttribute("data-number")),
        setTimeout((function() {
            S(30)
        }
        ))
    }
    z(v),
    document.querySelector(".select-phone__placeholder-logo").src = f[0].img,
    document.querySelector(".select-phone__placeholder-input").value = f[0].mask;
    function S(a) {
        k = w.getAttribute("data-number").length + 1;
        for (var i = w.getAttribute("data-number"), n = !1, e = 0; e < a; e++)
            if (i += 0,
            window.phonePattern.test(Number(i)) || !1 !== n) {
                if (!window.phonePattern.test(Number(i + 1))) {
                    w.setAttribute("maxLength", "".concat(k));
                    break
                }
                n = !0,
                k++
            } else
                k++
    }
    function _(a, i) {
        if (a.selectionStart) {
            var n = a.selectionStart;
            a.value = a.value.slice(0, n) + i + a.value.slice(a.selectionEnd),
            a.selectionStart = a.selectionEnd = n + i.length
        } else if (void 0 !== document.selection) {
            var e = document.selection.createRange();
            e.text = i,
            e.collapse(!1),
            e.select()
        }
    }
    document.addEventListener("click", (function(a) {
        a.target.classList.contains("js--phone") && 1 !== f.length && function(a) {
            var i = "true" === a.dataset.open
              , n = document.querySelector(".select-phone__placeholder-input");
            document.querySelector(".select-phone__list").style.display = "block";
            var e = a.querySelector(".select-phone__list");
            e.innerHTML = "",
            f.forEach((function(a) {
                var i = document.createElement("li");
                i.className = "select-phone__item",
                i.dataset.value = a.mask,
                i.dataset.srcs = a.img,
                i.innerHTML = '\n      <img class="select-phone__item-logo" src="'.concat(a.img, '">\n      <span class="select-phone__item-text">').concat(a.mask, " ").concat(a.country, "</span>\n    "),
                a.mask === n.value && i.classList.add("select-phone__item_active"),
                e.appendChild(i)
            }
            )),
            e.addEventListener("click", (function(i) {
                i.target.classList.contains("select-phone__item") && (a.querySelector(".select-phone__placeholder-logo").setAttribute("src", i.target.dataset.srcs),
                a.querySelector(".select-phone__placeholder-input").value = i.target.dataset.value,
                a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none",
                m(i.target.dataset.value),
                w.setAttribute("data-number", "".concat(i.target.dataset.value)),
                w.focus())
            }
            )),
            a.querySelector(".select-phone__placeholder-input").addEventListener("focus", (function() {
                a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none"
            }
            )),
            document.addEventListener("click", (function(i) {
                a.contains(i.target) || (a.dataset.open = !1,
                document.querySelector(".select-phone__list").style.display = "none")
            }
            )),
            a.dataset.open = !i
        }(a.target.parentElement.parentElement),
        setTimeout((function() {
            S(30)
        }
        ))
    }
    )),
    function() {
        function a(a, i) {
            i || (i = window.location.href),
            a = a.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(i);
            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }
        document.getElementById("lang").value = y.translate[y.translate.default].lang,
        document.getElementById("project").value = y.registrationData && y.registrationData.project ? y.registrationData.project : a("project"),
        document.getElementById("host").value = y.registrationData ? window.location.host : a("host"),
        document.getElementById("st").value = a("st"),
        document.getElementById("s1").value = a("s1"),
        document.getElementById("s2").value = a("s2"),
        document.getElementById("s3").value = a("s3"),
        document.getElementById("s4").value = a("s4"),
        document.getElementById("s5").value = a("s5"),
        document.getElementById("pc").value = a("pc"),
        document.getElementById("form_email").value = a("form_email"),
        document.getElementById("form_phone").value = a("form_phone"),
        document.getElementById("form_key").value = a("form_key"),
        document.getElementById("e-lang").value = y.translate[y.translate.default].lang,
        document.getElementById("e-project").value = y.registrationData && y.registrationData.project ? y.registrationData.project : a("project"),
        document.getElementById("e-host").value = y.registrationData ? window.location.host : a("host"),
        document.getElementById("e-st").value = a("st"),
        document.getElementById("e-s1").value = a("s1"),
        document.getElementById("e-s2").value = a("s2"),
        document.getElementById("e-s3").value = a("s3"),
        document.getElementById("e-s4").value = a("s4"),
        document.getElementById("e-s5").value = a("s5"),
        document.getElementById("e-pc").value = a("pc"),
        document.getElementById("e-form_email").value = a("form_email"),
        document.getElementById("e-form_phone").value = a("form_phone"),
        document.getElementById("e-form_key").value = a("form_key")
    }(),
    y.forms.phone.list.length <= 1 && document.querySelector(".select-phone").classList.add("no-list-phone"),
    w && (w.setAttribute("data-number", "".concat(w.value)),
    m(w.getAttribute("data-number")),
    setTimeout((function() {
        S(30)
    }
    ))),
    w.addEventListener("keypress", (function(a) {
        (a.keyCode < 48 || a.keyCode > 58) && (a.returnValue = !1)
    }
    )),
    w.addEventListener("input", (function() {
        var a = this.getAttribute("data-number");
        this.value = (a + this.value.slice(a.length)).replace(/[^+\d]/g, "")
    }
    )),
    w.addEventListener("paste", (function(a) {
        for (var i = (a.clipboardData || window.clipboardData).getData("text").split(" ").join(""), n = "", e = 0; e < i.length; e++)
            isNaN(+i[e]) || (n += i[e]);
        w.getAttribute("maxlength") - w.value.length < w.getAttribute("maxlength") && (n = n.substr(0, w.getAttribute("maxlength") - w.value.length)),
        i && w.getAttribute("maxlength") - w.value.length < w.getAttribute("maxlength") ? (a.preventDefault(),
        _(this, n)) : _(this, "")
    }
    ));
    var B, L = {
        russian: {
            UAH: "Украинская гривна",
            RUB: "Российский рубль",
            EUR: "Евро",
            BRL: "Бразильский реал",
            TRY: "Турецкая лира",
            INR: "Индийская рупия",
            PLN: "Польский злотый",
            UZS: "Узбекский сум",
            BGN: "Болгарский лев",
            MDL: "Молдавский лей",
            AZN: "Азербайджанский манат",
            IDR: "Индонезийская рупия",
            COP: "Колумбийское песо",
            ARS: "Аргентинское песо",
            KZT: "Казахстанский тенге",
            USD: "Доллар США",
            MXN: "Mexican Peso",
            CAD: "Канадский доллар",
            CLP: "Чилийское песо",
            PEN: "Перуанский соль"
        },
        english: {
            EUR: "Euro",
            RUB: "Russian Ruble",
            UAH: "Ukrainian Hryvnya",
            BRL: "Brazilian real",
            TRY: "Turkish lira",
            INR: "Indian rupiah",
            PLN: "Polish złoty",
            UZS: "Uzbekistani soʻm",
            BGN: "Bulgarian lev",
            MDL: "Moldovan leu",
            AZN: "Azerbaijani manat",
            IDR: "Indonesian rupiah",
            COP: "Colombian peso",
            ARS: "Argentine peso",
            KZT: "Kazakh Tenge",
            USD: "US Dollar",
            CAD: "Canadian Dollar",
            MXN: "Mexican Peso",
            CLP: "Chilean peso",
            PEN: "Peruvian sol"
        },
        azerbaijani: {
            EUR: "Avro",
            RUB: "Rus rublu",
            UAH: "Ukrayna qrivnası",
            BRL: "Braziliya realı",
            TRY: "Türk lirəsi",
            INR: "Hindistan rupisi",
            PLN: "Polşa zlotı",
            UZS: "Özbək sumu",
            BGN: "Bolqar levi",
            MDL: "Moldova leyi",
            AZN: "Azərbaycan manatı",
            IDR: "İndoneziya rupisi",
            COP: "Kolumbiya pesosu",
            ARS: "Argentina pesosu",
            KZT: "Qazaxstan təngəsi",
            USD: "ABŞ dolları",
            MXN: "Meksika Pesosu",
            CAD: "Kanada Dolları",
            CLP: "Çili pesosu",
            PEN: "Peru solu"
        },
        portuguese: {
            EUR: "Euro",
            RUB: "Rublo Russo",
            UAH: "Grívnia Ucraniana",
            BRL: "Reais",
            TRY: "Lira Turca",
            INR: "Rupia indiana",
            PLN: "Zloty polonês",
            UZS: "Som uzbeque",
            BGN: "Lev búlgaro",
            MDL: "Leu moldávio",
            AZN: "Manat azeri do azerbaijão",
            IDR: "Rúpia Indonésia",
            COP: "Peso Colombiano",
            ARS: "Peso Argentino",
            KZT: "Tenge Cazaque",
            USD: "Dólar Americano",
            MXN: "Peso Mexicano",
            CAD: "Dólar Canadense",
            CLP: "Peso Chileno",
            PEN: "Sol peruano"
        },
        brazilian: {
            EUR: "Euro",
            RUB: "Rublo Russo",
            UAH: "Grívnia Ucraniana",
            BRL: "Reais",
            TRY: "Lira Turca",
            INR: "Rupia indiana",
            PLN: "Zloty polonês",
            UZS: "Som uzbeque",
            BGN: "Lev búlgaro",
            MDL: "Leu moldávio",
            AZN: "Manat azeri do azerbaijão",
            IDR: "Rúpia Indonésia",
            COP: "Peso Colombiano",
            ARS: "Peso Argentino",
            KZT: "Tenge Cazaque",
            USD: "Dólar Americano",
            MXN: "Mexican Peso",
            CAD: "Canadian Dollar",
            CLP: "Chilean Peso",
            PEN: "Sol"
        },
        ukrainian: {
            EUR: "Євро",
            RUB: "Російський рубль",
            UAH: "Українська гривня",
            BRL: "Бразильський реал",
            TRY: "Турецька ліра",
            INR: "Індійська рупія",
            PLN: "Польський злотий",
            UZS: "Узбецький сум",
            BGN: "Болгарський лев",
            MDL: "Молдавський лей",
            AZN: "Азербайджанський манат",
            IDR: "Індонезійська рупія",
            COP: "Колумбійське песо",
            ARS: "Аргентинське песо",
            KZT: "Казахстанський теньге",
            USD: "Долар США",
            MXN: "Mexican Peso",
            CAD: "Канадський долар",
            CLP: "Чилійський песо",
            PEN: "Перуанський соль"
        },
        "kazakh-russian": {
            UAH: "Украинская гривна",
            RUB: "Российский рубль",
            EUR: "Евро",
            BRL: "Бразильский реал",
            TRY: "Турецкая лира",
            INR: "Индийская рупия",
            PLN: "Польский злотый",
            UZS: "Узбекский сум",
            BGN: "Болгарский лев",
            MDL: "Молдавский лей",
            AZN: "Азербайджанский манат",
            IDR: "Индонезийская рупия",
            COP: "Колумбийское песо",
            ARS: "Аргентинское песо",
            KZT: "Казахстанский тенге",
            USD: "Доллар США",
            MXN: "Мексиканское песо",
            CAD: "Канадский доллар",
            CLP: "Чилийский песо",
            PEN: "Перуанский соль"
        },
        kazakh: {
            EUR: "Еуро",
            RUB: "Ресей рублі",
            UAH: "Украин гривнасы",
            BRL: "Бразилия реалы",
            TRY: "Түрік лирасы",
            INR: "Үнді рупиясы",
            PLN: "Поляк злотыйы",
            UZS: "Өзбек сомы",
            BGN: "Болгария леві",
            MDL: "Молдавия леві",
            AZN: "Әзірбайжан манаты",
            IDR: "Индонезия рупиясы",
            COP: "Колумбия песосы",
            ARS: "Аргентиналық песо",
            KZT: "Қазақстан теңгесі",
            USD: "АҚШ доллары",
            MXN: "Мексика песосы",
            CAD: "Канадалық доллар",
            CLP: "Чили песо",
            PEN: "Перу солі"
        },
        uzbek: {
            UZS: "O‘zbek so‘mi",
            EUR: "Yevro",
            RUB: "Rossiya rubli",
            UAH: "Ukraina grivnasi",
            BRL: "Braziliya reali",
            TRY: "Turkiya lirasi",
            INR: "Hind rupiysi",
            PLN: "Polsha zlotiysi",
            BGN: "Bolgariya levi",
            MDL: "Moldaviya leyi",
            AZN: "Ozarbayjon manati",
            IDR: "Indoneziya rupiysi",
            COP: "Kolumbiya pesosi",
            ARS: "Argentina pesosi",
            KZT: "Qozog‘iston tengesi",
            USD: "AQSh dollari",
            CAD: "Kanada dollari",
            MXN: "Meksika pesosi",
            CLP: "Chili pesosi",
            PEN: "Peru soli"
        },
        turkish: {
            EUR: "Euro",
            RUB: "Rus rublesi",
            UAH: "Ukrayna Grivnası",
            BRL: "Brezilya reali",
            TRY: "Türk lirası",
            INR: "Indian Rupiah",
            PLN: "Polonya Zlotisi",
            UZS: "Özbekistan Somu",
            BGN: "Bulgar Levası",
            MDL: "Moldova Leyi",
            AZN: "Azerbaycan Manatı",
            IDR: "Endonezya Rupiahı",
            COP: "Kolombiya pesosu",
            ARS: "Arjantin pesosu",
            KZT: "Kazak Tengesi",
            USD: "ABD doları",
            MXN: "Meksika Pesosu",
            CAD: "Kanada Doları",
            CLP: "Şili pesosu",
            PEN: "Peru solü"
        },
        chilean: {
            CLP: "Peso Chileno",
            UAH: "Grivna ucraniana",
            RUB: "Rublo ruso",
            PEN: "Sol",
            TRY: "Lira turca",
            BRL: "Real brasileño",
            PLN: "Złoty polaco",
            INR: "Rupia india",
            UZS: "Sum uzbekistaní",
            BGN: "Lev búlgaro",
            MDL: "Leu moldavo",
            AZN: "Manat azerbaiyano",
            IDR: "Rupia indonesia",
            COP: "Peso colombiano",
            ARS: "Peso argentino",
            KZT: "Tenge kazajo",
            USD: "Dólar estadounidense",
            EUR: "Euro",
            MXN: "Mexican Peso",
            CAD: "Canadian Dollar"
        },
        spanish: {
            PEN: "Sol peruano",
            UAH: "Hryvnya Ucraniano",
            RUB: "Rublo ruso",
            TRY: "Lira turca",
            BRL: "Reales brasileños",
            PLN: "Zloty polaco",
            INR: "Rupia india",
            UZS: "Suma uzbeca",
            BGN: "León búlgaro",
            MDL: "Leu moldavo",
            AZN: "Manat azerbaiyano",
            IDR: "Rupia indonesia",
            COP: "Pesos colombianos",
            ARS: "Pesos argentinos",
            KZT: "Tenge Kazajo",
            USD: "Dólar estadounidense",
            EUR: "Euro",
            MXN: "Peso mexicano",
            CAD: "Dolar canadiense",
            CLP: "Peso Chileno"
        },
        peru: {
            PEN: "Sol peruano",
            UAH: "Hryvnya Ucraniano",
            RUB: "Rublo ruso",
            TRY: "Lira turca",
            BRL: "Reales brasileños",
            PLN: "Zloty polaco",
            INR: "Rupia india",
            UZS: "Suma uzbeca",
            BGN: "León búlgaro",
            MDL: "Leu moldavo",
            AZN: "Manat azerbaiyano",
            IDR: "Rupia indonesia",
            COP: "Pesos colombianos",
            ARS: "Pesos argentinos",
            KZT: "Tenge Kazajo",
            USD: "Dólar estadounidense",
            EUR: "Euro",
            MXN: "Peso mexicano",
            CAD: "Dolar canadiense",
            CLP: "Peso Chileno"
        },
        indian: {
            EUR: "Euro",
            RUB: "Russian Ruble",
            UAH: "Ukrainian Hryvnya",
            BRL: "Brazilian real",
            TRY: "Turkish lira",
            INR: "Indian rupiah",
            PLN: "Polish złoty",
            UZS: "Uzbekistani soʻm",
            BGN: "Bulgarian lev",
            MDL: "Moldovan leu",
            AZN: "Azerbaijani manat",
            IDR: "Indonesian rupiah",
            COP: "Colombian peso",
            ARS: "Argentine peso",
            KZT: "Kazakh Tenge",
            USD: "US Dollar",
            CAD: "Canadian Dollar",
            MXN: "Mexican Peso",
            CLP: "Chilean Peso",
            PEN: "Peruvian sol"
        },
        hindi: {
            UAH: "यूक्रेनी रिव्निया",
            RUB: "रूसी रूबल",
            TRY: "तुर्की लीरा",
            BRL: "ब्राज़ीली रियाल",
            PLN: "पोलिश ज़्लॉटी",
            INR: "भारतीय रुपया",
            UZS: "उज़्बेकिस्तानी सोम",
            BGN: "बुल्गारिया लेव",
            MDL: "मॉल्डोवाई लेउ",
            AZN: "अज़रबैजानी मनात",
            IDR: "इंडोनेशियाई रुपिया",
            COP: "कोलम्बियाई पेसो",
            ARS: "अर्जेंटीना पेसो",
            KZT: "कज़ाख तेंगे",
            USD: "अमेरिकी डॉलर",
            EUR: "यूरो",
            CAD: "कैनेडियन डॉलर",
            MXN: "मैक्सिकन पेसो",
            CLP: "चिली पेसो",
            PEN: "पेरू सोल"
        },
        bangladesh: {
            UAH: "ইউক্রেনীয় রিভনিয়া",
            RUB: "রাশিয়ান রুবেল",
            EUR: "ইউরো",
            BRL: "ব্রাজিলিয়ান রিয়াল",
            TRY: "তুর্কি লিরা",
            INR: "ইন্দোনেশিয়ান রুপিয়া",
            PLN: "পোলিশ জ্লোটি",
            UZS: "উজবেকিস্তানি সো'ম",
            BGN: "বুলগেরিয়ান লেভ",
            MDL: "মোলডোভান লিউ",
            AZN: "আজারবাইজানীয় মানাত",
            IDR: "ইন্দোনেশিয়ান রুপিয়া",
            COP: "কলম্বিয়ান পেসো",
            ARS: "আর্জেন্টিনা পেসো",
            KZT: "কাজাখ তেঙ্গে",
            USD: "আমেরিকান ডলার",
            MXN: "মেক্সিকান পেসো",
            BDT: "টাকা",
            CLP: "পেসো চিলেনো",
            PEN: "পেরুভিয়ান লবণ",
            CAD: "কানাডার ডলার"
        }
    }, R = {
        CLP: {
            icon: "icon-usd",
            abbreviation: "CLP"
        },
        UAH: {
            icon: "icon-uah",
            abbreviation: "UAH"
        },
        RUB: {
            icon: "icon-rub",
            abbreviation: "RUB"
        },
        EUR: {
            icon: "icon-eur",
            abbreviation: "EUR"
        },
        BRL: {
            icon: "icon-brl",
            abbreviation: "BRL"
        },
        TRY: {
            icon: "icon-try",
            abbreviation: "TRY"
        },
        INR: {
            icon: "icon-inr",
            abbreviation: "INR"
        },
        PLN: {
            icon: "icon-pln",
            abbreviation: "PLN"
        },
        UZS: {
            icon: "icon-uzs",
            abbreviation: "UZS"
        },
        BGN: {
            icon: "icon-bgn",
            abbreviation: "BGN"
        },
        MDL: {
            icon: "icon-mdl",
            abbreviation: "MDL"
        },
        AZN: {
            icon: "icon-azn",
            abbreviation: "AZN"
        },
        IDR: {
            icon: "icon-idr",
            abbreviation: "IDR"
        },
        COP: {
            icon: "icon-cop",
            abbreviation: "COP"
        },
        ARS: {
            icon: "icon-ars",
            abbreviation: "ARS"
        },
        KZT: {
            icon: "icon-kzt",
            abbreviation: "KZT"
        },
        USD: {
            icon: "icon-usd",
            abbreviation: "USD"
        },
        PEN: {
            icon: "icon-sol",
            abbreviation: "PEN"
        },
        MXN: {
            icon: "icon-usd",
            abbreviation: "MXN"
        },
        CAD: {
            icon: "icon-usd",
            abbreviation: "CAD"
        },
        BDT: {
            icon: "icon-bdt",
            abbreviation: "BDT"
        }
    };
    B = "spa-ua-license" === window.landingConfig.prodLink ? window.landingConfig.forms.currency.list.filter((function(a) {
        return "UAH" === a
    }
    )) : window.landingConfig.forms.currency.list.filter((function(a) {
        return "UAH" !== a
    }
    ));
    var P = window.landingConfig.translate.default
      , T = [];
    function C(a, i) {
        var n = document.querySelectorAll(".select-currency__placeholder .select-currency__icon > i")
          , e = document.querySelectorAll(".select-currency__placeholder .select-currency__name")
          , t = document.querySelectorAll(".select-currency__placeholder .select-currency__text")
          , r = document.querySelectorAll(".select-currency__default-input");
        T.splice(0, T.length),
        B.forEach((function(i) {
            var n = {
                title: L[a][i],
                icon: R[i].icon,
                abbreviation: R[i].abbreviation,
                lang: R[i].lang
            };
            T.push(n)
        }
        )),
        T.forEach((function(e, t, r) {
            if (i === e.lang && void 0 !== i) {
                for (var o = 0; o < n.length; o++)
                    n[o].removeAttribute("class");
                r.splice(0, 0, r.splice(t, 1)[0])
            } else if (a === e.lang) {
                for (var s = 0; s < n.length; s++)
                    n[s].removeAttribute("class");
                r.splice(0, 0, r.splice(t, 1)[0])
            }
        }
        ));
        for (var o = 0; o < n.length; o++)
            n[o].classList.add(T[0].icon);
        for (var s = 0; s < e.length; s++)
            e[s].innerText = T[0].abbreviation,
            r[s].value = T[0].abbreviation;
        for (var l = 0; l < t.length; l++)
            t[l].innerText = T[0].title
    }
    C(P);
    for (var A = document.querySelectorAll(".select-currency__icon-font"), M = 0; M < A.length; M++)
        A[M].classList.add(T[0].icon);
    for (var E = document.querySelectorAll(".select-currency__placeholder .select-currency__name"), N = 0; N < E.length; N++)
        E[N].innerText = T[0].abbreviation;
    for (var j = document.querySelectorAll(".select-currency__default-input"), q = 0; q < E.length; q++)
        j[q].value = T[0].abbreviation;
    document.addEventListener("click", (function(a) {
        var i, n;
        a.target.classList.contains("js--currency") && (i = a.target.parentElement.parentElement,
        "block" !== (n = i.querySelector(".select-currency__list")).style.display ? (n.style.display = "block",
        n.innerHTML = "",
        T.forEach((function(a) {
            var i = document.createElement("li");
            i.className = "select-currency__item",
            i.dataset.value = a.abbreviation,
            i.dataset.icon = a.icon,
            i.dataset.abbreviation = a.abbreviation,
            i.dataset.title = a.title,
            i.innerHTML = '\n      <div class="select-currency__icon">\n        <i class="'.concat(a.icon, '"></i>\n      </div>\n      <div class="select-currency__name">').concat(a.abbreviation, '</div>\n      <div class="select-currency__text">').concat(a.title, "</div>\n    "),
            n.appendChild(i)
        }
        )),
        n.addEventListener("click", (function(a) {
            a.target.classList.contains("select-currency__item") && (i.querySelector(".select-currency__default-input").value = a.target.dataset.abbreviation,
            i.querySelector(".select-currency__placeholder .select-currency__icon").innerHTML = '<i class="'.concat(a.target.dataset.icon, '"></i>'),
            i.querySelector(".select-currency__placeholder .select-currency__name").innerText = a.target.dataset.abbreviation,
            i.querySelector(".select-currency__placeholder .select-currency__text").innerText = a.target.dataset.title,
            n.style.display = "none")
        }
        )),
        document.addEventListener("click", (function(a) {
            i.contains(a.target) || (n.style.display = "none")
        }
        ))) : n.style.display = "none")
    }
    )),
    window.translate = landingConfig.translate,
    window.currency = landingConfig.forms.currency;
    !function() {
        var a = document.querySelector(".header__dropdown")
          , i = document.querySelectorAll(".header__dropdown-list .header__dropdown-link")
          , n = document.querySelector("body");
        a.onclick = function() {
            a.classList.toggle("header__dropdown_active")
        }
        ;
        for (var e = 0; e < i.length; e++)
            i[e].addEventListener("click", (function() {
                var a, i, e;
                n.setAttribute("data-lang", this.dataset.lang),
                n.removeAttribute("class"),
                "russian" !== this.dataset.lang && "kazakh" !== this.dataset.lang || n.classList.add("kazakhstan"),
                a = this.dataset.lang,
                i = n.className,
                e = {
                    mainTitleFirst: document.querySelector(".main__titles > .title_first"),
                    mainTitleSecond: document.querySelector(".main__titles > .title_second"),
                    bonusFirstTitle: document.querySelector(".main__achievements-bonus .lights-content__title"),
                    bonusFirstValue: document.querySelector(".main__achievements-bonus .lights-content__value"),
                    bonusFirstSubtitle: document.querySelector(".main__achievements-bonus .lights-content__subtitle"),
                    bonusSecondTitle: document.querySelector(".main__achievements-spin .lights-content__title"),
                    bonusSecondValue: document.querySelector(".main__achievements-spin .lights-content__value"),
                    bonusSecondSubtitle: document.querySelector(".main__achievements-spin .lights-content__subtitle"),
                    modalTitle: document.querySelector(".modal .title__subheader h2"),
                    modalSubtitle: document.querySelector(".modal .title__subheader h3"),
                    tabsButtonTel: document.querySelector("#reg-btn-tel .title"),
                    tabsButtonEmail: document.querySelector("#reg-btn-email .title"),
                    phoneTitle: document.querySelector(".phone-form__header"),
                    buttonRegistration: document.querySelectorAll(".submit-btn"),
                    alreadyRegistered: document.querySelectorAll(".alredy-registred"),
                    signInLink: document.querySelectorAll(".forms__signin-link"),
                    checkboxesRules: document.querySelectorAll(".checkbox__item_rules .checkbox__text > span"),
                    checkboxesRulesLink: document.querySelectorAll(".checkbox__item_rules .checkbox__text-link"),
                    checkboxesSubscription: document.querySelectorAll(".checkbox__item_sub .checkbox__text"),
                    inputPlaceholderEmail: document.querySelector(".email-form__email-input"),
                    inputPlaceholderPassword: document.querySelector(".email-form__password-input"),
                    inputLang: document.querySelectorAll('input[name="lang"]')
                },
                window.pageState = {
                    warnings: {
                        rules: landingConfig.translate[a].rules,
                        inputCorrectPhone: landingConfig.translate[a].inputCorrectPhone,
                        inputCorrectEmail: landingConfig.translate[a].inputCorrectEmail,
                        inputPassword: landingConfig.translate[a].inputPassword,
                        passwordShort: landingConfig.translate[a].passwordShort,
                        passwordLong: landingConfig.translate[a].passwordLong
                    }
                },
                document.title = window.translate[a].headTitle,
                e.mainTitleFirst.innerText = window.translate[a].mainTitleFirst,
                e.mainTitleSecond.innerText = window.translate[a].mainTitleSecond,
                e.bonusFirstValue.innerText = window.translate[a].bonusFirstValue,
                e.bonusFirstSubtitle.innerText = window.translate[a].bonusFirstSubtitle,
                e.bonusSecondTitle.innerText = window.translate[a].bonusSecondTitle,
                e.bonusSecondValue.innerText = window.translate[a].bonusSecondValue,
                e.bonusSecondSubtitle.innerText = window.translate[a].bonusSecondSubtitle,
                e.modalTitle.innerText = window.translate[a].modalTitle,
                e.modalSubtitle.innerText = window.translate[a].modalSubtitle,
                e.tabsButtonTel.innerText = window.translate[a].tabsButtonTel,
                e.tabsButtonEmail.innerText = window.translate[a].tabsButtonEmail,
                e.phoneTitle.innerText = window.translate[a].phoneTitle,
                e.buttonRegistration.forEach((function(i) {
                    i.innerText = window.translate[a].buttonRegistration
                }
                )),
                e.alreadyRegistered.forEach((function(i) {
                    i.innerText = window.translate[a].alreadyRegistered
                }
                )),
                e.signInLink.forEach((function(i) {
                    i.innerText = window.translate[a].signInLink
                }
                )),
                e.checkboxesRules.forEach((function(i) {
                    i.innerText = window.translate[a].checkboxesRules
                }
                )),
                e.checkboxesRulesLink.forEach((function(i) {
                    i.innerText = window.translate[a].checkboxesRulesLink
                }
                )),
                e.checkboxesSubscription.forEach((function(i) {
                    i.innerText = window.translate[a].checkboxesSubscription
                }
                )),
                e.inputLang.forEach((function(i) {
                    i.value = window.translate[a].lang
                }
                )),
                document.querySelector(".header__dropdown img").src = "img/header/lang/".concat(a, ".png"),
                document.querySelector(".header__dropdown img").alt = a,
                z(a, i),
                C(a, i)
            }
            ))
    }();
    n(0),
    n(1)
}
, function(a, i) {}
]);
