# 📊 Licznik Produkcji Rolek

Prosta aplikacja webowa do śledzenia produkcji rolek papieru podczas zmiany roboczej.

## ✨ Funkcje

- ➕ **Szybkie dodawanie rolek** - wprowadź wagę, opcjonalnie liczbę obrazków i ilość rolek
- 📈 **Automatyczne podsumowanie** - na bieżąco aktualizowana suma wag i obrazków
- 📋 **Lista wszystkich rolek** - z godziną dodania
- 🗑️ **Usuwanie wpisów** - pojedynczo lub wszystkich naraz
- 💾 **Automatyczny zapis** - dane zachowują się po odświeżeniu strony
- 📱 **Responsywny design** - działa na telefonie, tablecie i komputerze
- 🚀 **Działa offline** - nie wymaga połączenia z internetem

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

2. **Przeglądanie podsumowania:**
   - U góry widoczne jest podsumowanie: liczba rolek, suma wag, suma obrazków

3. **Usuwanie rolek:**
   - Użyj przycisku "Usuń" przy konkretnej rolce
   - Lub "Wyczyść wszystko" aby usunąć wszystkie rolki (np. na początku nowej zmiany)

4. **Dane są automatycznie zapisywane** w przeglądarce - możesz odświeżyć stronę bez obaw o utratę danych

## 💡 Wskazówki

- Aplikacja działa najlepiej na urządzeniach mobilnych - trzymaj telefon przy stanowisku pracy
- Na koniec zmiany możesz zrobić zrzut ekranu podsumowania
- Dane są zapisywane lokalnie - jeśli wyczyścisz dane przeglądarki, stracisz historię
- Używaj pola "Ilość rolek" gdy masz kilka rolek o identycznej wadze z jednego wyrzutu

## 🛠️ Technologie

- HTML5
- CSS3 (Flexbox, Grid, responsywne)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## 📄 Licencja

Projekt open-source - możesz go swobodnie modyfikować i używać.
