import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from './subjectsSlice';

const loadState = () => {
  try {
    const saved = localStorage.getItem('subjects');
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
  },
  preloadedState: {
    subjects: loadState(),
  },
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      'subjects',
      JSON.stringify(store.getState().subjects)
    );
  } catch {

  }
});



