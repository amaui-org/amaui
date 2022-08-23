import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial7kPlusSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kPlusSharpFilled'
      short_name='7kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11 15H12.5V12.75L14.25 15H16L13.75 12L16 9H14.25L12.5 11.25V9H11ZM7 15H8.75L10.6 9H5.75V10.5H8.4ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial7kPlusSharpFilled.displayName = 'AmauiIconMaterial7kPlusSharpFilled';

export default IconMaterial7kPlusSharpFilled;
