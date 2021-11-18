import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import './App.css';

const appId = 'N66N7FOPGI';
const apiKey = '41bc8ab6cb33007df5f2e3e41796cfa9';
const indexName = 'demo_ecommerce';

const searchClient = algoliasearch(appId, apiKey);

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">my-app</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="search-panel">
            <div className="search-panel__filters">
              <Configure facets={['*']} maxValuesPerFacet={20} clickAnalytics />
              <h2 className="search-panel__title">Brands</h2>
              <RefinementList attribute="brand" />
              <h2 className="search-panel__title">Categories</h2>
              <RefinementList attribute="categories" />
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={hit} />
      </p>
    </article>
  );
}

export default App;
