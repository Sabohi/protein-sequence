import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { store } from '@/store';
import Proteins from '@/components/Proteins';
import { proteinsData } from './ProteinsTestData';

beforeEach(cleanup);

describe('protein sequence module testing without data', () => {
  let wrapper;

  beforeEach(() => {
    cleanup();
    wrapper = render(
      <Provider store={store}>
        <StaticRouter>
          <Proteins dispatch={store.dispatch} {...proteinsData.emptyProteinsData} />
        </StaticRouter>
      </Provider>,
    );
  });
  it('it checks "No Data Found" rendered', () => {
    expect(wrapper.getByText(/No Data/i).textContent).toBe('No Data Found');
  });
  it('it checks page is correctly rendered', () => {
    expect(wrapper.getAllByTestId('text-input').length).toBe(3);
    expect(wrapper.getAllByTestId('radiobox').length).toBe(2);
  });
});

describe('protein sequence module testing with data loaded', () => {
  let wrapper;

  beforeEach(() => {
    cleanup();
    wrapper = render(
      <Provider store={store}>
        <StaticRouter>
          <Proteins dispatch={store.dispatch} {...proteinsData.notEmptyAgendaData} />
        </StaticRouter>
      </Provider>,
    );
  });
  it('it checks transcript list is rendered', () => {
    expect(wrapper.getByTestId('transcript-list')).toBeTruthy();
  });
});
