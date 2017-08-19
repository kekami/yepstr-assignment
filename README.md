# yepstr-assignment - Kategoriskärm

Bestämde mig för att göra uppgiften i React Native, såg det som en möjlighet att få lite mera erfarenhet utav ramverket. Försökte i största möjliga mån föreställa mig hur en större app skulle vara upplagd, och därefter utforma kategoriskärmen på ett sådant sätt att den snabbt och enkelt ska kunna implementeras i ett större projekt. Stacken består utav React Native, valde att köra med Expo igen då det blir mindre platformsspecifika tweaks och man kommer igång snabbare. Använde redux som state container, Redux-thunk för att kunna göra asynkrona requests i action creators. React-Navigation för navigering inom appen. React-native-elements för ikoner.

Så implementerar man kategoriskärmen i ett eget projekt behöver man i stort sett bara definera var bakåt, kryss samt nästa-nappen ska leda användaren. När man navigerar till kategoriskärmen från en annan skärm, behöver man skicka med en parameter till react-navigation för att göra header-titeln dynamisk (hårdkodad till Yeppa Täby just nu då det bara existerar en skärm). Själva kategorierna är lagrade i en .json fil som importeras asynkront för att efterlikna en extern request. Dessa kan man om man vill lagra i databas, men lokalt fungerar också. Dessutom är det enkelt att utöka antalet kategorier vid behov. Den valda kategorin lagras i Redux-state och är därmed tillgänglig om någon annan komponent skulle behöva få tillgång till värdet. Gav också alla kategorier en unik id key.

Alla bilder är lagrade i molnet på Amazon S3 bucket.

För att testa appen live, ladda ner Expo's mobilapp och skanna QR-koden. Fingers crossed.

[Se instruktioner här](https://expo.io/@kekami/yepstr-assignment)
