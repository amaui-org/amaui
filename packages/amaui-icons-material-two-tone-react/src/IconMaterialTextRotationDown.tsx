import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDown'

      short_name='TextRotationDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M6 20l3-3H7V4H5v13H3l3 3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9zm6.82 2.5L14 12.87V9.13L19.02 11z"/>
    </Icon>
  );
});

IconMaterialTextRotationDown.displayName = 'AmauiIconMaterialTextRotationDown';

export default IconMaterialTextRotationDown;
