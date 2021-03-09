# Brewista App

## Indledning

> Danske og verdenskendte Coffee Collective vil gerne samle flere folk omkring det sociale i kaffeopskrifter og kaffebrygning. Til det har de fået designet noget af en prototype til et socialt netværk hvor kaffenørder kan lave deres egne opskrifter og efterfølgende bedømme, både deres egne og vennernes. I begyndelsen skal denne app fungere som en dagbog hvor brugeren kan gemme deres egne kombinationer af bønner og opskrifter.

## Kravspecifikation

> I det følgende kan du finde de forskellige krav, der er til websiden, og til opgaven. Kravene er opdelt efter overordnede krav og krav til siden.

## Overordnede Krav

> For websiden gælder der følgende overordnede krav, som SKAL overholdes.

- [ ] Under udvikling skal du løbende anvende versionsstyringsværktøjet Git. Der skal oprettes et repository på GitHub som du løbende holder opdateret. Når du er færdig med opgaven skal du sende et link til dit repository til din lærer.
- [ ] Der er udleveret et link til en prototype der viser hvordan siden skal se ud. Din løsning behøver ikke ligne det udleverede billede ned til mindste pixel, men skal stadig være tæt på.
- [ ] Du skal til opgaven bruge front-end frameworket Vue.js.
- [ ] Du skal lave din styling selv og/eller bruge tailwindcss.
- [ ] Selvom designet er til mobil, så skal siden stadig se godt ud på tablets og PC.
- [ ] Du skal til eksamen kunne redegøre for:
- [ ] Hvordan du praktisk har anvendt et front-end framework til at opstille sidens layout og forskellige komponenter.
- [ ] Hvordan og hvorfor du har lavet forskellige JavaScript klasser og metoder.
- [ ] Eventuel opdeling af din kode i genanvendelige dele. Det er ikke et krav men du skal vise, at du har taget aktive valg ift. hvordan din kode er opdelt.

---

## Krav til siden

> Du kan se hvordan brewista skal se ud og fungere på [dette link](https://xd.adobe.com/view/0293f6fa-c889-4933-9f97-3a6a1defa088-57c0/screen/1e6b2ff8-b6f9-421b-9f5b-a3cb2d4eeb7a/). Hvis du trykker et sted inden i prototypen, så kommer der en blå boks som viser hvor du kan trykke for at navigere.

- [ ] Forsiden skal være et feed af tidligere afprøvede kaffebrygninger
- [ ] Ikonerne kan du finde i den vedlagte icons.html fil
- [ ] Der skal være en knap på forsiden hvor brugeren kan trykke for at en ny bryg. Når brugeren trykker på knappen skal der ske følgende
  - [ ] En liste af forskellige bønner kommer frem. Når brugeren trykker på en af bønnerne kommer de videre til
  - [ ] En liste af opskrifter de kan lave deres bryg med. Denne liste består af redskabet med en tilhørende opskrift (opskrifterne er i form af kaffemængde, vandmængde, hvordan bønnerne er kværnet samt trække tiden)
  - [ ] Når en opskrift er valgt kommer de frem til en trinvis vejledning til hvordan de laver kaffen.
  - [ ] Brugeren kan efter brygning trykke finish og kommer frem til forsiden hvor den nye bryg (kombination af bønner og opskrift) kommer frem i top af feed.
- [ ] Data skal gemmes så den ikke forsvinder når browseren lukkes.

---

## Ekstra Opgaver

> Du kan lave disse opgaver, hvis der er noget fra kravspecifikationen, som du ikke kunne løse, eller hvis du er færdig og vil vise overskud.

- [ ] Tilføj nogle simple Transitions Properties. Fx kan en aktivitet fade på listen af aktiviteter ind når den er gemt, eller ved sideskift.
- [ ] Opsæt app med Vue-Router
- [ ] Brug Vuex
- [ ] Ved tryk på brugerikonet på forsiden kommer man til en side hvor der kan oprettes en bruger, eller logge ind hvis der allerede eksisterer en bruger. (lav et bruger og login system)
- [ ] Lav en side til efter valg af opskrift og før den trinvise vejledning hvor brugeren kan tilpasse opskriften ved at ændre på
  - [ ] Mængde af vand, 100 – 1000ml
  - [ ] Mængde af kaffe, 10 – 100g
  - [ ] Hvor fint bønnerne er malet, fine, medium eller coarse
- [ ] Gem og hent data på Firebase.
- [ ] Design en navigation der ligner det udlevere screenshot som du kan finde sammen med denne opgave kaldet Ekstraopgave-BottomNavigation.jpg.
  - [ ] Ikoner til navigation kan du finde på heroicons.com
- [ ] Hvis du selv kan komme på noget som kan forbedre appen, så må du også gerne lave det som en ekstraopgave. Det kan fx være ny eller forbedret funktionalitet. Det kan også være et andet design af siden.
