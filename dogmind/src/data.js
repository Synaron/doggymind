// data.js
import welpe11 from './assets/images/Welpen/welpe11.png';
import Welpe2 from './assets/images/Welpen/Welpe2.png';
import Alltagstauglich from './assets/images/Alltagstauglich.png';
import MedicalTraining from './assets/images/MedicalTraining.png';
import verhalten from './assets/images/verhalten.png';
import socialwalk from './assets/images/socialwalk.png';
import antijagd from './assets/images/antijagd.jpg';
import hundkind from './assets/images/hundkind.jpg';
import hundmithandicap from './assets/images/hundmithandicap.png';
import anschaffung from './assets/images/anschaffung.png'
import spiel from './assets/images/Spiel.png'
import rassen from './assets/images/antijagd.jpg'

const trainingData = [
    {
      id: 1,
      title: 'Welpen-und-Junghundtraining',
      category: 'Welpen',
      imagePath: welpe11,
      cardText: 'Wir legen miteinander den richtigen Grundstein in der wichtigsten Entwicklungsphase.',
      descriptionTitle: 'Welpentraining: Der Schlüssel für eine harmonische Mensch-Hund-Beziehung.',
      description: 'Einen Welpen/Junghund zu erziehen ist nicht immer einfach, da sie ja sooo süß sind. Wir legen miteinander den richtigen Grundstein in einer der wichtigsten Entwicklungsphasen. Gewünschte Verhaltensweisen können somit von Anfang an geübt werden.',
      contents: [
        'Stubenreinheit',
        'Alleine bleiben',
        'Leckerlies vorsichtig aus der Hand nehmen / Beißen im Spiel',
        'Unerwünschtes Kauen an Gegenständen',
        'Aufmerksamkeit auf Halter',
        'Gewünschte Grundsignale',
        'Ruhe',
        'Rückruf',
        'Boxtraining / Deckentraining',
      ],
      note: 'Die aufgelisteten Themen sind nur Beispiele. Tatsächlich werden je nach Erfahrung und Bedarf die Themen zusammengestellt und während dem aktiven Training adaptiert.',
    },
    {
      id: 2,
      title: 'Welpen-Gruppenkurs',
      category: 'Welpen',
      imagePath: Welpe2,
      cardText: 'Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen und vieles mehr.',
      description: 'Ab wann? - Welpenalter 10 Wochen und mindestens 2 Wochen zuhause angekommen. Dauer: 10 Einheiten, 1x wöchentlich.',
      contents: [
        'Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen uvm.',
        'Beratung Stubenreinheit, Beißhemmung usw.',
        'Grundsignale',
        'Locker an der Leine gehen',
        'Hundgerechtes Spielen',
        'Deckentraining',
      ],
    },
    {
      id: 3,
      title: 'Alltagstauglich',
      category: 'Alltag',
      imagePath: Alltagstauglich,
      cardText: 'Jede erdenkliche Alltagssituation so entspannt als möglich meistern.',
      description: 'Uns ist sehr wichtig, dass du und dein treuer Begleiter jede erdenkliche Alltagssituation gemeinsam souverän meistert.',
      contents: [
        'Leinenführigkeit',
        'Aufmerksamkeit auf Halter',
        'Kooperation mit Menschen',
        'Rückruf',
        'Hunde- / Menschenbegegnungen',
        'Verhalten im Straßenverkehr',
        'Kommunikation / Ausdrucksverhalten des Hundes',
      ],
      note: 'Die aufgelisteten Themen sind nur Beispiele. Tatsächlich werden je nach Erfahrung und Bedarf die Themen zusammengestellt und während dem aktiven Training adaptiert.',
    },
    {
      id: 4,
      title: 'Medical-Training',
      category: 'Probleme',
      imagePath: MedicalTraining,
      cardText: 'Tierarztbesuche und Medikamentenverabreichung trainieren, für stressfreie Behandlungen.',
      description: 'Der Tierarztbesuch, sowie die Verabreichung von Medikamenten ist für viele Hunde unangenehm, aber notwendig. Das Medical-Training bietet dir und deinem Freund die Möglichkeit, diese Situationen möglichst stressfrei und sogar entspannt zu erleben. Zudem wird eure Bindung dadurch noch mehr gestärkt, da Schwieriges miteinander positiv erlebt wird.',
      contents: [
        'Berührungen von Fremden',
        'Korrekter Umgang am Behandlungstisch',
        'Unangenehme Gerüche',
        'Zecken entfernen',
        'Krallen schneiden',
        'Augentropfen',
        'Fellpflege',
      ],
    },
    {
      id: 5,
      title: 'Verhaltensauffaelligkeiten',
      category: 'Probleme',
      imagePath: verhalten,
      cardText:'Unerwünschtes Verhalten durch Training gezielt korrigieren.',
      description: 'Wenn du dich fragst, warum dein Hund unter bestimmten Bedingungen ein spezielles Verhalten zeigt, das für dich nicht erklärbar ist, bist du hier richtig. Es gibt eine Vielzahl von unerwünschten Verhalten:',
      contents: [
        'Zerren an der Leine / Sprung in die Leine',
        'Aggression gegenüber Menschen',
        'Aggression gegenüber Artgenossen',
        'Futterverteidigung',
        'Frust',
        'Ausuferndes Jagdverhalten (läuft Autos, Radfahrer, Jogger hinterher,…)',
        'Obsessionen',
        'Daueraufregung',
        'Anderes Verhalten bei Familienzuwachs (Geburt, Kinder)',
      ],
    },
    {
      id: 6,
      title: 'Spiel-und-Beschaeftigung',
      category: 'Alltag',
      imagePath: spiel,
      cardText: 'Sinnvolle Beschäftigung für Ausdauer und Köpfchen.',
      description: 'Es gibt viele Möglichkeiten unseren geliebten Vierbeiner zu beschäftigen. Am wichtigsten ist es, dass ihr beide Spaß habt. Deshalb finden wir gemeinsam die für euch die ideale Beschäftigung.',
      contents: [
        'Nasenarbeit (Fährte)',
        'Apportieren',
        'Treibball',
        'Agility',
        'Mantrailing',
        'Tricktraining',
      ],
    },
    {
      id: 7,
      title: 'Training-Kind-mit-Hund',
      category: 'Spezialthema',
      imagePath: hundkind,
      contents: [
        'Grundlegende Kommunikation/Verhalten zwischen Hund und Kind',
        'Was bedeuten bestimmte Gesten - kindgerecht aufbereitet',
        'Spiele für Kind und Hund',
      ],
      cardText: 'Ziel ist es, eurem Nachwuchs die grundlegende Kommunikation mit eurem Fellknäuel beizubringen.',
      description: 'Wichtig im Zusammenleben mit Hunden ist, dass auch unsere kleinen Familienmitglieder verstehen, warum unser Freund ein bestimmtes Verhalten zeigt. Ziel ist es, den Nachwuchs die grundlegende Kommunikation mit dem Fellknäuel durch Tricks beizubringen. Wir zeigen euch Möglichkeiten, wie das Leben mit Kind(ern) und Hund entspannt möglich ist.',
    },
    {
      id: 8,
      title: 'Hund-mit-Handicap',
      category: 'Spezialthema',
      imagePath: hundmithandicap,
      contents: [
        'Handicapgerechter individueller Trainingsplan',
        '(Alltags-) Übungen auf die Einschränkungen abgestimmt',
        'Handicapgerechtes Spiel und Beschäftigung',
      ],
      cardText: 'Auch Hunde mit Behinderung wollen und brauchen Erziehung und Beschäftigung.',
      description: 'Hunde mit Behinderung wollen genauso arbeiten wie jeder andere Hund und brauchen Erziehung und Beschäftigung.',
    },

    {
      id: 9,
      title: 'Anschaffungsberatung',
      category: 'Spezialservices',
      imagePath: anschaffung,
      contents: [
        'Welche Erfahrungen mit Hunden habe ich',
        'Welche Rasse soll bei mir einziehen? - Und warum genau?',
        '...',
      ],
      cardText:'Ein Hund ist eine große Verantwortung. Entsprechend wohl überlegt sollte eine Anschaffung sein. Ich berate dich gerne.',
      description: 'Bevor eine Fellnase ein Teil deiner Familie wird, solltest du dir einige Fragen stellen und diese beantworten können.',
      note:'Wir helfen und begleiten dich dabei sehr gerne – egal ob Welpe oder Tierschutzhund, da wir für dich nur das Beste wollen.',
    },

    {
      id: 10,
      title: 'Anti-Jagd-Training',
      category: 'Spezialthema',
      imagePath: antijagd,
      contents: [
        'Verhaltensanalyse',
        'Situationsbedingtes Verhalten etablieren',
      ],
      cardText:'Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti-Jagd-Training ist es nie zu spät.',
      description: 'Ein Hase, Reh oder die Nachbarskatze – mehr braucht es nicht und dein Hund wechselt in den Jagdmodus. Rückruf oder Grundkommandos scheinen in dieser Situation vergessen zu sein. Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti- Jagd- Training ist es nie zu spät!',
    },

    {
      id: 11,
      title: 'Social-Walk',
      category: 'Spezialthema',
      imagePath: socialwalk,
      contents: [
        'Training der Leinenführigkeit unter Ablenkung',
        'Körpersprache des eigenen Hundes deuten lernen,',
        'Sozialkontakte mit angemessenen Verhalten der Hunde untereinander.'
      ],      
      cardText: 'Unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen treffen und Begegnungen trainieren.',
      description: ' Ein Social Walk bietet die Möglichkeit, unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen zu treffen und Begegnungen zu trainieren.',
      seconddescription: 'Mensch und Hund lernen gemeinsam mit anderen Teams sich durch den Alltag zu bewegen.',
      note:'Ziel: Der eigene Hund lernt, dass die Anwesenheit anderer Hunde beim Gassi/Spazierengehen dazugehört und er in der Situation neutral (nicht aufgeregt oder ängstlich) reagiert.',
    },

    {
      id: 12,
      title: 'Urspruengliche-Rassen',
      category: 'Spezialthema',
      imagePath: rassen,
      contents: [
        'Verhaltensanalyse',
        'Abgestimmtes Training,',
        'Spezielle Spiele / Beschäftigungen.',
      ],      
      cardText: 'Ursprüngliche Hunderassen verstehen lernen.',
      description: 'Ursprüngliche Hunderassen haben aufgrund ihrer hohen Selbstständigkeit meist eine eigene Anforderung an die Erziehung und an das Training. Aufgrund dessen benötigen solche Hunde eine andere Herangehensweise, um zum gewünschten Erfolg zu kommen.',
    },


    // Add more training programs as needed
  ];
  
  export default trainingData;
  