
import React from "react"
import Layout from '../components/Layout'
import algoliasearch from "algoliasearch/lite"
import { createRef , useState } from "react"
import { InstantSearch,SearchBox,Configure} from "react-instantsearch-dom"
import SearchResult from '../components/SearchResult'
const ClickOutHandler = require('react-onclickout');


export default function Search() {
   
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus,hasInput] = useState()
  const [state, setState] = useState({
    hasFocus: false,
    setFocus: false,
    hasInput: false,
  })
  const searchClient = algoliasearch(
    `JF1FUFUB9G`,
    `b67d55eb4e001d86332ea49f014f7830`
  )
   const searchIndices = [
  { name: `posts`, title: `Blog Posts` },
 ]


 const onClickOut = (e) => {
  document.getElementsByClassName('ais-SearchBox-input')[0].value = '';
  setState(state => ({
    hasInput: false,
  }));
}
 
 
	return(
      <Layout>

      <h3> Αναζήτηση: </h3> 
       <div ref={rootRef}>
       <ClickOutHandler onClickOut={onClickOut}>
       
        <InstantSearch
          searchClient={searchClient}
          indexName={searchIndices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
         
         <Configure hitsPerPage={8} />
         
         <SearchBox
            class="ais-SearchBox-input"
            translations={{
              placeholder: 'συμμορφώσεων',
            }}
            onKeyUp={(event) => {
            
            setState(state => ({
            hasInput: event.currentTarget.value !== '',
            }));

          }}
          />
        <div className={!state.hasInput ? 'input-empty' : 'input-value'}>  
          <SearchResult
            show={query && query.length > 0 && hasFocus}
            indices={searchIndices}
            />
        </div>
        </InstantSearch>
        </ClickOutHandler>
      </div>
     </Layout>
  )

}
