import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Send'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z" opacity=".3"/><path d="M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z"/>
    </Icon>
  );
});

IconMaterialSend.displayName = 'AmauiIconMaterialSend';

export default IconMaterialSend;
