<!-- 1. PRESENTATION -->
<!-- .slide: data-background-color="#000000" data-background="img/1_again.jpg" -->

## ENCORE UNE CONF SUR LA WEBPERF ?

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

Note:
Oui car perf essentielle
- 1.QUALITE de service User
- 2.COUT serveur et Bande passante
- 3.SEO / positionnement
- 4.Business taux de convers /rebond /transfo
- --> Juste rappel de qq chiffres

--

## Voyons ça de plus près...
<!-- .slide: data-background-color="#FFF" data-background="img/2_speed.jpg" -->

1. **Apprivoiser** la Webperf
2. **Axes d'optimisations génériques** VS ![WordPress](img/2_wordpress.png "Logo WordPress")
3. **Futur  de la Webperf avec**
  * HTTP/2
  * PHP7
  * MYSQL 5.7

Note:
Pour cette conf on vous propose
- 1.ABORDER les fondamentaux
- 2.ETUDIER LES AXES opti
- 3.PARLER DU FUTUR 

--

<!-- .slide: data-background-color="#FFF" data-background="img/2_profil.jpg" -->

Note:
ON VA QUAND MEME SE PRESENTER

--

![globalis](img/2_Globalis.png "Logo GLOBALIS")

N'hésitez pas à venir nous voir ! On recrute ! 

Note:
- SPECIALISE techno web autour de php
- possède un pôle dédié à WordPress et a une offre WebPerf

Ca tombe bien

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
  1. **EQUILIBRER** : coût de l'effort VS Besoin

Note:
* Sujet très vaste qui consite à Optimiser...
* C'est à dire : COMPRENDRE...

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

Note:
Au final : Gar. à l'Sprit Vision GLOB composante dev Web
- SRV : dépend Heb. considère...
- NAV : dépend spec (browserscope  fourni détail)
- RZO : important au vu de l'explosion de mobilité....

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_time.jpg" -->

## Améliorer la performance

  * **Temps**
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

Note: 
Du coup Améliorer Perf Consiste à
- AméL. Tps réponse
- Réduire PDT Content
- Réduire/OPTI NB REQ. NAV SRV
- Améliorer GLOBAL du DOM
- --> OBJ FINAL RESTE XP USER

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_tool.jpg" -->

## Outils

| Desktop                                               | En ligne                   |
| ---------------------------------------               |:---------------------------|
| [YSlow](http://yslow.org/)                            | [WebPageTest](http://www.webpagetest.org/)    |
| [Opquast Desktop](https://desktop.opquast.com/fr/)    | [GTmetrix](https://gtmetrix.com/)                     |
| Chrome / Firefox inspectors                           | [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)               |

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

Note:
- Je ne m'étale pas trop sur les outils de mesure.
- Juste savoir que Côté
- Notament WebPageTest
- Pensez aussi à vos navigateur Exemple de chrome PROPOSE Différentes INFOS.
- Dont un des trucs les + utiles WATERFALL

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

Note:
- Outil intéressant car visuel
- Affiche l'execution des requetes LIE PROT HTTP entre NAV/SRV
- Start Render : premier rendu visuel
- DOC Complete : page chargé


---

<!-- 3. AXES d'AMEMLIORATIONS ACTUELS - GENERAL-->

<!-- .slide: data-background-color="#dd392c" -->

#OPTIMISER

 > * En général ?
<br>
 > * Avec WordPress ?

Note: 
- Chargement du core efficace mais
- Tout dépend des thèmes et plugins
- Les optimisations ne sont pas automatiques
- Quels plugins pour la webperf ?
- Quelles bonnes pratiques de développement ?

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_optimisation.jpg" -->

## Utilisez le cache !
* Cache serveur / PHP / SQL
* Cache clients / Browser
* Reverse proxy
* object-cache.php, advanded-cache.php
<!-- .element: class="fragment" data-fragment-index="1" -->
* Transients API
<!-- .element: class="fragment" data-fragment-index="1" -->
* WP Super Cache, Batcache, W3 Total Cache, WP-Rocket ...
<!-- .element: class="fragment" data-fragment-index="1" -->

Note:
- opcode, mémoire, fichier
- expire headers
- varnish, spudpress, AMP
- dropins
- N plugins, N solutions

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_optimisation.jpg" -->

## Diminuez le nombre de requêtes !
* Concaténation, Sprites
* Icon-fonts
* Media-queries
* Que chargent les plugins ?
<!-- .element: class="fragment" data-fragment-index="1" -->
* minQueue, wp-better-minify
<!-- .element: class="fragment" data-fragment-index="1" -->
* Pre-processing du thème (css, js)
<!-- .element: class="fragment" data-fragment-index="1" -->

Note:
- Sage, theme-starter
- Solutions tout en un
- Mutualiser les ressources : ex ajax-loader.gif

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_optimisation.jpg" -->

## Allegez vos contenus !
* Compression gzip
* Minification, optimisation des images
* minQueue, wp-better-minify, Imagify
<!-- .element: class="fragment" data-fragment-index="1" -->
* WP 4.4 : <img srcset=".." sizes=".."
<!-- .element: class="fragment" data-fragment-index="1" -->

Note:
- gzip : gain immédiat et transparent
- 1 fichiers de 10 ressoucres < 10 fichiers
- Ne servir que le contenu approprié

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_optimisation.jpg" -->

## Soyez asyncrhones !
* C'est quoi ?
<!-- .element: class="fragment" data-fragment-index="1" -->
* Ligne de flotaison
<!-- .element: class="fragment" data-fragment-index="2" -->
* Lazy-load
<!-- .element: class="fragment" data-fragment-index="2" -->
* ajax-load-more
<!-- .element: class="fragment" data-fragment-index="3" -->
* Theming spécifique
<!-- .element: class="fragment" data-fragment-index="3" -->

Note:
- Ne charger que ce qui est visible, ou va l'être
- Du travail spécifique, après étude et stats
- Essentiel pour des grosses applications
- Exemple facebook & twitter

--

<!-- .slide: data-background-color="#FFF" data-background="img/3_wordpress.jpg" -->

## Les bonnes pratiques
* WordPress !
<!-- .element: class="fragment" data-fragment-index="1" -->
* Script-loader différentiel <!-- wp_enqueue_scripts, wp_enqueue_styles -->
<!-- .element: class="fragment" data-fragment-index="2" -->
* Choisissez les bons hooks !
<!-- .element: class="fragment" data-fragment-index="3" -->
* Respectez le template-hierarchy
<!-- .element: class="fragment" data-fragment-index="4" -->
* Étudiez les plugins tiers
<!-- .element: class="fragment" data-fragment-index="5" -->
* Méthode et theme-starters
<!-- .element: class="fragment" data-fragment-index="6" -->

Note:
- Utilisez ce que WordPress prévoit (mieux que vous)
- Images sizes -> theming
- Code propre -> archi, algorithmes
- Les plugins tiers, c'est le mal
- Documents de références : Checklist Opquast, Yahoo!'s best practices, Google PageSpeed rules, HTML5BP
- Penser volumétrie : répartition des charges, domain sharding, gros multisite, HyperDB

<!-- Factoriser, Lib de requetes, ne pas multiplier les ressources -->

---

<!-- 4. LE FUTURE DE LA WEBPERF -->

<!-- .slide: data-background-color="#dd392c" -->

#Futur de la WebPerf

> HTTP/2 | PHP5 | MySQL 5.7

Note:
Passon au futur de la web perf avec tout d'abord HTTP/2

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## De http/1.1...

* Pas d'évolution depuis 1999
* 6 à 13 connexions simultanées par domaine
* Requêtes séquentielles
* Envoie des entêtes plain text

Note:
Juste un petit retour sur HTTP/1.1.
- PROT pas evolué depuis
- LIMITE ... En fonction nav (browserScope)
- OFFRE un traitement séquentiel...
- ENVOI... pas de compression. Entete qui contiennent notament les info cookie potentiellement volumineux...

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## ...à http/2

  * **Standard IETF sortie début 2015**
  * **Reprends les bases de HTTP/1.1** 
    * (GET, POST, etc.) / status code / links / header
  * **Les nouveautés**
    * Connexion TCP unique persistante par domaine
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

Note:
- The internet Enginiering Task Force
- Reprend base http/1 -> assurer la compatibilité 
- Connexion TCP unique + multiplexing : permet l'execution de plusieurs req en para.
- Compression HPACK des entetes
- Anticipation qui propose les ressources utiles avant la demande du navigateur

--

## Protocole HTTP/1.1

![http](img/3_appel.png "http")

Note:
- Par requete on a une etape de connexion
- Tout est séquentiel

--

## Protocole HTTP/2

![http](img/3_appel_http2.png "http")

Note:
- 1.Connexion Unique : tout passe dans un seul tuyaux
- 2.Anticipation du serveur qui envoi les infos ici ...
- 3. et 4. on voit avantage du Multiplexing + connexion unique
- possibilité de requetes en parallèle
- 4. NOTAMENT le navigatueur peut meme requeté en parallèle des retours du serveur

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

## Support de HTTP/2

* Côté client :
  * La plupart des navigateurs
  * Imposent SSL (https)

* Côté serveur :
  * Apache
  * Nginx

Note:
- Qu'est ce qui supporte http/2 ?
- NAV ok sur tous les derniers
- SRV, pour reprendre les 2 plus utilisés support sur les dernières versions : 
- APACHE supporte moyannant config + Module tiers
- NGINX Juste des points de config

--

<!-- .slide: data-background-color="#FFF" data-background="img/5_http.jpg" -->

# Impacts sur les développements

* Devient inutile
  * Domain Sharding

* Inutile ? <!-- .element: class="fragment" data-fragment-index="1" -->
  * Concaténation<!-- .element: class="fragment" data-fragment-index="1" -->
  * Sprite<!-- .element: class="fragment" data-fragment-index="1" -->
  * PAS SI EVIDENT <!-- .element: class="fragment" data-fragment-index="2" -->

<!--

* Plus utile
  * Domain Sharding : plus de limitation en terme de connexions simultanées

* Toujours utile mais moins impactant
  * concaténation / sprite css : compression on sera toujours ammené à utilisé de la compression gzip pour le corps des réponse car seules les entêtes sontcompressés via HTTP2. On gagne plus en taille si on GZIP 1 fichier concaténé que si on GZIP les n fichiers qui le compose
  * Pre fetching : anticipé par le serveur push si le serveur est efficace

=> oui ca comble des lacune mais n'exhonère pas de travail sur la WebPerf

-->

Note:
- Et l'impact sur mon développement ?
- DOMAIN S. : Par Connexion Unique par domaine + Multiplexig. Contre productif
- La ou on peut se poser Q. c'est plus sur les sujets de concaténation.
- Parfois présenté comme inutile, on est un peu plus mitigé / aux tests qu'on a effectué.
- Temps : COMPLIQUE de se prononcé / cas par cas en fonction caractéristiques de la page impacté (Réseau / concat intelligent)
- Poid influence le temps : Concaténation reste la meilleure solution NOTAMENT SI on compresse le contenu (GZIP) : 1 gros fichier COMPRESSE < N petits fichiers compressé

--

# Impact sur le Waterfall

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
* 3 fois plus rapide que MySQL 5.6

![mysql_chart](img/5_mysql_chart.png "MysqlChart")

> Majeure pour WordPress - Consommation SQL très importante

<!--
- colonnes calculées
- type JSON
- Optimisation InnoDB

-->

--

## Quelques résultats (Côté Client)

* WordPress + WooCommerce + StoreFront + PHP 5.6 HTTP/1.1
* Page de liste de 22 produits
* Tests côté client

|               | Load time     | First Byte      | 
|:--------------|:--------------|:----------------|
| -> HTTP/2     | -5% à -10%    | 0% à -3%        |
| -> PHP 7      | -5% à -14%    | -22% à -28%     |
<!-- .element: class="fragment" data-fragment-index="1" -->

<!--
load     First   start render
php5 http1 5.201s   0.611s  1.895s
php5 http2 4.901s   0.582s  1.894s
php7 http2 4.674s   0.423s  1.391s

2.646s  1.338s  2.295s
2.575s  1.341s  2.294s
2.255s  1.053s  2.194s
-->

--

## Quelques résultats (Côté Serveur)

* Page de liste de 223 produits (504 requêtes SQL)
* Tests côté serveur PHP 5.6 VS PHP 7

| Memory Usage  | Page generation time  |
|:--------------|:----------------------|
| -28%          | -58%                  | 
<!-- .element: class="fragment" data-fragment-index="1" -->

---

<!-- 6. CONCLUSION -->

<!-- .slide: data-background-color="#dd392c" -->

## Pour Conclure...
* Webperf se pensent de la conception à la mise en prod d'un projet
* Domaine large et forte évolution ces prochaines années
* Logique général : équilibre entre les coûts et la mise en oeuvre

Note:
- Attention à ne pas dégrader : SEO, UX
- On optimise pour l'utilisateur, pas pour les outils de stats
- Comprendre et structurer ses applications
- Les technos sont de plus en plus efficaces
- Mais elles ne font pas l'appli à votre place : tout dépend des développements

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

---

## Liens et références
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](http://www.webpagetest.org/)
- [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- [Query Monitor](https://fr.wordpress.org/plugins/query-monitor/)
- [YSlow](http://yslow.org/)

---

## Documents de référence
- [Checklist Opquast](http://checklists.opquast.com/webperf/)
- [FAQ GTmetrix](https://gtmetrix.com/faq.html)
- [Recommandations GTmetrix (Yslow + PageSpeed)](https://gtmetrix.com/recommendations.html)
- [Yahoo!'s Exceptional Performance best practices](https://developer.yahoo.com/performance/rules.html)
- [YSlow Ruleset Matrix](http://yslow.org/ruleset-matrix/)
- [Google PageSpeed rules](https://developers.google.com/speed/docs/insights/rules)
- [Google Developers > fundamentals > performance](https://developers.google.com/web/fundamentals/performance/)

<!--
## Conférences liées
- [Webperf 2.0 (Paris-web 2015)](http://www.paris-web.fr/2015/conferences/webperf-20.php)
- [Comprendre et optimiser la base de données WordPress (WP-TECH 2014)](http://2014.wptech.fr/session/bdd-wordpress/)
- [Mise en place d’un cache serveur (WP-TECH 2014)](http://2014.wptech.fr/session/cache-serveur/)
- [Mon site est lent ! Que faire ? (WordCamp Paris 2015)](https://paris.wordcamp.org/2015/session/mon-site-est-lent-que-faire/)
-->