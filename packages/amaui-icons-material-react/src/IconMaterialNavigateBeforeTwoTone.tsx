import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigateBeforeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeTwoTone'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>
    </Icon>
  );
});

IconMaterialNavigateBeforeTwoTone.displayName = 'AmauiIconMaterialNavigateBeforeTwoTone';

export default IconMaterialNavigateBeforeTwoTone;
