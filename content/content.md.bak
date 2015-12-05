<!-- 1. PRESENTATION -->
<!-- .slide: data-background-color="#000000" data-background="img/1_again.jpg" -->

## ENCORE DE LA WEBPERF ?

--

## La webperf : un fondamental !

* Qualité de service
* Couts
* SEO
* Business

|               | Délais        | Impact                        |
| ------------- |:--------------|:------------------------------|
| **AMAZON**    | + 100ms       | -1%   <small>_CA_</small>     |
| **BING**      | + 1s          | -2,8% <small>_CA_</small>     |
| **Yahoo**     | + 400ms       | -10%  <small>_Traffic_</small>|
<!-- .element: class="fragment" data-fragment-index="1" -->

<!--

Impact sur le business, CF stéphane RIOS selon de nombreuses études Amazon, Google, Yahoo, etc.
Amazon : 100ms = 1% CA
Google : référencemen naturel impact sur le référencement au dela de 4s de chargement
Yahoo : +400ms = 10% en moins de traffic (Yahoo)

Qualité de service
↗ Expérience client
↗ Satisfaction

Réduction des coûts
↘ Consommation de bande passante
↘ Charge serveur
↗ QualityScore AdWords

SEO
↗ Position dans les résultats
↗ Crawl & fraicheur de l'index

Business
↗ Convertion
↗ Taux de transformation
↗ Rebonds

-->

--

## Voyons ça de plus près...
<!-- .slide: data-background-color="#FFF" data-background="img/2_speed.jpg" -->

1. **Apprivoiser** la Webperf
2. **Axes d'optimisations génériques** VS ![WordPress](img/2_wordpress.png "Logo WordPress")
3. **Futur  de la Webperf avec**
  * HTTP/2
  * PHP7
  * MYSQL 5.7

--

<!-- .slide: data-background-color="#FFF" data-background="img/2_profil.jpg" -->

--

![globalis](img/2_globalis.png "Logo GLOBALIS")

---

<!-- 1. GENERALITES -->

<!-- .slide: data-background-color="#dd392c" -->

# Apprivoiser la WebPerf

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_up.jpg" -->

## Performance Web

**Optimisation de l'affichage des pages de mon site**
  1. **COMPRENDRE** : spécificités protocole et navigateur
  1. **OPTIMISER** : contraintes actuelles
  1. **APREHENDER** : contraintes futures

--

## Vision globale

![reseau](img/3_reseau.png "Réseau")

|               | Maitrise           |
| ------------- |:-------------------|
| **Serveur**   | Totale (ou presque)|
| **Navigateur**| Limitée / [BrowserScope](http://www.browserscope.org/)|
| **Réseau**    | Quasi-nulle        |
<!-- .element: class="fragment" data-fragment-index="1" -->

<!--
* Focus sur l'optimisation de l'affichage des pages de mon site  :
1. Connaitre le fonctionnement / les limites / spécifictés navigateur (browserScope.org / latence / connexions simultanées par domaine / Fonctionnement CSS /JS, etc.) / limitation du nombre de connexion simultanée 6 à 8 (13 pour IE11) + temps de négociation TCP 100ms
2. Optimiser mes développement au niveau servereur et Navigateur
3. Appréhender les contraintes futures
-->

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_time.jpg" -->

## Améliorer la performance

  * **Temps** : TTFB / TTR / TTI
  * **Poids**
  * **Communication** : nombre de requettes
  * **Qualité** : complexité / optimisation du DOM

> **OBJECTIF CLE : L'EXPERIENCE UTILISATEUR**
<!-- .element: class="fragment" data-fragment-index="1" -->

<!--
* **Amélioration en terme de : **
  * **Temps** : Time To First Byte, Time To Render, Time to Interaction
  * **Poids** : poids moyen des pages / HTML / images / CSS JS
  * **Communication** : nombre de requettes limité le nombre de requete (limite navigateur + temps de négociation de 100ms à chaque fois)
  * **Qualité** : complexité / optimisation du DOM
-->

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_tool.jpg" -->

## Outils

| Desktop                                               | En ligne                   |
| ---------------------------------------               |:---------------------------|
| [YSlow](http://yslow.org/)                            | [WebPageTest](http://www.webpagetest.org/)    |
| [Opquast Desktop](https://desktop.opquast.com/fr/)    | [GTmetrix](https://gtmetrix.com/)                     |
|                                                       | [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)               |

> **Pensez à utiliser votre navigateur**
  * Outils développeurs
  * Informations utiles
  * Simulation réseau/terminaux



<!--
Coupler à un outil d'analytics tel que Google Analytics ou Dynatrace pour faire le parralèle avec les taux de rebonds, de conversion...
Navigateur :
- Information sur taille de fichiets et temps
- Offre les outils de simulation réseau / terminaux pour les tests
-->

--

## Protocole HTTP/1.1

![http](img/3_http.png "http")

<!--
HTTP/1.1
* Suite de requetes séquentielles
* requete : entete (host / cookie / type de connexion close|keepalive /content-type / content-length) + corps 
* réponse : status + entete (date / serveur / content type / content-length / set-cookie) + corps
-->

--

## Waterfall

![waterfall](img/3_waterfall.png "http")
<!--
Désolé pour le test un peu foireux ce jour la =)
Waterfall
* Start render : premier rendu à l'écran
* Dom Content Loaded : tous le html est chargé
* Document complete : fin de chargement de la page
-->

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_wordpress.jpg" -->

## Et WordPress dans tout ça ?
* Structure saine pour la Webperf
* Plusieurs points d'optimisation prévus ...
* ... mais pas automatiques

* WARNING sur les développements tiers :
  * Plugins
  * Thèmes premiums


Note: * Réponds au critères classique de la WebPerf (ca reste du Web en PHP)
* Passif de WordPress pas reconnu pour son orientation performance
* Possibilité de l'optimiser en utilisant des règles spécifiques
* De nombreux développements tiers utilisés non optimisés (ne dépend pas que du coeur)
--> si on n'y prends pas garde le danger est partout

* intéret du BO VS FO

* Nous nous basons aujourd'hui sur nos expériences notamment sur la reprise de code source lié à la TMA pour les exemples d'optimisations

---

<!-- 3. AXES d'AMEMLIORATIONS ACTUELS - GENERAL-->

<!-- .slide: data-background-color="#dd392c" -->

#Axes d'optimisations

> Génériques VS WordPress

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_optimisation.jpg" -->

## Libellé de l'optimisation
* Information 1
* Information 2

**Optimisation pour WordPress**
* Information 1
* Information 2

```php
var s = "JavaScript syntax highlighting";
alert(s);
```


--

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

<!-- 4. LE FUTURE DE LA WEBPERF -->

<!-- .slide: data-background-color="#dd392c" -->

#Futur de la WebPerf

> HTTP/2 | PHP5 | MySQL 5.7

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## De http/1.1...

* Pas d'évolution depuis 1999
* 6 à 13 connexions simultanées par domaine
* Requêtes séquentielles
* Envoie des entêtes plain text

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## ...à http/2

  * **Standard IETF sortie début 2015**
  * **Reprends les bases de HTTP/1.1** 
    * (GET, POST, etc.) / status code / links / header
  * **Les nouveautés**
    * Connexion TCP unique persistante
    * Multiplexing
    * HPACK compression standard
    * Server push / Server Hints

<!--  IETF = The Internet Engineering Task Force

methode de transmission (GET, POST, etc.) / code status / formalisme des header  

Principales nouveautés :
* Connexion tcp unique - message/requetes qui vont circuler dans un tuyaux en parralèle sans limites de connexion simultanés
* Multiplexing : ces messages qui sont traités de manières asynchrones
* HPACK : compression des headers / en plus de la compression du corps qu'on a déjà aujourd'hui avec GZIP
* Serveur Push : le serveur anticipe en envoyant de manière proactive les contenu qu'il juge nécessaire associés à la page courante (CSS notamment)
* Server Hints : juste URL envoyé au client qui choisi d'aller chercher la ressource ou de prendre dans son cache
-->

--

## Protocole HTTP/1.1

![http](img/3_appel.png "http")

--

## Protocole HTTP/2

![http](img/3_appel_http2.png "http")

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## Support de HTTP/2

* Côté client :
  * La plupart des navigateurs
  * Imposent SSL (https)

* Côté serveur :
  * Apache
  * Nginx

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

# Impacts sur les développements

* Devient inutile
  * Domain Sharding

* Inutile ? <!-- .element: class="fragment" data-fragment-index="1" -->
  * Prefetching<!-- .element: class="fragment" data-fragment-index="1" -->
  * Concaténation<!-- .element: class="fragment" data-fragment-index="1" -->
  * Sprite CSS<!-- .element: class="fragment" data-fragment-index="1" -->

> PAS SI EVIDENT <!-- .element: class="fragment" data-fragment-index="2" -->

<!--

* Plus utile
  * Domain Sharding : plus de limitation en terme de connexions simultanées

* Toujours utile mais moins impactant
  * concaténation / sprite css : compression on sera toujours ammené à utilisé de la compression gzip pour le corps des réponse car seules les entêtes sontcompressés via HTTP2. On gagne plus en taille si on GZIP 1 fichier concaténé que si on GZIP les n fichiers qui le compose
  * Pre fetching : anticipé par le serveur push si le serveur est efficace

=> oui ca comble des lacune mais n'exhonère pas de travail sur la WebPerf

-->

--

# Impact sur le Waterfall

![waterfall2](img/waterfall2.png "WaterFall 2")

<!--
Attention au cas réels / j'ai trouvé pas mal de tests avec des pages improbables contenants 53 CSS de 100ko et 
-->

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

# http2 - Solution miracle ?
* Quid de la maturité ?

* Dépendance forte des évolutions côté serveur et navigateur
  * Maintien de la connexion TCP
  * Serveur Push

* Dépendance au contexte : serveur / réseau

<!--
HTTP/2 n'est pas une solution miracle. Nous restons fortement dépendant des futures évolutions des navigateurs et des serveurs
Manque d'une vision à long terme sur pas mal de problématique et limites liées aux spécificités de http2
- maintien de la connexion en sommeil
- pertinence du serveur push si mal mis en oeuvre pourrait ne pas avoir l'effet recherché
-->

--


<!-- 4. LE FUTURE DE LA WEBPERF PHP7 -->

## PHP 7

* Nouvelles features
* Amélioration de la gestion mémoire
* Amélioration des performances

![php7](img/5_php7_wp.png "PHP7")

<!--
- Spaceship opérator <=> 
- classes anonymes
- Syntaxe unicode
- Opérateur Coalesce NULL ?
- Generator delegation utilisation de yeld
- Engine exception
-->

--

<!-- 4. LE FUTURE DE LA WEBPERF MySQL 5.7 -->

## MySQL 5.7

* Nouvelles features
* Amélioration globale des perfs
* 3 fois plus rapide que MySQL 5.6

> Majeure pour WordPress - Consommation SQL très importante

<!--
- colonnes calculées
- type JSON
- Optimisation InnoDB

-->

---

<!-- 6. CONCLUSION -->

<!-- .slide: data-background-color="#dd392c" -->

## Pour Conclure...
* Webperf se pensent de la conception à la mise en prod d'un projet
* Domaine large et forte évolution ces prochaines années
* Logique général : équilibre entre les coûts et la mise en oeuvre

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
- [WebPageTest](http://www.webpagetest.org/)
- [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- [Query Monitor](https://fr.wordpress.org/plugins/query-monitor/)
- [YSlow](http://yslow.org/)

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