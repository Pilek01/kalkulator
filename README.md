# 📊 Licznik Produkcji Rolek

Prosta aplikacja webowa do śledzenia produkcji rolek papieru podczas zmiany roboczej.

**Wszystko w jednym pliku HTML** - łatwo kopiować, przenosić i używać offline!

## ✨ Funkcje

- ➕ **Szybkie dodawanie rolek** - wprowadź wagę, opcjonalnie liczbę obrazków i ilość rolek
- 🔢 **Numeracja rolek** - każda rolka ma swój numer (#1, #2, #3...) dla łatwego porównania z papierowym raportem
- 🔄 **Kontynuacja zlecenia** - przejmujesz zlecenie w trakcie? Ustaw ostatnią rolkę z poprzedniej zmiany i zobacz podwójną numerację (numer w zleceniu + numer Twojej zmiany)
- 📈 **Automatyczne podsumowanie** - na bieżąco aktualizowana suma wag i obrazków
- 📋 **Lista wszystkich rolek** - z godziną dodania
- 🗑️ **Usuwanie wpisów** - pojedynczo lub wszystkich naraz
- 💾 **Automatyczny zapis** - dane zachowują się po odświeżeniu strony
- 📱 **Responsywny design** - działa na telefonie, tablecie i komputerze
- 🚀 **Działa offline** - nie wymaga połączenia z internetem
- 🎨 **Ciemny motyw** - dopasowany do innych aplikacji produkcyjnych

## 🚀 Jak uruchomić

### Metoda 1: Bezpośrednio z pliku
1. Pobierz lub sklonuj repozytorium
2. Otwórz plik `index.html` w przeglądarce (Chrome, Firefox, Safari, Edge)

### Metoda 2: Lokalny serwer
```bash
# Jeśli masz Python 3
python -m http.server 8000

# Jeśli masz Node.js i npx
npx serve

# Następnie otwórz: http://localhost:8000
```

## 📖 Instrukcja użycia

1. **Dodawanie rolek:**
   - Wpisz wagę rolki w kilogramach (np. 125.5)
   - Opcjonalnie: wpisz liczbę obrazków
   - Wybierz ilość rolek (domyślnie 1) - przydatne gdy masz kilka rolek o tej samej wadze
   - Kliknij "Dodaj" lub naciśnij Enter

2. **Kontynuacja zlecenia (opcjonalnie):**
   - Zaznacz checkbox "Kontynuacja zlecenia po poprzedniej zmianie"
   - Wpisz numer ostatniej rolki z poprzedniej zmiany (np. 20)
   - Twoje rolki będą numerowane od 21, 22, 23... w zleceniu
   - Wyświetlą się dwa numery: "Rolka (zlecenie): #21" i "Rolka (zmiana): #1"

3. **Przeglądanie podsumowania:**
   - U góry widoczne jest podsumowanie: liczba rolek, suma wag, suma obrazków

4. **Usuwanie rolek:**
   - Użyj przycisku "Usuń" przy konkretnej rolce
   - Lub "Wyczyść wszystko" aby usunąć wszystkie rolki (np. na początku nowej zmiany)

5. **Dane są automatycznie zapisywane** w przeglądarce - możesz odświeżyć stronę bez obaw o utratę danych

## 💡 Wskazówki

- Aplikacja działa najlepiej na urządzeniach mobilnych - trzymaj telefon przy stanowisku pracy
- **Ilość rolek zapamięta się** - jeśli ustawisz 3, zostanie 3 dopóki nie zmienisz ręcznie (przydatne gdy przez całą zmianę robisz te same ilości)
- **Numeracja rolek** pomaga w porównywaniu z papierowym raportem - "Rolka #5" w aplikacji = rolka nr 5 w raporcie
- **Kontynuacja zlecenia** - idealna gdy przejmujesz pracę po poprzedniej zmianie. Zobacz zarówno numer w całym zleceniu jak i numer swojej rolki
- Na koniec zmiany możesz zrobić zrzut ekranu podsumowania
- Dane są zapisywane lokalnie - jeśli wyczyścisz dane przeglądarki, stracisz historię
- To jest **jeden plik HTML** - możesz go skopiować na pendrive lub wysłać sobie mailem

## 🛠️ Technologie

- **Pojedynczy plik HTML** - wszystko w jednym pliku (CSS i JavaScript wbudowane)
- HTML5
- CSS3 (CSS Variables, Flexbox, Grid, responsywne)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## 📄 Licencja

Projekt open-source - możesz go swobodnie modyfikować i używać.
