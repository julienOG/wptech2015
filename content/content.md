<!-- 1. PRESENTATION -->

## ENCORE UNE CONF SUR LES WEBPERF ?

* **Généralités sur la WebPerfs**
* **Axes d'optimisations**
* **La WebPerf dans WordPress**
* **Future de la WebPerf : HTML2 et PHP7**

--

## Qui sommes nous ?

* Pierre Dargham
* Julien OGER

--

## GLOBALIS

---

<!-- 2. GENERALITES -->
## Web et performance

* **Constituantes du développement Web**
  * Développement back / Serveur
  * Développement front / Navigateur
  * Connexion : subit par les développeur

* **Performance / Plusieurs dimensions**
  * Montée en charge
  * Disponibilité du servuer
  * Robustesse
  * Délais de réponse

<!--
Lorsque l'on parle de performance, il faut prendre en compte 3 éléments sur lesquels on peut plus ou moins agir :
* Serveur : beaucoup négligé / machine sur dimensionné / aujourd'hui important sur d'autres considérations (écologie),
* Navigateur : dépend des temps de traitements côté serveur + bonnes pratiques côté front 
* Tuyaux : limitation physique et non maîtrisable / Limitation dans l'utilisation de ce tuyaux qui en fonction du protocole et du navigateur présente de facteurs limitants qu'il faut prendre en compte. Contrainte toujours croissante avec la prise en charge du mobile (3G / 4G) et de la localisation géographique (Zones isolées / distances / passage multiple noeuds et proxy / limitation politique...)

On peut parler de performance à plusieurs niveaux : performance montée en charge, la disponibilité, la robustesse, les délais de réponse.
-->

--

## Webperf KESAKO ?

* **Optimisation de l'affichage des pages de mon site**
  1. COMPRENDRE : spécificités protocole et navigateur
  1. OPTIMISER : aujourd'hui
  1. APREHENDER : demain
  1. VISION GLOBALE

* **Optimisation**
  * **Temps** : TTFB / TTR / RRI / TTFC/ speed index
  * **Poids** : poids moyen des pages
  * **Communication** : nombre de requettes
  * **Qualité** : complexité / optimisation du DOM
  * --> AMELIORER L'Expérience utilisateur

<!--
* Focus sur l'optimisation de l'affichage des pages de mon site  :
1. Connaitre le fonctionnement / les limites / spécifictés navigateur (browserScope.org / latence / connexions simultanées par domaine / Fonctionnement CSS /JS, etc.) / limitation du nombre de connexion simultanée 6 à 8
2. Optimiser mes développement
3. Adapter la configuration de mon environnement server serveur d'application / reverses proxy...

Start render / Document complete / fully loaded / requests / Bytes In

Time To First Byte, Time To Render, Time to Interaction, speed index, temps de chargement moyen, poid moyen des pages
nombre de requettes, complexité du DOM, time to first click
-->

--

## L'impact de la Webperf :

* Expérience / utilisation utilisateur
* Qualité du service proposé (perception)
* SEO
* CA / ROI

<!--
Impact sur le business, CF stéphane RIOS selon de nombreuses études Amazon, Google, Yahoo, etc.
Amazon : 100ms = 1% CA
Google : référencemen naturel impact sur le référencement au dela de 4s de chargement
Yahoo : +400ms = 10% en moins de traffic (Yahoo)
-->

--

<!-- 5. LES OUTILS -->

## Outils

* En ligne
  * GTMetrix
  * WebPageTest
  * Google Page Speed

* Outils desktop
  * YSlow
  * OPQuast
  * Jmeter

--

## Que se passe-t-il quand j'interroge une page WEB ?

Schéma simple pour expliquer les problématiques d'appel d'une pages et les process en jeu
Reprendre le Schéma et positionner les éléments liés à la WebPerf

présenter un waterfall

--

## Et WordPress dans tout ça ?
* Réponds au critères classique de la WebPerf (ca reste du Web en PHP)
* Passif de WordPress pas reconnu pour son orientation performance
* Possibilité de l'optimiser en utilisant des règles spécifiques
* De nombreux développements tiers utilisés non optimisés (ne dépend pas que du coeur)
--> si on n'y prends pas garde le danger est partout

* intéret du BO VS FO

* Nous nous basons aujourd'hui sur nos expériences notamment sur la reprise de code source lié à la TMA pour les exemples d'optimisations

---

<!-- 3. AXES d'AMEMLIORATIONS ACTUELS - GENERAL-->

## Cache serveur
* Cache opcode
* Cache mémoire (-> object-cache.php)
* Cache fichier (-> advanded-cache.php)
* Cache mysql
* Transients API
* (reverse proxy, https://spudpress.com/)

--

## Cache client
* Expire headers
* 2nd view / cache plein

--

## Diminuer le nombre de requêtes
* Concaténation
* Sprites
* Data-URI
* Icon-fonts
* Chargement asynchrone / lazy-load

--

## Diminuer le poids des ressources
* Minification
* Optimisation des images
* Compression gzip
* Servir des ressources adaptées au support

--

## Prioriser les ressources
* Positions des css / js
* Ligne de flotaison
* Attention au navigateur

--

## Diminuer le temps de dialogue
* Cookies-free domains
* SSL ? Keep-alive ?
* Domain sharding ? CDN ...

--

## Particularités WordPress
* wp_enqueue_scripts, wp_enqueue_styles
* Nettoyer la base de données
* Plugins tiers ? Thèmes premium ?
* Template-hierarchy
* Utilisez les hooks !
* Traitements en Back-Office et non à l'affichage

--

## Considérations généales
* 1 même calcul doit se faire 1 seule fois
* Ayez des méthodes : frameworks, theme-starter, skeletons

---

<!-- 4. LE FUTURE DE LA WEBPERF HTTP2 -->

## De http/1.1...

* Pas d'évolution depuis 1999
* N connexions par domaine
* envoi plain text
* Dépendance navigateur

--

## ...à http/2

* http/2 / ~~SPDY~~
  * Standard IETF sortie début 2015
  * Reprends les bases de http 
    * (GET, POST, etc.) / status code (404) / links / header
  * Ajoute 4 nouvelles features
    * Une seule connexion persisante
    * Multiplexed connexion
    * HPACK compression standard - compression du header / encodage binaire
    * Priorisation des requêtes et gestion de dépendances

--

## Pré-requis en terme de développement
* Compatibilité navigateur OK mais...
  * necessite SSL
  * pb limités sur la perfs car 1 seule connexion persistante

* Compatibilité serveur OK mais...
  * Apache : Configuration ++
  * NGinx : Natif

--

# Impacts sur les développements

* A oublier
  * concaténation
  * sprite CSS
  * Inline developement
  * Domain Sharding

--

# Impact sur le Waterfall

<!-- reprendre l'exemple de Waterfall avant / apres + explications -->

--

# http2 une solution parfaite ?
* Solution mûre ?

---


<!-- 4. LE FUTURE DE LA WEBPERF PHP7 -->

## PHP 7
* réécriture du moteur
* compilation just-in-time

---

<!-- 6. CONCLUSION -->

## Pour Conclure...
* Webperf important et en pleine évolution
* Domaine très large : régionalisation / CDN / Profiling côté client / Domain sharding / Stratégie de chargement de contenu ...
* Logic général : équilibre entre les coûts et la mise en oeuvre (ca tombe bien une grande partie est relativement simple à mettre en oeuvre).

---

<!-- 7. QUESTIONS -->

## Question ?!


---

<!-- 8. A VOIR -->

## Plugins WordPress
- [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
- [WP Rocket](http://wp-rocket.me/fr/)
- [MinQueue](https://fr.wordpress.org/plugins/minqueue/)
- [Ajax Load More](https://fr.wordpress.org/plugins/ajax-load-more/)
- [Soil](https://github.com/roots/soil)

## Liens et références
- [GTmetrix](https://gtmetrix.com/)
- [YSlow](http://yslow.org/)
- [WebPageTest](http://www.webpagetest.org/)
- [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- [Query Monitor](https://fr.wordpress.org/plugins/query-monitor/)

## Documents de référence
- [Checklist Opquast](http://checklists.opquast.com/webperf/)
- [FAQ GTmetrix](https://gtmetrix.com/faq.html)
- [Recommandations GTmetrix (Yslow + PageSpeed)](https://gtmetrix.com/recommendations.html)
- [Yahoo!'s Exceptional Performance best practices](https://developer.yahoo.com/performance/rules.html)
- [YSlow Ruleset Matrix](http://yslow.org/ruleset-matrix/)
- [Google PageSpeed rules](https://developers.google.com/speed/docs/insights/rules)
- [Google Developers > fundamentals > performance](https://developers.google.com/web/fundamentals/performance/)

## Conférences liées
- [Webperf 2.0 (Paris-web 2015)](http://www.paris-web.fr/2015/conferences/webperf-20.php)
- [Comprendre et optimiser la base de données WordPress (WP-TECH 2014)](http://2014.wptech.fr/session/bdd-wordpress/)
- [Mise en place d’un cache serveur (WP-TECH 2014)](http://2014.wptech.fr/session/cache-serveur/)
- [Mon site est lent ! Que faire ? (WordCamp Paris 2015)](https://paris.wordcamp.org/2015/session/mon-site-est-lent-que-faire/)