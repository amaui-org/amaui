import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kPlusSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kPlusSharpFilled'
      short_name='2kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11 15H12.5V12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11ZM6 15H10V13.5H7.5V12.5H10V9H6V10.5H8.5V11.5H6ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial2kPlusSharpFilled.displayName = 'AmauiIconMaterial2kPlusSharpFilled';

export default IconMaterial2kPlusSharpFilled;
