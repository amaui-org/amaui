import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallToActionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToActionSharp'
      short_name='CallToAction'

      {...props}
    >
      <path d="M6 17H18V14H6ZM2 20V4H22V20ZM4 18H20V6H4ZM4 6V18Z"/>
    </Icon>
  );
});

export default IconMaterialCallToActionSharp;
