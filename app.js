// Klasa do zarządzania aplikacją
class RollTracker {
    constructor() {
        this.rolls = this.loadFromStorage();
        this.initElements();
        this.attachEventListeners();
        this.render();
    }

    // Inicjalizacja elementów DOM
    initElements() {
        this.form = document.getElementById('addRollForm');
        this.weightInput = document.getElementById('weight');
        this.imagesInput = document.getElementById('images');
        this.quantityInput = document.getElementById('quantity');
        this.rollsList = document.getElementById('rollsList');
        this.totalRolls = document.getElementById('totalRolls');
        this.totalWeight = document.getElementById('totalWeight');
        this.totalImages = document.getElementById('totalImages');
        this.clearAllBtn = document.getElementById('clearAllBtn');
    }

    // Dodanie event listenerów
    attachEventListeners() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    // Obsługa wysłania formularza
    handleSubmit(e) {
        e.preventDefault();

        const weight = parseFloat(this.weightInput.value);
        const images = parseInt(this.imagesInput.value) || 0;
        const quantity = parseInt(this.quantityInput.value) || 1;

        if (!weight || weight <= 0) {
            alert('Proszę wprowadzić prawidłową wagę');
            return;
        }

        if (quantity <= 0) {
            alert('Ilość rolek musi być większa niż 0');
            return;
        }

        // Dodaj rolki
        for (let i = 0; i < quantity; i++) {
            this.addRoll(weight, images);
        }

        // Wyczyść tylko pola wagi i obrazków (ilość rolek zostaje bez zmian)
        this.weightInput.value = '';
        this.imagesInput.value = '';
        this.weightInput.focus();

        // Zapisz i odśwież widok
        this.saveToStorage();
        this.render();
    }

    // Dodanie pojedynczej rolki
    addRoll(weight, images) {
        const roll = {
            id: Date.now() + Math.random(), // Unikalny ID
            weight: weight,
            images: images,
            timestamp: new Date().toISOString()
        };
        this.rolls.push(roll);
    }

    // Usunięcie rolki
    deleteRoll(id) {
        if (confirm('Czy na pewno chcesz usunąć tę rolkę?')) {
            this.rolls = this.rolls.filter(roll => roll.id !== id);
            this.saveToStorage();
            this.render();
        }
    }

    // Wyczyszczenie wszystkich rolek
    clearAll() {
        if (confirm('Czy na pewno chcesz usunąć wszystkie rolki? Tej operacji nie można cofnąć.')) {
            this.rolls = [];
            this.saveToStorage();
            this.render();
        }
    }

    // Obliczenie podsumowania
    calculateSummary() {
        const totalRolls = this.rolls.length;
        const totalWeight = this.rolls.reduce((sum, roll) => sum + roll.weight, 0);
        const totalImages = this.rolls.reduce((sum, roll) => sum + roll.images, 0);

        return { totalRolls, totalWeight, totalImages };
    }

    // Renderowanie widoku
    render() {
        // Aktualizacja podsumowania
        const { totalRolls, totalWeight, totalImages } = this.calculateSummary();
        this.totalRolls.textContent = totalRolls;
        this.totalWeight.textContent = totalWeight.toFixed(2);
        this.totalImages.textContent = totalImages;

        // Pokaż/ukryj przycisk czyszczenia
        if (totalRolls > 0) {
            this.clearAllBtn.style.display = 'block';
        } else {
            this.clearAllBtn.style.display = 'none';
        }

        // Renderowanie listy rolek
        if (this.rolls.length === 0) {
            this.rollsList.innerHTML = '<p class="empty-message">Brak rolek. Dodaj pierwszą rolkę powyżej.</p>';
            return;
        }

        // Sortuj rolki od najnowszych
        const sortedRolls = [...this.rolls].sort((a, b) =>
            new Date(b.timestamp) - new Date(a.timestamp)
        );

        this.rollsList.innerHTML = sortedRolls.map(roll => this.createRollElement(roll)).join('');

        // Dodaj event listenery do przycisków usuwania
        this.rollsList.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseFloat(e.target.dataset.id);
                this.deleteRoll(id);
            });
        });
    }

    // Tworzenie elementu HTML dla rolki
    createRollElement(roll) {
        const date = new Date(roll.timestamp);
        const timeString = date.toLocaleTimeString('pl-PL', {
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="roll-item">
                <div class="roll-info">
                    <div class="roll-details">
                        <div class="roll-detail">
                            <strong>Waga:</strong> ${roll.weight.toFixed(2)} kg
                        </div>
                        ${roll.images > 0 ? `
                            <div class="roll-detail">
                                <strong>Obrazki:</strong> ${roll.images}
                            </div>
                        ` : ''}
                    </div>
                    <div class="roll-time">Dodano: ${timeString}</div>
                </div>
                <div class="roll-actions">
                    <button class="btn-delete" data-id="${roll.id}">
                        Usuń
                    </button>
                </div>
            </div>
        `;
    }

    // Zapis do localStorage
    saveToStorage() {
        try {
            localStorage.setItem('rollTrackerData', JSON.stringify(this.rolls));
        } catch (e) {
            console.error('Błąd zapisu do localStorage:', e);
            alert('Nie udało się zapisać danych. Sprawdź ustawienia przeglądarki.');
        }
    }

    // Odczyt z localStorage
    loadFromStorage() {
        try {
            const data = localStorage.getItem('rollTrackerData');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Błąd odczytu z localStorage:', e);
            return [];
        }
    }
}

// Inicjalizacja aplikacji po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
    new RollTracker();
});
