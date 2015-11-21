<!-- 1. PRESENTATION -->
## Qui sommes nous ?

Pierre Dargham
Julien OGER

--

## GLOBALIS
Reprendre la diapo ParisWeb

---

<!-- 2. GENERALITES -->
## Performance et développement Web

Lorsque l'on parle de performance, il faut prendre en compte 3 éléments sur lesquels on peut plus ou moins agir :
* Serveur : beaucoup négligé / machine sur dimensionné / aujourd'hui important sur d'autres considérations (écologie),
* Navigateur : dépend des temps de traitements côté serveur + bonnes pratiques côté front 
* Tuyaux : limitation physique et non maîtrisable / Limitation dans l'utilisation de ce tuyaux qui en fonction du protocole et du navigateur présente de facteurs limitants qu'il faut prendre en compte. Contrainte toujours croissante avec la prise en charge du mobile (3G / 4G) et de la localisation géographique (Zones isolées / distances / passage multiple noeuds et proxy / limitation politique...)

On peut parler de performance à plusieurs niveaux : performance montée en charge, la disponibilité, la robustesse, les délais de réponse.

--

## Webperf KESAKO ?

* Focus sur l'optimisation de l'affichage des pages de mon site :
1. Connaitre le fonctionnement / les limites
2. Optimiser mes développement
3. Adapter la configuration de mon environnement server

Time To First Byte, Time To Render, Time to Interaction

--

## L'impact de la Webperf :

* Expérience utilisateur
* SEO
* CA / ROI

## Que se passe-t-il quand j'interroge une page WEB ?

Schéma simple pour expliquer les problématiques d'appel d'une pages et les process en jeu
Reprendre le Schéma et positionner les éléments liés à la WebPerf

--

## Et WordPress dans tout ça ?
* Réponds au critères classique de la WebPerf (ca reste du Web en PHP)
* Passif de WordPress pas reconnu pour son orientation performance
* Possibilité de l'optimiser en utilisant des règles spécifiques
* De nombreux développements tiers utilisés non optimisés (ne dépend pas que du coeur)
--> si on n'y prends pas garde le danger est partout

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

## Spécificités Woocommerce
* Comment concaténer les scripts de woocommerce ?

--

## Quid des gros plugins tiers
* page builder ? acf ?

---

<!-- 4. LE FUTURE DE LA WEBPERF -->

## Http2

--

## PHP 7

---

<!-- 5. LES OUTILS -->

## Outils et ressources liées à la Webperf
* GTMetrix / WebPageTest / Google Page Speed
* WSlow / OPQuast / Jmeter
* Perso : Zeroload / Stéphane Rios / Jean Pierre Vincent

---

<!-- 6. CONCLUSION -->

## Pour Conclure...
* Webperf important et en pleine évolution
* Domaine très large : régionalisation / CDN / Profiling côté client / Domain sharding / Stratégie de chargement de contenu ...
* Logic général : équilibre entre les coûts et la mise en oeuvre (ca tombe bien une grande partie est relativement simple à mettre en oeuvre).

---

<!-- 7. QUESTIONS -->





