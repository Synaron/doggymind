import React from 'react';
import NavbarSub from '../NavbarSub';

function AGBs() {
  return (
    <div>
    <NavbarSub />
    <div id="welpenJunghundID" className="container m-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="text-center">Allgemeine Geschäftsbedingungen</h1>
          <h2>1. Zahlungsbedingungen</h2>
          <ul>
            <li>Rechnungen gelten als Kaufvertrag nach österreichischem Recht</li>
            <li>Unterrichtseinheiten können folgendermaßen bezahlt werden</li>
            <ul>
              <li>mittels Banküberweisung</li>
              <li>Barzahlung</li>
            </ul>
            <li>Die Unterrichtseinheiten sind vor dem jeweiligen Termin zu bezahlen</li>
            <ul>
              <li>gilt nur für Banküberweisungen</li>
            </ul>
          </ul>

          <h2>2. Stornobedingungen</h2>
          <ul>
            <li>Absage mindestens 48 Stunden im Voraus</li>
            <li>Nicht abgesagte Termine und Unterrichtseinheiten gelten als konsumiert</li>
            <li>Nicht konsumierte bezahlte Unterrichtseinheiten werden nicht rückerstattet</li>
            <li>Nicht 48 Stunden im voraus bezahlte Einheiten gelten als storniert</li>
            <ul>
              <li>ausgenommen Barzahlung</li>
            </ul>
            <li>Bei Absage des Termins 36 Stunden vorher 50% der Kosten als Stornogebühr</li>
            <li>Bei Absage des Termins 24 Stunden vorher 100% der Kosten als Stornogebühr</li>
            <li>Akute Krankheitsfälle oder nicht vorhersehbare Notfälle sind ausgenommen</li>
            <ul>
              <li>wenn alsbald als bekannt telefonisch mitgeteilt</li>
            </ul>
          </ul>

          <h2>3. Erstgespräch</h2>
          <ul>
            <li>Für dieses gilt:</li>
            <ul>
              <li>Kosten von 120 € für 90 min</li>
            </ul>
            <ul>
              <li>jede weitere halbe Stunde 20€</li>
            </ul>
            <li>
              Muss immer bezahlt werden, da es sich um eine Dienstleistung handelt,
              unabhängig ob eine weitere Zusammenarbeit zustande kommt.
            </li>
          </ul>

          <h2>4. Haftungsausschluss</h2>
          <ul>
            <li>
              Wir arbeiten gewaltfrei, fachlich fundiert und positiv mit euch. Daher
              übernehmen wir keinerlei Haftung für eventuell auftretende physische oder
              psychische Symptome, Krankheiten, Verletzungen oder Unfälle von Hund und
              Hundehalter.
            </li>
            <li>
              Wir übernehmen keinerlei Haftung für Sachschäden oder Personenschäden welche
              sich während des Trainings und auch außerhalb ereignen.
            </li>
            <li>Wir übernehmen keine Haftung für entlaufene Hunde im Zuge des Trainings</li>
          </ul>

          <h2>5. Trainingsbedingungen</h2>
          <ul>
            <li>
              Gesundheit Hund: Da uns das Wohlbefinden des Hundes sehr wichtig ist,
              behalten wir uns vor, die Trainingseinheit nach Rücksprache mit euch
              abzubrechen, wenn:
            </li>
            <ul>
              <li>der Verdacht einer Krankheit besteht</li>
              <li>der Verdacht auf Verletzungen besteht</li>
              <li>Anwendung von Gewalt oder nicht tierschutzrelevanter Methoden</li>
              <li>
                Es müssen alle empfohlenen Impfungen vorhanden sein - Impfpass wird von uns
                kontrolliert
              </li>
              <ul>
                <li>ausgenommen Hausbesuche</li>
              </ul>
            </ul>
            <li>
              Gesundheit Halter: Auch du bist uns wichtig, weshalb wir uns Vorbehalten, die
              Trainingseinheit abzubrechen wenn:
            </li>
            <ul>
              <li>offensichtliche Krankheitssymptome vorhanden sind</li>
              <li>Betrunkenheit</li>
              <li>
                sollte es weitere Einschränkungen geben, diese bitte vorher bekannt geben,
                damit das Training dementsprechend angepasst werden kann
              </li>
              <li>offensichtliche Krankheitssymptome vorhanden sind</li>
              <ul>
                <li>Dies ist ausdrücklich keine Diskriminierung und stellt keinen Ausschluss dar!</li>
              </ul>
            </ul>
            <li>Witterung</li>
            <ul>
              <li>Training findet grundsätzlich bei jeder Witterung statt</li>
              <li>
                Wir behalten uns vor, Trainingseinheiten bei starker Witterung (Hitze,
                Hagel, Sturmböen, sehr starker Schneefall,....) in Absprache mit euch
                zeitgerecht zu verschieben oder abzubrechen
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
    <p className="text-center bg-dark text-white p-3 w-100 d-block mb-0" style={{ fontSize: '1.5rem' }}>
    www.doggymind.at | Bankverbindung: ATXX XXXX XXXX XXXX | Mobil: 0660 123 456 |
    Mail: office@doggymind.at
    </p>
    </div>
  );
}

export default AGBs;
