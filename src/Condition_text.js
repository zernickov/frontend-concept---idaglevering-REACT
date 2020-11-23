import React from "react";
import App from "./App";

export const condition_text_arr = [
    <h4>Det med stort</h4>,
    'Under Corona-krisen er det særligt vigtigt, at vi hjælper hinanden. Mange mennesker er i karantæne eller i risikogruppen og kan derfor ikke selv købe ind.',
    <br />,
    'Vi har samlet et par god råd, der er vigtige at huske på i denne tid:',
    <br />, <br />,
    <h5>Til dig, der får hjælp til dine indkøb</h5>,
    'Hold to meters afstand til personen, der leverer dine varer, for at undgå smitte',
    <br />, <br />,
    <h5>Til dig, der hjælper andre med indkøb</h5>,
    'Vask og sprit dine hænder, inden du går ind i butikken og handler',
    <br />,
    'Sæt varerne foran døren, når du leverer dem, og ring/bank på. Træd derefter to meter tilbage, og tal med hinanden med god afstand',
    <br />,
    'Med Idag kan du få en anden person til at handle og levere varer til dig. Du kan også selv hjælpe andre ved at handle og levere varer.',
    <br />,
    'Her på siden kan du læse om betingelserne for at bruge Idag. Du kan også læse om, hvordan vi behandler dine data (GDPR).',
    <br />,
    <h4>Der er fire parter involveret, når du bruger Idag</h4>,
    '1. Den, der har brug for hjælp til indkøb',
    <br />,
    '2. Den, der vælger at hjælpe en anden',
    <br />,
    '3. Butikken, hvor varerne hentes',
    <br />,
    '4. Idag',
    <br />,
    'Her kan du læse lidt om parternes roller og overordnede ansvar.',
    <br />,
    'Det er vigtigt, at I hjælpes ad og passer godt på hinanden. Nedenunder har vi skrevet en guide til, hvordan I gør.',
    <br />,
    'Hvis du oplever problemer med varerne, skal du henvende dig til butikken, hvor varerne er købt.',
    <br />,
    'Idag er en teknisk platform, der forbinder dem, der har brug for hjælp til indkøb, med dem, der kan hjælpe i nærområdet. Idag er ikke en fysisk butik, men en kommunikationskanal mellem parterne. Men vi hjælper gerne med at løse eventuelle problemer, I ikke selv kan løse. Se ',
    <a className={"link"} href="https://docs.google.com/document/d/1YKRLOHaXTBCUzK7k3dbTEvQkA5jSmBimtU0FQ4lVacA/edit">Ofte stillede spørgsmål</a>,
    <br />,
    <h4>En kort huskeliste til dig, der får hjælp til dine indkøb:</h4>,
    '\u2219 Idag skaber udelukkende kontakten mellem dig, og den person der handler og leverer dine varer. Personen, der handler og leverer varerne, er altså ikke ansat hos idag',
    <br />,
    '\u2219 Personen, der handler og leverer dine varer, lægger ud for varerne i butikken. Vedkommende skal huske at få en kvittering med for købet. Når personen leverer varerne, refunderer du udlægget med MobilePay',
    <br />,
    '\u2219 Det er ikke sikkert, vi kan finde en person, der kan hjælpe dig med dine indkøb. Vi kan ikke garantere noget, men vi gør vores bedste!',
    <br />,
    '\u2219 Hvis du ikke er tilfreds med kvaliteten af varerne, så skyd ikke skylden på den person, der leverer dem. Ta’ i stedet fat på butikken, hvor varerne er købt',
    <br />,
    '\u2219 Personen, der handler og leverer varer til dig, skal følge de regler, der gælder for dig selv, når du handler. Hvis du f.eks. er under 18 år gammel, må du ikke bede personen om at købe cigaretter, vin og spiritus for dig',
    <br />,
    <h4>En kort huskeliste til dig, der hjælper andre med indkøb</h4>,
    '\u2219 Pas godt på varerne. Sørg for at tage direkte hjem og levere varerne, så de ikke bliver for varme eller kolde. Køber du frostvarer, skal du være ekstra opmærksom på dette',
    <br />,
    '\u2219 Du lægger ud for varerne i butikken. Husk derfor altid at få en kvittering på købet med. Når du leverer varerne, skal du vise og aflevere kvitteringen til vedkommende, du har hjulpet. Herefter skal udlægget refunderes til dig via MobilePay',
    <br />,
    '\u2219 Hjælper du frivilligt, behøver du ikke melde noget til SKAT. Det skal du derimod huske, hvis du får betaling for din hjælp',
    <br />,
    <h4>Lidt om dine personlige data (GDPR)</h4>,
    'For at kunne finde en person, der kan handle og levere varer til dig, skal vi bruge nogle oplysninger fra dig:',
    <br />,
    '\u2219 Dit fornavn og efternavn',
    <br />,
    '\u2219 Din adresse',
    <br />,
    '\u2219 Dit telefonnummer',
    <br />,
    '\u2219 Instruktioner om, hvordan varerne skal handles og leveres',
    <br />,
    '\u2219 Hvornår du gerne vil have varerne leveret',
    <br />,
    'Når en person siger ja til at løse din opgave, ser vedkommende:',
    <br />,
    '\u2219 Dit fornavn og efternavn',
    <br />,
    '\u2219 Din adresse',
    <br />,
    '\u2219 Dine instruktioner om, hvordan varerne skal handles og leveres',
    <br />,
    '\u2219 Hvornår varerne skal leveres',
    <br />,
    '\u2219 Når varerne er blevet leveret, vil informationerne ikke længere vises til andre brugere af vores system. Dog vil dine data stadig findes i de SMS’er, vi har sendt til personen, der har hjulpet med dine indkøb',
    <br />,
    '\u2219 Reglerne for køb af varer siger, at vi skal opbevare dine oplysninger i to år',
    <br />,
    '\u2219 Skattereglerne siger, at vi skal opbevare dine oplysninger i fem år, hvis du har hjulpet med at handle og levere varer',
    <br />,
    'Kontakt os via ',
    <a className={"link"} href="https://docs.google.com/document/d/1YKRLOHaXTBCUzK7k3dbTEvQkA5jSmBimtU0FQ4lVacA/edit">Ofte stillede spørgsmål</a>,
    ' for at blive slettet.',
    <br />,
    'Vi gemmer ikke cookies på din telefon, computer eller tablet',
    <br />, <br />,
    'De bedste hilsner fra Bo Overby / Stifter af Idag',
    <br />,
    <h6>Sidst redigeret - 25.03.2020</h6>






];


export default App;