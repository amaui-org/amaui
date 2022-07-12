import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharp'
      short_name='Tab'

      {...props}
    >
      <path d="M2 20V4H22V20ZM20 18V10H13V6H4V18ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialTabSharp;
