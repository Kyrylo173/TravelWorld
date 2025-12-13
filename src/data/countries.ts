import { Country } from '../../types';

export const countries: Country[] = [
  {
    id: 'italy',
    name: 'Italy',
    nameUa: 'Італія',
    flag: '🇮🇹',
    description: 'Італія - країна з багатою історією, неймовірною архітектурою, чудовою кухнею та мистецтвом. Від стародавнього Риму до каналів Венеції, Італія пропонує незабутні враження для кожного мандрівника.',
    capital: 'Рим',
    language: 'Італійська',
    currency: 'Євро (€)',
    cities: [
      {
        id: 'rome',
        name: 'Rome',
        nameUa: 'Рим',
        description: 'Вічне місто Рим - столиця Італії та серце стародавньої Римської імперії. Тут кожен камінь дихає історією: величний Колізей, Римський форум, фонтан Треві та Ватикан. Рим поєднує античні руїни з бароковими церквами та сучасним життям.',
        image: 'https://images.unsplash.com/photo-1668882565110-317edcfa0ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFseSUyMGNvbG9zc2V1bSUyMHJvbWV8ZW58MXx8fHwxNzY1MjA3MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Колізей - амфітеатр, що вміщував 50,000 глядачів',
          'Ватикан - найменша країна світу з Сікстинською капелою',
          'Фонтан Треві - найвідоміший фонтан у світі',
          'Пантеон - найкраще збережений римський храм',
          'Іспанські сходи - 138 сходинок барокової архітектури'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '3-4 дні'
      },
      {
        id: 'venice',
        name: 'Venice',
        nameUa: 'Венеція',
        description: 'Романтична Венеція - унікальне місто на воді, побудоване на 118 островах. Славиться своїми каналами, гондолами, мостами та річним карнавалом. Площа Святого Марка, Дорсодуро та Мурано створюють магічну атмосферу цього міста.',
        image: 'https://images.unsplash.com/photo-1643444313954-fe3a6a8b835d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW5pY2UlMjBjYW5hbHMlMjBnb25kb2xhfGVufDF8fHx8MTc2NTE5NTE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Площа Святого Марка з Базилікою',
          'Гранд-канал - головна водна артерія міста',
          'Міст Ріальто - найстаріший міст через Гранд-канал',
          'Острів Мурано - центр скловиробництва',
          'Палац Дожів - готичний шедевр XIV століття'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '2-3 дні'
      },
      {
        id: 'florence',
        name: 'Florence',
        nameUa: 'Флоренція',
        description: 'Флоренція - колиска Ренесансу та батьківщина Мікеланджело, Леонардо да Вінчі та Данте. Місто вражає галереями мистецтв, собором Дуомо з його величезним куполом, мостом Понте-Веккьо та палацами родини Медічі.',
        image: 'https://images.unsplash.com/photo-1694765368961-2d142bed8154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yZW5jZSUyMGNhdGhlZHJhbCUyMGR1b21vfGVufDF8fHx8MTc2NTI5MTAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Собор Санта-Марія-дель-Фьоре (Дуомо)',
          'Галерея Уффіці - одна з найвідоміших галерей світу',
          'Понте-Веккьо - середньовічний міст з крамницями',
          'Статуя Давіда Мікеланджело в Академії',
          'Площа Синьйорії та Палаццо Веккьо'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '2-3 дні'
      }
    ]
  },
  {
    id: 'france',
    name: 'France',
    nameUa: 'Франція',
    flag: '🇫🇷',
    description: 'Франція - країна моди, мистецтва, вишуканої кухні та вина. Від романтичного Парижа до сонячної Рів\'єри, від замків Луари до Альп - Франція пропонує різноманітні враження для мандрівників.',
    capital: 'Париж',
    language: 'Французька',
    currency: 'Євро (€)',
    cities: [
      {
        id: 'paris',
        name: 'Paris',
        nameUa: 'Париж',
        description: 'Місто світла, романтики та мистецтва. Париж вражає Ейфелевою вежею, Лувром, Нотр-Дамом та Монмартром. Прогулянки по Єлисейських полях, круасани в затишних кафе та вечори на березі Сени створюють неповторну атмосферу.',
        image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NTIxMzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Ейфелева вежа - символ Парижа висотою 330 метрів',
          'Лувр - найбільший музей світу з Моною Лізою',
          'Собор Нотр-Дам - готичний шедевр на острові Сіте',
          'Тріумфальна арка та Єлисейські поля',
          'Монмартр та Базиліка Сакре-Кер'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '4-5 днів'
      },
      {
        id: 'nice',
        name: 'Nice',
        nameUa: 'Ніцца',
        description: 'Перлина Французької Рів\'єри з лазуровим морем, Променадом Англійців та мальовничою старою частиною міста. Ніцца поєднує середземноморський колорит, пляжний відпочинок та культурні пам\'ятки.',
        image: 'https://images.unsplash.com/photo-1669428702956-09f2cef48958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNlJTIwZnJhbmNlJTIwYmVhY2h8ZW58MXx8fHwxNzY1MjkxMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Променад Англійців - 7 км набережної вздовж моря',
          'Старе місто (Vieux Nice) з вузькими вуличками',
          'Замкова гора з панорамним видом',
          'Музей Марка Шагала',
          'Курс Салея - щоденний квітковий ринок'
        ],
        bestTime: 'Травень-Червень, Вересень-Жовтень',
        duration: '2-3 дні'
      },
      {
        id: 'lyon',
        name: 'Lyon',
        nameUa: 'Ліон',
        description: 'Гастрономічна столиця Франції та місто з багатою історією, яке знаходиться між Роною та Соною. Старе місто Ліона включене до списку Світової спадщини ЮНЕСКО завдяки архітектурі епохи Відродження.',
        image: 'https://images.unsplash.com/photo-1662492022162-403624efa72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxseW9uJTIwZnJhbmNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NTI5MTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Старе місто (Vieux Lyon) - ренесансна архітектура',
          'Базиліка Нотр-Дам де Фурв\'єр',
          'Площа Белькур - одна з найбільших у Європі',
          'Трабулі - таємні проходи через будинки',
          'Район Круа-Рус - історичний квартал ткачів'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '2-3 дні'
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    nameUa: 'Японія',
    flag: '🇯🇵',
    description: 'Японія - країна, де стародавні традиції гармонійно поєднуються з передовими технологіями. Від неонових вогнів Токіо до спокійних храмів Кіото, від гори Фудзі до вишневого цвіту - Японія чарує своєю унікальною культурою.',
    capital: 'Токіо',
    language: 'Японська',
    currency: 'Ієна (¥)',
    cities: [
      {
        id: 'tokyo',
        name: 'Tokyo',
        nameUa: 'Токіо',
        description: 'Токіо - футуристична мегаполія, яка поєднує хмарочоси з традиційними храмами. Від гучного району Сібуя до спокійних садів Імператорського палацу, від анімешних магазинів Акіхабари до елітного Гінзи - Токіо вражає контрастами.',
        image: 'https://images.unsplash.com/photo-1598785933375-9f14c25f720b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwc2t5bGluZXxlbnwxfHx8fDE3NjUyMzA4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Перехрестя Сібуя - найжвавіший перехід у світі',
          'Сенсо-дзі - найдавніший храм Токіо',
          'Токійська вежа та Tokyo Skytree',
          'Район Акіхабара - центр електроніки та аніме',
          'Парк Уено з музеями та храмами'
        ],
        bestTime: 'Березень-Травень (цвітіння сакури), Вересень-Листопад',
        duration: '4-5 днів'
      },
      {
        id: 'kyoto',
        name: 'Kyoto',
        nameUa: 'Кіото',
        description: 'Культурна столиця Японії з понад 2000 храмів та святинь. Кіото зберегла традиційну японську атмосферу з гейшами, бамбуковими гаями, садами каменів та дерев\'яними будиночками. Місто було стародавньою столицею Японії протягом тисячі років.',
        image: 'https://images.unsplash.com/photo-1729864881494-d96345092845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRlbXBsZSUyMGphcGFufGVufDF8fHx8MTc2NTI5MTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Кінкаку-дзі - Золотий павільйон',
          'Фусімі Інарі - тисячі червоних тоніїв',
          'Бамбуковий ліс Арасіяма',
          'Район гейш Гіон',
          'Кійомідзу-дера - храм на дерев\'яних стовпах'
        ],
        bestTime: 'Березень-Травень, Жовтень-Листопад',
        duration: '3-4 дні'
      },
      {
        id: 'osaka',
        name: 'Osaka',
        nameUa: 'Осака',
        description: 'Гастрономічна столиця Японії, відома своєю вуличною їжею, жвавою атмосферою та дружелюбними людьми. Осака пропонує замок, сучасні розважальні райони та унікальну кухню. Місто славиться своїм девізом "kuidaore" - їж до знепритомнення.',
        image: 'https://images.unsplash.com/photo-1729848421108-961e90261b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvc2FrYSUyMGNhc3RsZSUyMGphcGFufGVufDF8fHx8MTc2NTIyOTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Замок Осака - один з найвідоміших замків Японії',
          'Район Дотонборі - неонові вивіски та вулична їжа',
          'Універсал Студіос Джапан',
          'Район Сінсайбасі для шопінгу',
          'Акваріум Кайюкан - один з найбільших у світі'
        ],
        bestTime: 'Березень-Травень, Вересень-Листопад',
        duration: '2-3 дні'
      }
    ]
  },
  {
    id: 'spain',
    name: 'Spain',
    nameUa: 'Іспанія',
    flag: '🇪🇸',
    description: 'Іспанія - країна пристрасті, фламенко, корриди та сієсти. Від модерністської архітектури Гауді в Барселоні до королівських палаців Мадрида, від пляжів Коста-дель-Соль до історичних пам\'яток Севільї - Іспанія пропонує незабутні враження.',
    capital: 'Мадрид',
    language: 'Іспанська',
    currency: 'Євро (€)',
    cities: [
      {
        id: 'barcelona',
        name: 'Barcelona',
        nameUa: 'Барселона',
        description: 'Столиця Каталонії, відома фантастичною архітектурою Антоніо Гауді. Саграда Фамілія, Парк Гуель, Каса Мілла створюють унікальний архітектурний ландшафт. Місто поєднує пляжі, готичний квартал та сучасне мистецтво.',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzYWdyYWRhJTIwZmFtaWxpYXxlbnwxfHx8fDE3NjUxODQwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Саграда Фамілія - шедевр Гауді, будується з 1882 року',
          'Парк Гуель - казкові мозаїчні скульптури',
          'Бульвар Ла Рамбла - головна прогулянкова алея',
          'Готичний квартал - середньовічні вулички',
          'Пляж Барселонета - міський пляж'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '3-4 дні'
      },
      {
        id: 'madrid',
        name: 'Madrid',
        nameUa: 'Мадрид',
        description: 'Столиця Іспанії з королівським палацом, музеями світового рівня та жвавим нічним життям. Мадрид вражає площею Пласа Майор, парком Ретіро, музеєм Прадо та аутентичними тапас-барами. Місто, де життя триває до ранку.',
        image: 'https://images.unsplash.com/photo-1658922184330-001b78430070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjByb3lhbCUyMHBhbGFjZXxlbnwxfHx8fDE3NjUyOTEwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Королівський палац - офіційна резиденція іспанської корони',
          'Музей Прадо - один з найкращих музеїв світу',
          'Парк Ретіро - зелені легені Мадрида',
          'Площа Пласа Майор - серце старого міста',
          'Музей Райна Софія з "Герникою" Пікассо'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '3-4 дні'
      },
      {
        id: 'seville',
        name: 'Seville',
        nameUa: 'Севілья',
        description: 'Батьківщина фламенко та серце Андалусії. Севілья чарує своїм мавританським спадком, кафедральним собором, Алькасаром та жвавою атмосферою. Місто апельсинових дерев, корриди та пристрасних танців.',
        image: 'https://images.unsplash.com/photo-1715463293644-49ffee992692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXZpbGxlJTIwc3BhaW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY1MjkxMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        attractions: [
          'Севільський кафедральний собор - найбільший готичний храм',
          'Королівський Алькасар - мавританський палац',
          'Площа Іспанії - архітектурний шедевр',
          'Квартал Санта-Крус з вузькими вуличками',
          'Вежа Хіральда - колишній мінарет мечеті'
        ],
        bestTime: 'Квітень-Червень, Вересень-Жовтень',
        duration: '2-3 дні'
      }
    ]
  }
];