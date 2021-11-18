import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  ExperimentalDynamicWidgets,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('N66N7FOPGI', '41bc8ab6cb33007df5f2e3e41796cfa9');

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
        <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
          <div className="search-panel">
            <div className="search-panel__filters">
              <Configure facets={['*']} maxValuesPerFacet={20} />
              <ExperimentalDynamicWidgets fallbackWidget={RefinementList}>
                <RefinementList attribute="ais.dynamicWidgets" />
                <RefinementList attribute="brand" />
                <RefinementList attribute="categories" />
              </ExperimentalDynamicWidgets>
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

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="brand" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
