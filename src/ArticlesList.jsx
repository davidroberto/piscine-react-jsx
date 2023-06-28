const ArticlesList = () => {

  const articlesResponseFakeFromApi = [
    {
      id: 1,
      title: "Article 1",
      content: "Contenu article 1",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Contenu article 2",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Contenu article 3",
      image: "https://picsum.photos/200/300",
    },
  ];



  return (
    <div>
      {/* 
        on fait une boucle sur la variable articlesResponseFakeFromApi 
        qui contient les articles (faussement) récupérés depuis l'API
        La fonction .map permet de faire une boucle sur un tableau (comme la 
        fonction foreach)
        La map prend en parametre une fonction qui sera executée pour chaque 
        élément du tableau
        Ici, pour chaque élément du tableau, on retourne du JSX, permettant
        de créer une balise article avec les données de l'article
      */}
      {articlesResponseFakeFromApi.map((article) => (
        <article>
          <p>{article.title}</p>
          <p>{article.content}</p>
          <img src={article.image} alt={article.title} />
        </article>
      ))}
    </div>
  );
};

export default ArticlesList;
