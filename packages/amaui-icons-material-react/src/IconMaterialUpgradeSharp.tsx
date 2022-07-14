import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeSharp'
      short_name='Upgrade'

      {...props}
    >
      <path d="M11 16V7.825L8.4 10.4L7 9L12 4L17 9L15.6 10.4L13 7.825V16ZM7 20V18H17V20Z"/>
    </Icon>
  );
});

export default IconMaterialUpgradeSharp;
