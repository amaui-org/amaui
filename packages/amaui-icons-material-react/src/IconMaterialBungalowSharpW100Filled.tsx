import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowSharpW100Filled'
      short_name='Bungalow'

      {...props}
    >
      <path d="M8.3 19.7V12.725L7.075 14.675L6.475 14.325L12 5.45L17.5 14.325L16.9 14.675L15.7 12.75V19.7H12.7V16.3H11.3V19.7ZM11.3 14H12.7V12.6H11.3Z"/>
    </Icon>
  )
});

export default IconMaterialBungalowSharpW100Filled;
