## Progressive Web App (PWA)

Przykładowa aplikacja Pokedex prezentująca metodykę PWA

### Pliki związane z PWA

-   **`app/manifest.ts`**: Ten plik generuje dynamicznie plik `manifest.json`. Opisuje on to w jaki sposób zainstalowana aplikacja będzie się wyświetlać na telefonie czyli:

    -   Nazwa
    -   Ikony (zawarte w `public/icons/`)
    -   Motywy
    -   Sposób wyświetlania

-   **`next.config.ts`**: Konfiguracja pluginu `@ducanh2912/next-pwa`. Ten odpowiedzialny jest za:

    -   Generowanie Service Workera
    -   Caching

-   **`public/icons/`**: Zawiera ikony (`android-chrome-192x192.png`, `android-chrome-512x512.png`) wykorzystywane jako ikona aplikacji w menu telefonu oraz ikona wyświetlana przy uruchamianiu aplikacji

## Instalacja
Aplikacja funkcjonuje pod adresem: https://example-pwa-app-alpha.vercel.app

Aby zainstalować ją lokalnie należy:
 - Na telefonie (przykład z wykorzystaniem Androida i przeglądarki Chrome) - wejść w menu przeglądarki (3 kropki w prawym górnym rogu) a następnie wybrać "Dodaj do ekranu głównego".

 - Na komputerze (przykład z wykorzystaniem przeglądarki Chrome) - kliknąć przycisk z ikoną komputera i strzałki w dół znajdujący się na końcu paska z adresem  