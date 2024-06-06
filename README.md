## Frontend Progetto finale 2.0

- [repo backend](https://github.com/Francescodc92/pizzeria-backend-laravel-11)

## TODO

- aggiungere una transizione per il cambio rotta

## pagamenti

- effettuare la chiamata al backend per effettuare il pagamento
- trattare gli errori
- terminare il backend per il salvataggio degli ordini dopo il pagamento
- chiudere il modale del carrello una volta andati nella pagina di checkout e svuotarlo una volta effettuato il pagamento

## aggiungere una sezione/pagina per la lista degli ordini dell'utente dove potrà vedere gli ordini effettuati

## passi per riattivare il componente per il pagamento

- inserire il v-if nel componente checkout page
- decommentare il codice al monted nel componente checkout page
- decommentare il codice al monted nel componente payment

## bugs

- dare una sistemata alle funzioni del carrello dato che adesso salviamo anche il prodotto nel carrello
- osservare il comportamento del carrello al cambio dei dai tal backend
- se l'utente inserisce una pizza nel carrello e questa viene resa non disponibile al caricamento del carrello quella pizza andrà eliminata o verrà segnalata come non presente evitando l'ordine della stessa

Reservations

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
