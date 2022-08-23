import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusSharpFilled'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM10.5 15H12V12.75L13.75 15H15.5L13.25 12L15.5 9H13.75L12 11.25V9H10.5ZM7.5 15H9V9H6V10.5H7.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial1kPlusSharpFilled.displayName = 'AmauiIconMaterial1kPlusSharpFilled';

export default IconMaterial1kPlusSharpFilled;
