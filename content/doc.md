Pensez Web-Performances avec WordPress
===================

Ce document rend compte des échanges et travaux préparatoires à la conférence ** * Pensez Web-Performances avec WordPress * ** qui sera donnée en décembre à Nantes lors du WP-TECH 2015. Pour modifier ce document, cloner le dépôt ** `git clone ssh://git@192.168.1.44/usr/local/apache/htdocs/git/wptech2015.git` ** et modifier le fichier ** `README.md` **

** * Auteurs : Julien Oger, Pierre Dargham * **

WP-TECH 2015
--------------------------------------------------------------------


### Informations pratiques

** Date ** : Samedi 05 décembre 2015, 14h00

** Lieu ** : Nantes, Faculté de Pharmacie, 9 Rue Bias

** Durée ** : 45 minutes

** Lien ** : <http://2015.wptech.fr/session/pensez-web-performances-avec-wordpress/>

** Résolution : 1280 * 768


### Résumé de la conférence

Votre site WordPress est lent ? Ce n'est pas une fatalité ! À travers de nombreux exemples issus de projets en production, cette conférence fera un tour des bonnes pratiques de développement et de configuration pour mettre en place des sites rapides, y compris pour des applications métiers complexes ou e-commerce.

Déterminant pour l'expérience utilisateur, important pour le référencement, les performances de votre site font partie des optimisations inévitables pour booster votre audience sur le web et améliorer votre taux de conversion.

La conférence sera également l'occasion de penser la bonne architecture des applications WordPress, les mécanismes spécifiques de l'outil pour accélérer la génération des pages et l'utilisation optimale de sa base de données.

Au programme :

- Optimisations Client (concaténation, expire headers, compression gzip ...)
- Optimisations Serveur (cache statique, cache opcode, cache objet, transients, serialization ...)
- Plugins et développements tiers : comment faire le bon choix ?
- Exemples de hacks réutilisables
- HTTP/2 et PHP 7.0 : ce qui va changer



Contenu
--------------------------------------------------------------------


### Plan

1. ** (05") ** Présentation des conférenciers, programme de la conférence
2. ** (10") ** D'où vient la lenteur des sites internet ? Comprendre ce qu'il se passe lors du téléchargement d'une page web
3. ** (10") ** Bonnes pratiques PHP et WordPress : comment rendre votre site plus rapide ?
4. ** (10") ** HTTP/2 et PHP 7.0 : ce qui va changer pour nous
5. ** (05") ** Conclusion
5. ** (15") ** Questions / Réponses

### Mots-clés / Brainstorming


** Général / théorie **

- requête HTTP
- conséquences des webperfs
- apache
- nginx ?
- choix des plugins tiers
- architecture des plugins et des thèmes
- HTTP/2
- PHP 7.0
- first view vs total rendering


** Techniques **

- concaténation
- minification
- expire headers
- fichier .htaccess
- compression gzip
- cache statique (html)
- cache opcode (apc, xcache, memcache)
- cache objet
- transients
- data-uri
- sprites
- CDN, cookie-free domain
- position des .js
- lazy-load, chargement asynchrone (attention au référencement !)
- ligne de flotaison
- format d'images et tailles des images : comment optimiser ?
- sharding
- resources hints (preload, prerender, preconnect)
- constantes wp-config.php
- compilation just-in-time
- optimisation des requêtes SQL et de la base WP
- débranchement de fonctions non utilisées sur les hooks core
- comment concaténer les scripts de woocommerce ?
- wp\_enqueue\_scripts, wp\_enqueue\_styles
- chargement des fonts
- icones et pictogrammes : data-uri ? sprite ? font ?
- page builder ? acf ?
- automatiser : theme-starter ? htaccess type
- et sur mobile ?
- faire les traitements lourds à l'enregistrement, et non à l'affichage
- volumétrie : fichiers media / base de données
- script-loader différentiel
- frameworks / theme-starter
- deployement : concat, optimize images, etc : gulp / grunt tasks, node pre-deploy
- imagify, CDN
- lazy-load : alm
- simplifier le dom


** Plugins **

- [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)
- [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
- [WP Rocket](http://wp-rocket.me/fr/)
- [MinQueue](https://fr.wordpress.org/plugins/minqueue/)
- [Ajax Load More](https://fr.wordpress.org/plugins/ajax-load-more/)
- [Soil](https://github.com/roots/soil)

### Texte




Support de présentation
--------------------------------------------------------------------


### markdown


### reveal.js




Démonstration
--------------------------------------------------------------------


### Environnement


### Site de test


### Benchmarks HTTP 1/2


### Benchmarks PHP 5/7



Liens et références
--------------------------------------------------------------------

### Outils de mesure

- [GTmetrix](https://gtmetrix.com/)
- [YSlow](http://yslow.org/)
- [WebPageTest](http://www.webpagetest.org/)
- [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
- [Query Monitor](https://fr.wordpress.org/plugins/query-monitor/)


### Documents de référence

- [Checklist Opquast](http://checklists.opquast.com/webperf/)
- [FAQ GTmetrix](https://gtmetrix.com/faq.html)
- [Recommandations GTmetrix (Yslow + PageSpeed)](https://gtmetrix.com/recommendations.html)
- [Yahoo!'s Exceptional Performance best practices](https://developer.yahoo.com/performance/rules.html)
- [YSlow Ruleset Matrix](http://yslow.org/ruleset-matrix/)
- [Google PageSpeed rules](https://developers.google.com/speed/docs/insights/rules)
- [Google Developers > fundamentals > performance](https://developers.google.com/web/fundamentals/performance/)


### Conférences liées

- [Webperf 2.0 (Paris-web 2015)](http://www.paris-web.fr/2015/conferences/webperf-20.php)
- [Comprendre et optimiser la base de données WordPress (WP-TECH 2014)](http://2014.wptech.fr/session/bdd-wordpress/)
- [Mise en place d’un cache serveur (WP-TECH 2014)](http://2014.wptech.fr/session/cache-serveur/)
- [Mon site est lent ! Que faire ? (WordCamp Paris 2015)](https://paris.wordcamp.org/2015/session/mon-site-est-lent-que-faire/)