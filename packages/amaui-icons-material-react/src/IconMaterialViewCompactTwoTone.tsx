import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactTwoTone'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 13h9v4h-9zm-6 0h4v4H5zm0-6h15v4H5z" opacity=".3"/><path d="M3 5v14h19V5H3zm6 12H5v-4h4v4zm11 0h-9v-4h9v4zm0-6H5V7h15v4z"/>
    </Icon>
  );
});

export default IconMaterialViewCompactTwoTone;
