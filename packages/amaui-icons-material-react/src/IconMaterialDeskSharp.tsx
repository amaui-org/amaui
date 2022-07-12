import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskSharp'
      short_name='Desk'

      {...props}
    >
      <path d="M2 18V6H22V18H20V16H16V18H14V8H4V18ZM16 10H20V8H16ZM16 14H20V12H16Z"/>
    </Icon>
  )
});

export default IconMaterialDeskSharp;
