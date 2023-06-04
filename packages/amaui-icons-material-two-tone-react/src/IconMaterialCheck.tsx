import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Check'

      short_name='Check'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </Icon>
  );
});

IconMaterialCheck.displayName = 'AmauiIconMaterialCheck';

export default IconMaterialCheck;
