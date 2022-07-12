import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronSharpFilled'
      short_name='Iron'

      {...props}
    >
      <path d="M2 18V15Q2 13.35 3.175 12.175Q4.35 11 6 11H15V9H9V10H7V7H17V14H18V6H22V8H20V16H17V18Z"/>
    </Icon>
  )
});

export default IconMaterialIronSharpFilled;
