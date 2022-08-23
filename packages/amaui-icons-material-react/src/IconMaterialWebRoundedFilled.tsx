import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebRoundedFilled'
      short_name='Web'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 12.5H14.5V9H4ZM14.5 18V14.5H4V18Q4 18 4 18Q4 18 4 18ZM16.5 18H20Q20 18 20 18Q20 18 20 18V9H16.5Z"/>
    </Icon>
  );
});

IconMaterialWebRoundedFilled.displayName = 'AmauiIconMaterialWebRoundedFilled';

export default IconMaterialWebRoundedFilled;
