import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kPlusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusSharp'
      short_name='4kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11.5 15H13V12.75L14.75 15H16.575L14.25 12L16.575 9H14.75L13 11.25V9H11.5ZM5.5 13.5H8.5V15H10V13.5H11V12H10V9H8.5V12H7V9H5.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial4kPlusSharp.displayName = 'AmauiIconMaterial4kPlusSharp';

export default IconMaterial4kPlusSharp;
