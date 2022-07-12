import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronSharpW100'
      short_name='Iron'

      {...props}
    >
      <path d="M3.625 16.7V14.9Q3.625 13.625 4.537 12.712Q5.45 11.8 6.725 11.8H15.325V9H9.45V10.65H8.75V8.3H16.025V14.6H17.675V7.3H20.375V8H18.375V15.3H16.025V16.7ZM4.325 16H15.325V12.5H6.725Q5.725 12.5 5.025 13.2Q4.325 13.9 4.325 14.9ZM15.325 16V14.9Q15.325 13.9 15.325 13.2Q15.325 12.5 15.325 12.5V16Z"/>
    </Icon>
  )
});

export default IconMaterialIronSharpW100;
