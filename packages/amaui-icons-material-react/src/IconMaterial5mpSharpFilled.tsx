import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5mpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5mpSharpFilled'
      short_name='5mp'

      {...props}
    >
      <path d="M10 11.5H14.5V8H11.5V7H14.5V5.5H10V9H13V10H10ZM3 21V3H21V21ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  );
});

IconMaterial5mpSharpFilled.displayName = 'AmauiIconMaterial5mpSharpFilled';

export default IconMaterial5mpSharpFilled;
