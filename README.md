## Frontend Progetto finale 2.0

- [repo backend](https://github.com/Francescodc92/pizzeria-backend-laravel-11)

## TODO

- aggiungere una transizione per il cambio rotta

## aggiungere una sezione/pagina per la lista degli ordini dell'utente dove potrà vedere gli ordini effettuati

## bugs

- osservare il comportamento del carrello al cambio dei dati delle pizza nel backend (ad esempio un cambio di prezzo.)
  dato che le pizza del carrello sono salve anche nel localstorage assicurarsi che al cambio dei prezzi dal backend venga segnalato all'utente che quella pizza ha cambiato prezzo quindi opzioni

  1. eliminarla dal carrello
  2. segnalarlo in qualche modo
  3. aggiornare semplicemente la pizza con il nuovo prezzo dato che il cart prende gli elementi direttamente dal backend posso semplicemente compararli con quelli nello store e cambiarne il prezzo (è questa soluzione risolverebbe anche il problema delle pizze rese non disponibili)

- se l'utente inserisce una pizza nel carrello e questa viene resa non disponibile al caricamento del carrello quella pizza andrà eliminata o verrà segnalata come non presente evitando l'ordine della stessa

## Reservations

- valutare la possibilità di aggiungere una tabella reservations nel back per dare la possibilità di prenotare un tavolo
- sistemare il modale della prenotazione del tavolo per mostrare meglio i dati e per terminare la prenotazione una volta creata la funzionalità nel back

### Tecnologie:

- HTML
- CSS
- JAVASCRIPT
- TAILWIND CSS
- VUE TOAST NOTIFICATION
- VUE JS
- AXIOS
- SWIPER
- VUE ROUTER
- FONTAWESOME
- BRAINTREE (gestione pagamenti)
- Git e Github
