import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowSharpW700Filled'
      short_name='Bungalow'

      {...props}
    >
      <path d="M6.425 21.375V15.675L5.625 16.875L3.275 15.4L12 2.05L20.725 15.4L18.375 16.875L17.575 15.675V21.375H13.375V15.725H10.625V21.375ZM10.625 14.275H13.375V11.525H10.625Z"/>
    </Icon>
  )
});

export default IconMaterialBungalowSharpW700Filled;
