/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'SOOBGGH3HD', '12189ca752d37a4b799a24bae115c29d'
);

const search = instantsearch({
  indexName: 'crayons',
  searchClient,
});

console.log(searchClient)

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article style="background-color:{{hex}};">
  <h1>{{color}}</h1>
</article>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
