import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigateNextTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextTwoTone'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z"/>
    </Icon>
  );
});

IconMaterialNavigateNextTwoTone.displayName = 'AmauiIconMaterialNavigateNextTwoTone';

export default IconMaterialNavigateNextTwoTone;
