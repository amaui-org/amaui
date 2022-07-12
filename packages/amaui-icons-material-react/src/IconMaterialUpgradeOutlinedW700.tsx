import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeOutlinedW700'
      short_name='Upgrade'

      {...props}
    >
      <path d="M10.425 16V8.6L8.4 10.625L6.2 8.425L12 2.625L17.8 8.425L15.6 10.625L13.575 8.6V16ZM6.425 21.15V18H17.575V21.15Z"/>
    </Icon>
  )
});

export default IconMaterialUpgradeOutlinedW700;
