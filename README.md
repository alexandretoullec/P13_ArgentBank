phase 1 : Authentification des utilisateurs.

Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
Utiliser Redux pour gérer le state de l'ensemble de l'application.
Ce que doit faire l’application (voir les détails pour chacune sur nos modèles de GitHub Issues) :
L'utilisateur peut visiter la page d'accueil
L'utilisateur peut se connecter au système
L'utilisateur peut se déconnecter du système
L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
L'utilisateur peut modifier le profil et conserver les données dans la base de données. 
 

Vous pouvez commencer par forker notre repo existant et suivre l’avancement du travail grâce aux modèles d’Issues GitHub que nous y avons incluses.

Nos ingénieurs back-end ont déjà créé toutes les API dont vous avez besoin. Vous trouverez toute la documentation Swagger à l'intérieur du repo.

 

Pour la phase 2 : Transactions, nous sommes encore en phase de conception. De notre côté, nous mettons au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :

de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
de visualiser les détails d'une transaction dans une autre vue ;
d'ajouter, de modifier ou de supprimer des informations sur une transaction.
Puisque vous gérez déjà l'application web pour la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les API devraient être modélisées du côté back end. Nous avons besoin que vous nous fournissiez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. 

Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

La méthode HTTP (ex. : GET, POST etc.)
La route (ex. : /store/inventory)
La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).
Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez pas besoin d'implémenter cette page). Assurez-vous simplement que le document est exporté vers un fichier YAML (c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans l'outil d'édition de Swagger.
