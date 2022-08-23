import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTuneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneTwoTone'
      short_name='Tune'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 5h10v2H3zm4 6H3v2h4v2h2V9H7zm6 4h-2v6h2v-2h8v-2h-8zM3 17h6v2H3zm8-6h10v2H11zm6-8h-2v6h2V7h4V5h-4z"/>
    </Icon>
  );
});

IconMaterialTuneTwoTone.displayName = 'AmauiIconMaterialTuneTwoTone';

export default IconMaterialTuneTwoTone;
