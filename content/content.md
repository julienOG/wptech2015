<!-- 1. PRESENTATION -->

## ENCORE UNE CONF SUR LA WEBPERF ???!!!

--

## La webperf est essentiel !

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

## Sujets abordés...

* Retour sur les **Généralités sur la Webperf** et **Axes d'optimisations génériques**
* **La WebPerf dans WordPress**
* **Future de la WebPerf : HTML2 et PHP7**

--

## Qui sommes nous ?

* Pierre Dargham
* Julien OGER

--

## GLOBALIS

---

<!-- 1. GENERALITES -->

## Webperf KESAKO ?

* **Optimisation de l'affichage des pages de mon site**
  1. COMPRENDRE : spécificités protocole et navigateur
  1. OPTIMISER : contraintes actuelles
  1. APREHENDER : contraintes futures

* Vision globale essentielle
  * Maitrise total : partie serveur
  * Maitrise partielle : partie navigateur
  * Maitrise quasi nulle : Réseau

<!--
Lorsque l'on parle de performance, il faut prendre en compte 3 éléments sur lesquels on peut plus ou moins agir :
* Serveur : beaucoup négligé / machine sur dimensionné / aujourd'hui important sur d'autres considérations (écologie),
* Navigateur : dépend des temps de traitements côté serveur + bonnes pratiques côté front 
* Tuyaux : limitation physique et non maîtrisable / Limitation dans l'utilisation de ce tuyaux qui en fonction du protocole et du navigateur présente de facteurs limitants qu'il faut prendre en compte. Contrainte toujours croissante avec la prise en charge du mobile (3G / 4G) et de la localisation géographique (Zones isolées / distances / passage multiple noeuds et proxy / limitation politique...)

On peut parler de performance à plusieurs niveaux : performance montée en charge, la disponibilité, la robustesse, les délais de réponse.
-->

--

## Qu'est ce qu'on entend par Optimisation

* **Optimisation**
  * **Temps** : TTFB / TTR / RRI / TTFC/ speed index
  * **Poids** : poids moyen des pages
  * **Communication** : nombre de requettes
  * **Qualité** : complexité / optimisation du DOM

* OBJECTIF : AMELIORER L'EXPERIENCE UTILISATEUR


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

## Outils

* En ligne
  * GTMetrix
  * WebPageTest
  * Google Page Speed

* En local
  * YSlow
  * OPQuast
  * Jmeter

--

## Que se passe-t-il quand j'interroge une page WEB ?

![logo](img/waterfall.png "Logo Title Text 2")

--

## Et WordPress dans tout ça ?
* Structure saine pour faire de la WebPerf
* Plusieurs points d'optimisation prévus ...
* ... mais pas automatique

* Warning sur les développements tiers
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

## Concaténation

--

## Minification

--

## Sprite CSS

--

## Positionnement des JS

--

## compilation just-in-time

--

## Gestion des images

--

## icones et pictogrammes : data-uri ? sprite ? font ?

--

## data-uri

--

## les fonts

--

## Lazy load
* ligne de flotaison

--

## preconnect

--

## Cache
* Cache statique
* Cache Opcode
* Cache Objet

--

## Expire header

--

## Compression Gzip / Deflate

--

## Spécificité Apache : configuration .htaccess

--

## Domain sharding

--

## CDN, cookie-free domain

--

## Quid du mobile

---

<!-- 3.bis AXES d'AMEMLIORATIONS ACTUELS - WORDPRESS -->

## wp-config
* Constante

--

## .htaccess type

--

# wp_enqueue_scripts, wp_enqueue_styles

--

## Optimisation de la base de donnée
* optimisation des requêtes SQL et de la base WP

--

## pre_get_posts

--

## Alléger le hook Core
* Débranchement de fonctions non utilisées sur les hooks core

--

## Traitement en amont de l'affichage
* faire les traitements lourds à l'enregistrement, et non à l'affichage

--

## volumétrie : fichiers media / base de données

--

## Transients

--

## Automatiser : quid d'un theme starter

--

## Cas du multisite

--

## Spécificités Woocommerce
* Comment concaténer les scripts de woocommerce ?

--

## Quid des gros plugins tiers
* page builder ? acf ?

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
    * Priorisation des requêtes / gestion de dépendances / anticipation des connexions

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


---

<!-- 6. CONCLUSION -->

## Pour Conclure...
* Webperf important et en pleine évolution
* Domaine très large : régionalisation / CDN / Profiling côté client / Domain sharding / Stratégie de chargement de contenu ...
* Logic général : équilibre entre les coûts et la mise en oeuvre (ca tombe bien une grande partie est relativement simple à mettre en oeuvre).

---

<!-- 7. QUESTIONS -->

## Question ?!

