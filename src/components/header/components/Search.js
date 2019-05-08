import React from 'react'
import styles from '../stylesheets/search.module.sass'
import AutoComplete from '../../autoComplete/AutoCompleteContainer'
import jumpTo from '../../../modules/Navigation'
export default function Search({
  search,
  onChange,
  handleSuggest,
  input_value
}) {
  return (
    <div className={styles.outbox}>
      {/* search input */}
        <div className={styles.auto}>
          <AutoComplete
            onChange={onChange}
            suggest_value={handleSuggest}
          />
        </div>
        <div className={styles.btn}>
          <button
            onClick={() => {
              search(input_value).then(res => jumpTo('/dashboard'))
            }}
          >
            Search
          </button>
        </div>
    </div>
  )
}
