import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeSharpW100'
      short_name='Upgrade'

      {...props}
    >
      <path d="M11.65 15.35V6.225L8.375 9.5L7.9 9.025L12 4.925L16.1 9.025L15.625 9.5L12.35 6.225V15.35ZM7.65 19.35V18.65H16.35V19.35Z"/>
    </Icon>
  )
});

export default IconMaterialUpgradeSharpW100;
