// data.js
const trainingData = [
    {
      id: 1,
      title: 'Welpen und Junghundtraining',
      description: 'Einen süssen Welpen zu erziehen ist nicht immer so einfach...',
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
      description: 'Wichtig im Zusammenleben mit Hunden ist, dass auch unsere kleinen Familienmitglieder verstehen, warum unser Freund ein bestimmtes Verhalten zeigt. Ziel ist es, euren Nachwuchs die grundlegende Kommunikation mit dem Fellknäuel durch Tricks beizubringen. Ich zeige euch Möglichkeiten, wie das Leben mit Kind(ern) und Hund entspannt möglich ist.',
    },
    {
      id: 8,
      title: 'Hund mit Handicap',
      description: 'Hunde mit Behinderung wollen genauso arbeiten wie jeder andere Hund und brauchen Erziehung und Beschäftigung. Jedes Training wird auf die individuellen Bedürfnisse abgestimmt und garantiert Spaß und Erfolg für Hund und Halter.',
    },
    {
      id: 9,
      title: 'Spaziergang mit dem Hund',
      description: 'So sehr wir nur das Beste für unseren Vierbeiner wollen, stehen uns oftmals Verpflichtungen im Weg, wodurch ein notwendiger Spaziergang nicht möglich ist. Nach einem ausgiebigen Kennenlerngespräch hole ich deinen Begleiter zur vereinbarten Zeit am vereinbarten Ort ab. Ist mit meinen anderen Angeboten kombinierbar.',
    },

    {
      id: 10,
      title: 'Anschaffungsberatung',
      description: 'Bevor eine Fellnase ein Teil deiner Familie wird, solltest du dir einige Fragen stellen und diese beantworten können. Ich helfe und begleite dich dabei sehr gerne – egal ob Welpe oder Tierschutzhund, da ich für euch nur das Beste will. Begleite: Ich fahr mit zum Tierheim oder zum Züchter – vielleicht fällt dir dabei ein besseres Wording ein.',
    },

    {
      id: 11,
      title: 'Anti-Jagd-Training',
      description: 'Ein Hase, Reh oder die Nachbarskatze – mehr braucht es nicht und dein Hund wechselt in den Jagdmodus. Rückruf oder Grundkommandos scheinen in dieser Situation vergessen zu sein. Der Jagdtrieb deines Hundes bringt dich zur Verzweiflung? Kein Problem, Für Anti- Jagd- Training ist es nie zu spät! Der Jagdtrieb eines Hundes kann meist nicht vollständig abgewöhnt, aber kontrolliert werden. Unter der Beachtung der Fähigkeiten deines Hundes erstellen wir gemeinsam den für euch passenden Trainingsweg.',
    },

    {
      id: 12,
      title: 'Social-Walk',
      description: 'Ein Social Walk bietet die Möglichkeit, unter kontrollierten Bedingungen und Anleitung eines Trainers auf Artgenossen und Menschen zu treffen und Begegnungen zu trainieren. Mensch und Hund lernen gemeinsam mit anderen Teams sich durch den Alltag zu bewegen. Schwerpunkte: Training der Leinenführigkeit unter Ablenkung, Körpersprache des eigenen Hundes deuten lernen, Sozialkontakte mit angemessenen Verhalten der Hunde untereinander. Ziel: Der eigene Hund lernt, dass die Anwesenheit anderer Hunde beim Gassi/Spazierengehen dazugehört und er in der Situation neutral (nicht aufgeregt oder ängstlich) reagiert.',
    },

    {
      id: 13,
      title: 'Faszienmassage',
      description: 'Faszien – das Bindegewebe des Körpers – sind mitentscheidend für die Beweglichkeit eines Tieres. Durch Stress, Verletzungen und Operationen, Schonhaltungen und Bewegungsmangel verkürzen und verhärten sie sich. Die Faszien werden starr und unbeweglich. Steifheit und oft Schmerzen sind die Folge. Bei der Faszienmassage werden diese wieder gelockert zusätzlich Mobilisationsübungen durchgeführt.',
    },

    // Add more training programs as needed
  ];
  
  export default trainingData;
  