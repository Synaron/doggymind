// data.js
import welpe11 from './assets/images/Welpen/welpe11.png';
import Welpe2 from './assets/images/Welpen/Welpe2.png';
import Alltagstauglich from './assets/images/Alltagstauglich.png';
import MedicalTraining from './assets/images/MedicalTraining.png';
import verhalten from './assets/images/verhalten.png';
import socialwalk from './assets/images/socialwalk.png';
import antijagd from './assets/images/antijagd.jpg';
import spaziergang from './assets/images/spaziergang.png';
import hundkind from './assets/images/hundkind.jpg';
import hundmithandicap from './assets/images/hundmithandicap.png';
import faszien from './assets/images/faszien.jpg';
import anschaffung from './assets/images/anschaffung.png'

const trainingData = [
    {
      id: 1,
      title: 'Welpen und Junghundtraining',
      category: 'Welpen',
      imagePath: welpe11,
      cardText: 'Wir legen miteinander den richtigen Grundstein in der wichtigsten Entwicklungsphase.',
      descriptionTitle: 'Welpentraining: Ein Schlüssel für eine harmonische Mensch-Hund-Beziehung.',
      description: 'Die Erziehung eines Welpen legt den Grundstein für ein erfülltes Zusammenleben. Beginne das Training frühzeitig, indem du grundlegende Kommandos wie "Sitz" und "Platz" einführen und positive Verstärkung nutzen. Sozialisation ist ebenso wichtig; ermögliche deinem Welpen Begegnungen mit verschiedenen Umgebungen und Artgenossen. Die Stubenreinheit zu lehren erfordert Geduld und Konsistenz. Belohne  gutes Verhalten und sei stets liebevoll. Durch klare Regeln und regelmäßiges Training schaffst du eine vertrauensvolle Basis für eine lebenslange Freundschaft. Soweit die Theorie, doch einen süssen Welpen zu erziehen, ist nicht immer so einfach... Deshalb unterstütze ich dich gerne dabei!',
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
      title: 'Welpen Gruppenkurs',
      category: 'Welpen',
      imagePath: Welpe2,
      cardText: 'Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen und vieles mehr.',
      description: 'Ab wann? - Ab dem Welpenalter von 10 Wochen und dein Hund sollte mindestens 2 Wochen zuhause angekommen sein. Dauer 10 Einheiten, 1x wöchentlich',
      contents: [
        'Sozialisierung mit Hunden, Menschen, Umgebungen, Geräuschen uvm.',
        'Beratung Stubenreinheit, Beißhemmung usw.',
        'Grundsignale',
        'Locker leine gehen und richtiges Spielen',
        'Deckentraining',
      ],
    },
    {
      id: 3,
      title: 'Alltagstauglichkeit für Jung und Alt',
      category: 'Alltag',
      imagePath: Alltagstauglich,
      cardText: 'Jede erdenkliche Alltagssituation so entspannt als möglich meistern.',
      description: 'Mir ist sehr wichtig, dass du und dein treuer Begleiter jede erdenkliche Alltagssituation so entspannt als möglich meistert.',
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
      title: 'Medical Training',
      category: 'Probleme',
      imagePath: MedicalTraining,
      cardText: 'Tierarztbesuche und Medikamentenverabreichung trainieren, für stressfreie Behandlungen.',
      description: 'Der Tierarztbesuch, sowie die Verabreichung von Medikamenten ist für viele Hunde unangenehm. Das Medical-Training bietet dir und deinem Freund die Möglichkeit, diese Situationen stressfrei und sogar entspannt zu erleben. Zudem wird eure Bindung dadurch noch mehr gestärkt,  da Schwieriges miteinander positiv erlebt wird.',
      contents: [
        'Berührungen von Fremden',
        'Korrekter Umgang am Behandlungstisch',
        'Unangenehme Gerüche',
        'Zecken entfernen',
        'Hunde- / Menschenbegegnungen',
        'Verhalten im Straßenverkehr',
        'Kommunikation / Ausdrucksverhalten des Hundes',
      ],
      note: 'Die aufgelisteten Themen sind nur Beispiele. Tatsächlich werden je nach Erfahrung und Bedarf die Themen zusammengestellt und während dem aktiven Training adaptiert.',
    },
    {
      id: 5,
      title: 'Verhaltensauffälligkeiten',
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
        'Obsessionen (Balljunkie,….)',
        'Daueraufregung',
        'Familienzuwachs (Geburt, Kinder)',
      ],
      note: 'Die wichtigsten Zutaten zum erwünschten Erfolg sind gegenseitiges Vertrauen, Ruhe und Gelassenheit.',
    },
    {
      id: 6,
      title: 'Spiel und Beschäftigung',
      category: 'Alltag',
      cardText: 'Sinnvolle Beschäftigung für Ausdauer und Köpfchen.',
      description: 'Es gibt viele Möglichkeiten unseren geliebten Vierbeiner zu beschäftigen. Am wichtigsten ist es, dass ihr beide Spaß habt. Deshalb finden wir gemeinsam die für euch ideale Beschäftigung.',
      contents: [
        'Nasenarbeit (Fährte)',
        'Apportieren',
        'Treibball',
        'Agility',
        'Mantrailing',
        'Tricktraining',
      ],
      note: 'Die wichtigsten Zutaten zum erwünschten Erfolg sind gegenseitiges Vertrauen, Ruhe und Gelassenheit.',
    },
    {
      id: 7,
      title: 'Training Kind mit Hund',
      category: 'Spezialthema',
      imagePath: hundkind,
      cardText: 'Ziel ist es, eurem Nachwuchs die grundlegende Kommunikation mit eurem Fellknäuel beizubringen.',
      description: 'Wichtig im Zusammenleben mit Hunden ist, dass auch unsere kleinen Familienmitglieder verstehen, warum unser Freund ein bestimmtes Verhalten zeigt. Ziel ist es, euren Nachwuchs die grundlegende Kommunikation mit dem Fellknäuel durch Tricks beizubringen. Ich zeige euch Möglichkeiten, wie das Leben mit Kind(ern) und Hund entspannt möglich ist.',
    },
    {
      id: 8,
      title: 'Hund mit Handicap',
      category: 'Spezialthema',
      imagePath: hundmithandicap,
      cardText: 'Auch Hunde mit Behinderung wollen und brauchen Erziehung und Beschäftigung.',
      description: 'Hunde mit Behinderung wollen genauso arbeiten wie jeder andere Hund und brauchen Erziehung und Beschäftigung. Jedes Training wird auf die individuellen Bedürfnisse abgestimmt und garantiert Spaß und Erfolg für Hund und Halter.',
    },
    {
      id: 9,
      title: 'Spaziergang mit dem Hund',
      category: 'Spezialservices',
      imagePath: spaziergang,
      cardText:'Wenn zum Gassi-Gehen mal keine Zeit bleibt, gehe gerne ich eine Runde mit deiner Fellnase spazieren.',
      description: 'So sehr wir nur das Beste für unseren Vierbeiner wollen, stehen uns oftmals Verpflichtungen im Weg, wodurch ein notwendiger Spaziergang nicht möglich ist. Nach einem ausgiebigen Kennenlerngespräch hole ich deinen Begleiter zur vereinbarten Zeit am vereinbarten Ort ab. Ist mit meinen anderen Angeboten kombinierbar.',
    },

    {
      id: 10,
      title: 'Anschaffungsberatung',
      category: 'Spezialservices',
      imagePath: anschaffung,
      cardText:'Ein Hund ist eine große Verantwortung. Entsprechend wohl überlegt sollte eine Anschaffung sein. Ich berate dich gerne.',
      description: 'Bevor eine Fellnase ein Teil deiner Familie wird, solltest du dir einige Fragen stellen und diese beantworten können. Ich helfe und begleite dich dabei sehr gerne – egal ob Welpe oder Tierschutzhund, da ich für euch nur das Beste will. Begleite: Ich fahr mit zum Tierheim oder zum Züchter – vielleicht fällt dir dabei ein besseres Wording ein.',
    },

    {
      id: 11,
      title: 'Anti-Jagd-Training',
      category: 'Spezialthema',
      imagePath: antijagd,
      cardText:'Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti-Jagd-Training ist es nie zu spät.',
      description: 'Ein Hase, Reh oder die Nachbarskatze – mehr braucht es nicht und dein Hund wechselt in den Jagdmodus. Rückruf oder Grundkommandos scheinen in dieser Situation vergessen zu sein. Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti- Jagd- Training ist es nie zu spät! Der Jagdtrieb eines Hundes kann meist nicht vollständig abgewöhnt, aber kontrolliert werden. Unter der Beachtung der Fähigkeiten deines Hundes erstellen wir gemeinsam den für euch passenden Trainingsweg.',
    },

    {
      id: 12,
      title: 'Social-Walk',
      category: 'Spezialthema',
      imagePath: socialwalk,
      cardText: 'Unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen treffen und Begegnungen trainieren.',
      description: 'Ein Social Walk bietet die Möglichkeit, unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen zu treffen und Begegnungen zu trainieren. Mensch und Hund lernen gemeinsam mit anderen Teams sich durch den Alltag zu bewegen. Schwerpunkte: Training der Leinenführigkeit unter Ablenkung, Körpersprache des eigenen Hundes deuten lernen, Sozialkontakte mit angemessenen Verhalten der Hunde untereinander. Ziel: Der eigene Hund lernt, dass die Anwesenheit anderer Hunde beim Gassi/Spazierengehen dazugehört und er in der Situation neutral (nicht aufgeregt oder ängstlich) reagiert.',
    },
    {
      id: 13,
      title: 'Faszienmassage',
      category: 'Spezialservices',
      imagePath: faszien,
      cardText: 'Durch Massage Faszien lockern und schmerzfreie Mobilität unterstützen.',
      description: 'Faszien – das Bindegewebe des Körpers – sind mitentscheidend für die Beweglichkeit eines Tieres. Durch Stress, Verletzungen und Operationen, Schonhaltungen und Bewegungsmangel verkürzen und verhärten sie sich. Die Faszien werden starr und unbeweglich. Steifheit und oft Schmerzen sind die Folge. Bei der Faszienmassage werden diese wieder gelockert zusätzlich Mobilisationsübungen durchgeführt.',
    },

    // Add more training programs as needed
  ];
  
  export default trainingData;
  