import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery20SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery20SharpW100'
      short_name='Battery20'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35Z"/>
    </Icon>
  );
});

export default IconMaterialBattery20SharpW100;
