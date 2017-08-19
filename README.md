# yepstr-assignment - Kategoriskärm

Bestämde mig för att göra uppgiften i React Native, såg det som en möjlighet att få lite mera erfarenhet utav ramverket. Försökte i största möjliga mån föreställa mig hur en större app skulle vara upplagd, och därefter utformat kategoriskärmen på ett sådant sätt att den snabbt och enkelt ska kunna implementeras i ett större projekt. Stacken består utav React Native, valde att köra med Expo igen då det blir mindre platformsspecifika tweaks och man kommer igång snabbare. Använde redux som state container, Redux-thunk för att kunna göra 'asynchronous requests' i action creators. React-Navigation för navigering inom appen. React-native-elements för ikoner.

Så implementerar man kategoriskärmen i ett eget projekt behöver man i stort sett bara definera var bakåt, kryss samt nästa-nappen ska leda användaren. Dessutom behöver man skicka med en parameter till react-navigation för att göra header-titeln dynamisk (hårdkodad till Yeppa Täby just nu). Själva kategorierna är lagrade i en .json fil som importeras asynkront för att efterlikna en extern request. Dessa kan man om man vill lagra i databas, dessutom är det enkelt att lägga till nya kategorier vid behov. 

Alla bilder är lagrade i molnet på Amazon S3 bucket.

För att testa appen live, ladda ner Expo's mobilapp och skanna QR-koden.

[Instruktioner](https://expo.io/@kekami/yepstr-assignment)
