/**
 *
 * Tests for ApiKeys
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import { IntlProvider } from 'react-intl';
import React from 'react';
import { render } from 'react-testing-library';
import { DEFAULT_LOCALE } from '../../../i18n';
import { ApiKeys } from '../index';
// import 'jest-dom/extend-expect'; // add some helpful assertions

describe('<ApiKeys />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <ApiKeys dispatch={dispatch} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <ApiKeys />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});