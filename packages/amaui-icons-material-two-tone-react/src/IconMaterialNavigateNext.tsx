import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNext'

      short_name='NavigateNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z"/>
    </Icon>
  );
});

IconMaterialNavigateNext.displayName = 'AmauiIconMaterialNavigateNext';

export default IconMaterialNavigateNext;
