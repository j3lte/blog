title: "Cyber Awareness & Privacy"
id: 41
date: 2012-12-09 17:20:17
tags: [cybersecurity]
categories:
---
Ik kwam vandaag via via deze website tegen: [http://cyberawareness.nctv.nl/](http://cyberawareness.nctv.nl/ "Cyber Awareness")

**Ik raad een ieder aan om de korte introductiefilm te bekijken**. Je krijgt hier als leek zijnde een beter beeld van de wereld van cyber security. Met name wat de implicaties zijn van sommige keuzes die wij maken, wat wij op het internet zetten.

<!--more-->

Als ik dit op mezelf ga betrekken, dan weet ik dat ik nogal makkelijk te Googlen ben. Nu kan ik zeggen dat ik niets te verbergen heb, dat is de grootst mogelijke bullshit die iemand je kunt vertellen. Iedereen heeft dingen te verbergen. Op het internet zijn er nu talloze voorbeelden te vinden van mensen die bijvoorbeeld ontslagen zijn door wat zij op social media zetten, zoals [Facebook](http://chris.pirillo.com/waitress-fired-over-facebook-status/ "Waitress fired over Facebook status") of [Twitter](http://www.businessinsider.com/twitter-fired-2011-5?op=1 "13 People Who Got Fired For Tweeting"). Niet zo heel gek, want velen denken er niet over na.

Mijn opmerking hierover? Denk goed na voor je iets op het internet zet. Er zijn genoeg partijen die mee kunnen lezen wat jij aan het doen bent, puur vanwege het feit dat jij het op je timeline zet van Twitter en Facebook. Om te illustreren wat de kracht is van informatie op het internet, hier een voorbeeld die ik zelf heb meegemaakt.

## Een voorbeeld

_Een tijd terug was er een vermeende pedofiel actief op Twitter, althans zo leek het. Tweets richting viertienjarige meisjes die nogal sexueel getint waren. Er was een berg ophef over, en dus besloot ik zelf, ter oefening, eens onderzoek te doen naar dit persoon. Ik oefen mijn skills in Social Engineering en research dagelijks, for fun and profit. Dit leek me een goed onderwerp._

_Het begon met zijn account op Twitter. Zelf ben ik veel bezig met datamining en had dus al de tools klaarliggen om de laatste 3200 tweets van zijn Twitterprofiel te dumpen. (Wat nu dus een NodeJS-tool is geworden, [zoals hier uitgewerkt](http://jeltelagendijk.nl/2012/12/twitter-toolkit-in-nodejs/ "Twitter toolkit in NodeJS"))_

_Hier begint de fun in research en zoeken. Tweets kun je uitsplitsen in tweets (Ik noem ze in bovenstaande tool OT: Original Tweets), retweets (RT) en replies (RP). Door alle tweets te analyseren (voor nu nog handmatig, in de toekomst wil ik dit automatiseren) kwam ik er al snel achter waar hij werkte, dit stond in een van zijn replies. Tevens hadden een aantal van zijn tweets geolocaties erin zitten. Deze kwamen overeen met de woonplaats die hij had genoemd in zijn profiel. Het mobiele telefoonnummer stond in één van zijn replies (wat sowieso een domme actie is, was snel verwijderd, echter had een andere twitteraar die al opgeslagen en geRetweet)._

_Dat is dan dus één social media bron. We hebben een naam, telefoonnummer, geolocaties, werkadres. Dan begint voor een researcher het graafwerk door Google te gebruiken. Zoeken op naam, zoeken op plaats, zoeken op nicknames (vooral dat laatste). Dit resulteerde in een profiel van een man die op meerdere datingsites stond, waarvan tevens de voorletters bekend waren en waar, gek genoeg, ook het huisadres van op het internet stond._

Binnen een zoekactie van zo'n 45 minuten heb je dan dus een profiel:

*   Naam, voorletters en achternaam
*   Foto's, hoe ziet iemand eruit
*   Woonplaats
*   Plaatsen die bezocht zijn (geolocaties)
*   Websites waar dit persoon op staat (Google is your best friend)
*   Telefoonnummer (dit is zoals gezegd een toevalstreffer) + huisadres
*   Werkadres, functie

## Hoe is dit afgelopen?

_Met een sisser. Ik werd zelf door de politie benaderd, die tekst en uitleg gaf, waarin ik mijn resultaten heb bediscussieerd. <del>Uiteindelijk bleek het om een vergissing te gaan, hij zou gehackt zijn. De politie was er in ieder geval mee bezig en bekend, dus heb ik alle gegevens overhandigd en van me afgezet. Nooit meer iets van gehoord, het is verder correct afgehandeld door de politie. Er was in ieder geval geen misdaad gepleegd.</del>_

_**Edit: Na wat heen en weer DM'en met mijn contactpersoon dien ik de afloop enigszins te nuanceren. In de afhandeling van bovenstaande gebeurtenis heb ik zelf geen enkele rol gespeeld. Dit is door de politie behandeld (zij waren op de hoogte van het account) en afgehandeld. We hebben alleen de resultaten van mijn zoektocht besproken, die voor een groot deel overeen kwamen en wat mij dus deed beseffen dat het koppelen van informatie van het internet, gevonden in profielen etcetera, bijzonder krachtig is. De zaak is verder afgehandeld door hen. Voor mij was bovenstaand voorbeeld een casus ter oefening.**_

## Wat leert bovenstaand verhaal?

Voor iemand met een beetje technische skills is het bijzonder makkelijk om een profiel op te stellen van een persoon op het internet. Een dergelijk profiel is te gebruiken in Social Engineering, waarbij je nog meer informatie weet los te peuteren van een persoon, puur op basis van het feit dat je al zoveel weet. Bent u daarmee in gevaar? Nee, natuurlijk niet. Het zet je echter wel aan het denken. Welke informatie die ik op het internet zet, kan gekoppeld worden aan andere informatie die ik achterlaat? _"Hmmmm, ik heb voor dit account als geheime vraag: 'wat is de naam van mijn kat?'. Die heb ik eerlijk beantwoord. Ik ben echter even vergeten dat ik mijn poes Miauw uitgebreid vermeld op m'n Facebook"_

## Heeft u wat te verbergen? Denk erover na wat u op het internet zet!

Nog een leuke documentaire zien over privacy? Ik raad een ieder aan om '[Panopticon](http://vimeo.com/52165457 "Panopticon - de docu over jouw privacy")' te kijken, van journalist [Peter Vlemmix](http://twitter.com/petervlemmix "Peter Vlemmix on Twitter"). Deze zet je aan het denken wat privacy (en het gebrek daarvan) nu inhoudt in Nederland.