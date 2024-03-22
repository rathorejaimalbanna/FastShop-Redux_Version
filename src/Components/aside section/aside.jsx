import React from 'react';
import styles from '../../app.module.css';
import CheckBox from './checkbox';
import { filterActions, filterSelectors } from '../../Redux/filterReducer';
import { useDispatch, useSelector } from 'react-redux';

// Aside component responsible for rendering filter options
export default function Aside() {
  const dispatch = useDispatch()
  // Retrieve filter state and setter function from context
  // var { filter, setFilter, setDependency,dependency } = UseValue();
  const filter = useSelector(filterSelectors)

  // Function to handle checkbox change
  function handleChange(type) {
    const index = filter.indexOf(type);
    if (index > -1) {
      // Remove type from filter if it exists
      // filter = filter.filter((_, id) => id !== index);
      // setFilter(filter);
      dispatch(filterActions.removeFilter(index))
    } else {
      // Add type to filter if it doesn't exist
      // filter.push(type);
      // setFilter(filter);
      dispatch(filterActions.addFilter(type))
    }
    // setDependency(!dependency)
  }

  return (
    <div className={styles.asideSection}>
      {/* Render filter options */}
      <h3 style={{ marginLeft: '15%', marginBottom: '15%' }}>Filter</h3>
      <ul>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Men's Fashion */}
          <CheckBox option="Men's Fashion" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Women's Fashion */}
          <CheckBox option="Women's Fashion" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Books */}
          <CheckBox option="Books" handleChange={handleChange} />
        </li>
        <li className={styles.asideLineItem}>
          {/* Render checkbox for Electronics */}
          <CheckBox option="Electronics" handleChange={handleChange} />
        </li>
      </ul>
    </div>
  );
}
