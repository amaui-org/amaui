import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutofpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutofpsSelect'

      short_name='AutofpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 9.2 1-2.9h.1l1 2.9ZM12 15q-2.5 0-4.25-1.75T6 9q0-2.5 1.75-4.25T12 3q2.5 0 4.25 1.75T18 9q0 2.5-1.75 4.25T12 15Zm-3.25-3h1.2l.65-1.8h2.8l.65 1.8h1.2L12.6 5h-1.25ZM3 22v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h6v5Z"/>
    </Icon>
  );
});

IconMaterialAutofpsSelect.displayName = 'AmauiIconMaterialAutofpsSelect';

export default IconMaterialAutofpsSelect;
