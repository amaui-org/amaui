import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 17h14V3H7v14zm4-10V5h6v2l-4 8h-2l4-8h-4z" opacity=".3"/><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm10-8l4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>
    </Icon>
  );
});

IconMaterialFilter7.displayName = 'AmauiIconMaterialFilter7';

export default IconMaterialFilter7;
