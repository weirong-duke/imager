import React from 'react';
import Modal from 'component-lib/Modal';
import { screen } from '@testing-library/react';
import {renderWithWrappers} from 'utils/tests';

test('renders modal', async () => {
  const {rerender} = renderWithWrappers(
    <Modal
      isOpen={false}
      title={"Test title"}
      onClose={() =>
    null}>
      This is content
    </Modal>
  );
  let renderedTitle = screen.queryByText('Test title');
  expect(renderedTitle).toBeNull()
  rerender(<Modal
    isOpen
    title={"Test title"}
    onClose={() =>
      null}>
    This is content
  </Modal> )
  renderedTitle = screen.queryByText('Test title');
  expect(renderedTitle).toBeVisible();

});
