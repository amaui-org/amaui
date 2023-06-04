import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery80W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80W100'

      short_name='Battery80'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
});

IconMaterialBattery80W100.displayName = 'AmauiIconMaterialBattery80W100';

export default IconMaterialBattery80W100;
