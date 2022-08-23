import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial13mpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='13mpSharpFilled'
      short_name='13mp'

      {...props}
    >
      <path d="M8.5 11.5H10V5.5H7V7H8.5ZM12 11.5H16.5V5.5H12V7H15V8H13V9H15V10H12ZM3 21V3H21V21ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  );
});

IconMaterial13mpSharpFilled.displayName = 'AmauiIconMaterial13mpSharpFilled';

export default IconMaterial13mpSharpFilled;
