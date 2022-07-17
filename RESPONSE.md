le lien vers l'exercice demandé : [https://tf1-test.vercel.app/](https://tf1-test.vercel.app/).

## À part React qui est obligatoire, vous pouvez utiliser les technos avec lesquelles vous êtes les plus à l’aise pour faire l’exercice

Concernant les technologies utilisées, j'ai gardé toute la stack utilisé par TF1 (React, TS, GraphQL via Apollo, TailwindCSS et j'ai rajouté le frameWork Next.js pour tout ce qui est SSR).

## Le temps estimé à passer sur ce test est d’environ 1h30

le temps passé sur l'exercice est environ 4 heures (je me suis permets de cloner le slider utilisé sur le site web de [TF1](https://www.tf1.fr/).
la raison pour laquelle j'ai choisi du cloner le slider du TF1 au lieu de refaire ce qui était donné sur Figma est que l'exercice ne précise en aucun cas le travail demandé, je ne savais pas est ce que je devais juste refaire le design du Figma ou y rajouter du code JS pour qu'il soit fonctionnel.

## Lister l’ensemble des questions que vous avez sur des spécifications manquantes.

Parmi les questions que je me suis posé au début de l'exercice :

- Qu'ce que je dois faire ? Comme j'ai précisé au-dessus, l'exercice donne quelques éléments d'entrée, mais il ne précise pas les éléments de sortie. En se basant sur ce qui est donné, je me suis dit que le l'exercice consiste à fetcher une API (en GraphQL) de programs et les afficher sur une page web en respectant le design donné.
- Pourquoi exactement la page devrait être en SSR (Server Side Rendering) ? alors que en SSG (Static Site Generation) l'optimisation sera beaucoup plus meilleure, car en SSR, la page sera créée au niveau serveur a chaque requête ce qui veut dire que le temps de traitement sera plus long par rapport la méthode SSG qui quant à elle créée la page au niveau serveur au moment du build, j'espère sincèrement pouvoir faire un entretien avec vous pour en discuter.

## Réfléchir à une (ou des) amélioration(s) possible dans le jeu de données?

Parmi les améliorations à proposer : Rajouter la catégorie // thème du programs comme c'est le cas sur le site TF1.

PS :

- concernant les données fournies, il y a quelques images dont l'url est erronée, du coup l'image ne s'affiche pas correctement sur la page web.

## Mettre le code ainsi que les questions à disposition via un repo github ou dans un codesanbox

Code sur [github](https://github.com/mezzouhri/tf1-test).
Lien vers l'app : [https://tf1-test.vercel.app/](https://tf1-test.vercel.app/)
