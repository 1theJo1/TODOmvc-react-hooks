import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { FILTERS } from '../../constants/filter';
import { selectCompleted, selectNotCompleted } from '../../store/selectors/todo';
import { onClearCompleted } from '../../store/actions/todo';
import { onFilterSelect } from '../../store/actions/filter';

export function Footer() {
  const filterTitles = [
    { key: FILTERS.all, value: 'All' },
    { key: FILTERS.active, value: 'Active' },
    { key: FILTERS.completed, value: 'Completed' }
  ];
  const dispatch = useDispatch();
  const completedCount = useSelector(state => selectCompleted(state.todos).length);
  const itemsLeft = useSelector(state => (state.todos).length);
const itemsActive = useSelector(state => selectNotCompleted(state.todos).length);
  const filter = useSelector(state => state.filter);
  const clearCompleted = () => dispatch(onClearCompleted());
  const filterSelect = selectedFilter => dispatch(onFilterSelect(selectedFilter));

  return (
   <footer className="footer">
     <span className="todo-count">
       <strong>{itemsLeft}/</strong>
        <strong>{itemsActive}/</strong>
         <strong>{completedCount} </strong>  
      </span>
    </footer>
  );
}
