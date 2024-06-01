## Frontend Progetto finale 2.0

- [repo backend](https://github.com/Francescodc92/pizzeria-backend-laravel-11)

## TODO

- cambiare i link dell'header in router-links

-componente delle pizze

- effettuare una chiamata axios per prendere le pizze dal componente homepage
- salvare le pizze nello store per poi poterle recuperare sia dal componente che lista le pizze sia dalla pagina che mostra tutte le pizze ed eventualmente anche da una pagina show della singola pizza (ragionare bene sul effettuare una seconda chiamata al backend per recuperare la singola pizza o se farlo tramite un filtraggio di quelle nello store)
- creare la pagina di visualizzazione di tutte le pizze

Reservations

- valutare la possibilità di aggiungere una tabella reservations nel back per dare la possibilità di prenotare un tavolo
- sistemare il modale della prenotazione del tavolo per mostrare meglio i dati e per terminare la prenotazione una volta creata la funzionalità nel back

login/register
-inserire il modale per il login/registrazione e effettuare la chiamata api

- all'entrare di ogni rotta effettuare una chiamata axios al backend per verificare se ritorna uno user altrimenti eliminare lo user nel localStorage in modo da poter effettuare nuovamente il login
- verificare il comportamento del toast per gli errori nella istanza axios nel caso che il backend non ritorni lo user (perchè non sarebbe buono mostrare il tost con l'errore in questo caso)

### Tecnologie:

- HTML
- CSS
- JAVASCRIPT
- TAILWIND CSS
- VUE JS
- AXIOS
- SWIPER
- VUE ROUTER
- FONTAWESOME
- Git e Github
