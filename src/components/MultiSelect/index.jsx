import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'

const MultiSelect = ({ bugsDetails, selectProducts, handleProduct }) => {
  const [toggleSelect, setToggleSelect] = useState(false)

  const headingBadge = <p className='heading-badge'>Select product(s)</p>
  return (
    <>
      <button
        data-testid='multi-select'
        type='button'
        onClick={() => setToggleSelect(!toggleSelect)}
        className={`answer-wrapper drop-down-select ${toggleSelect && 'active'}`}
      >
        {toggleSelect && headingBadge}
        <p className='heading'>
          {selectProducts > 0 ? `${selectProducts} products selected` : 'Select product(s)'}
        </p>
        <BiChevronDown />
      </button>
      {toggleSelect && (
        <div className={`answer-wrapper drop-down-options ${toggleSelect && 'active'}`}>
          {bugsDetails.bugProducts.map((product, index) => (
            <div key={product.label} className='option-wrapper'>
              <input
                type='checkbox'
                id={product.label}
                checked={product.selected}
                onChange={() => handleProduct(index)}
                value={product.label}
              />
              <label className='label' htmlFor={product.label}>
                {product.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
export default MultiSelect
