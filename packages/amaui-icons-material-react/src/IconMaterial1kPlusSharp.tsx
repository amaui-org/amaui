import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kPlusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusSharp'
      short_name='1kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM10.5 15H12V12.75L13.75 15H15.575L13.25 12L15.575 9H13.75L12 11.25V9H10.5ZM7.5 15H9V9H6V10.5H7.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial1kPlusSharp.displayName = 'AmauiIconMaterial1kPlusSharp';

export default IconMaterial1kPlusSharp;
