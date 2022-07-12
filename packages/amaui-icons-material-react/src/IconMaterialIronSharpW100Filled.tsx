import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronSharpW100Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M3.625 16.7V14.9Q3.625 13.625 4.537 12.712Q5.45 11.8 6.725 11.8H15.325V9H9.45V10.65H8.75V8.3H16.025V14.6H17.675V7.3H20.375V8H18.375V15.3H16.025V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialIronSharpW100Filled;
