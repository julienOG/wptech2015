http://formations.alsacreations.fr/formation-performances-web.html
https://checklists.opquast.com/webperf/

https://codex.wordpress.org/Transients_API
http://www.alsacreations.com/article/lire/1439-data-uri-schema.html

https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.g120f70e9a_0130
resources hints (preload, prerender, preconnect)


http://blog.resoneo.com/2012/02/de-la-mesure-des-temps-de-chargement/
http://fr.slideshare.net/kennydee/initiation-webperf-comprendre-analyser-et-optimiser-les-performances-web-frontend
http://www.zdnet.fr/actualites/http-2-une-evolution-importante-du-protocole-du-web-notamment-pour-les-mobiles-39798198.htm
http://www.codeursenseine.com/assets/slides/introduction-webperf.pdf
http://www.browserscope.org/

https://openclassrooms.com/courses/les-requetes-http

https://pages.zend.com/rs/zendtechnologies/images/PHP7-Performance%20Infographic.pdf

---
8.2.  Server Push

   HTTP/2 allows a server to pre-emptively send (or "push") responses
   (along with corresponding "promised" requests) to a client in
   association with a previous client-initiated request.  This can be
   useful when the server knows the client will need to have those
   responses available in order to fully process the response to the
   original request.

---
Ajouter liens



http://www.webpagetest.org/result/151201_QC_GRK/1/details/ 
http://www.webpagetest.org/result/151201_88_GQH/1/details/

http://www.webpagetest.org/result/151201_7J_H34/
http://www.webpagetest.org/result/151201_TZ_GXS/

-- limite réseau 4Mb / dualcore 2,7go
http1 - php5 http://www.webpagetest.org/result/151201_Q7_J31/
http1 - php7 http://www.webpagetest.org/result/151203_C5_G6/
http2 - php5 http://www.webpagetest.org/result/151201_7C_HRN/
http2 - php7 http://www.webpagetest.org/result/151203_A2_1CB/


-- limite serveur 150mb / monocore 1,6go
http1 - php5 http://www.webpagetest.org/result/151202_PF_1A1S/
http1 - php7 http://www.webpagetest.org/result/151202_C5_1AFT/
http2 - php5 http://www.webpagetest.org/result/151202_JD_1AVE/
http2 - php7 http://www.webpagetest.org/result/151202_NR_1B2E/


-- serveur sans limite 
http1 - php5 http://www.webpagetest.org/result/151203_XH_114J/
http1 - php7 http://www.webpagetest.org/result/151203_E7_12ZR/
http2 - php5 http://www.webpagetest.org/result/151203_PN_139P/
http2 - php7 http://www.webpagetest.org/result/151203_PN_139P/


-- serveur classique mysql5.7
http1 - php5 http://www.webpagetest.org/result/151203_MQ_1B1Y/
http1 - php7 http://www.webpagetest.org/result/151203_EW_1CGT/
http2 - php5 http://www.webpagetest.org/result/151203_DH_1DPT/
http2 - php7

-- tests classiques
http1 http://www.webpagetest.org/result/151204_6V_3E8/
http2 http://www.webpagetest.org/result/151204_7X_3MY/



-- tests charge
affichage de 223 produits sur la page produit d'un woocommerce + storefront


mysql 5.6 / php 5.6

* Page generation time    
    3.6872 s

* Peak memory usage   
    38,061 kB

* Database query time 
    0.2715

* Database queries
    SELECT: 504

mysql 5.6 / php 7.0

* Page generation time    
    1.5818
    0.0% of 0s limit

* Peak memory usage   
    26,268 kB

* Database query time 
    0.2451

* Database queries
    SELECT: 504

mysql 5.7 / php 5.6

* Page generation time    
    3.7371

* Peak memory usage   
    38,062 kB

* Database query time 
    0.3247

* Database queries
    SELECT: 504

mysql 5.7 / php 7

* Page generation time    
    1.6491

* Peak memory usage   
    26,268 kB

* Database query time 
    0.2961

* Database queries
    SELECT: 504  


    Enhanced Speed: In benchmark tests using SysBench Read-only Point-Selects, at 1,024 connections, MySQL 5.7 delivered 1,600,000 queries per second (QPS) --  3x faster than MySQL 5.6.