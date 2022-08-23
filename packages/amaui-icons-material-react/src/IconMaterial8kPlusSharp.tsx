import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kPlusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kPlusSharp'
      short_name='8kPlus'

      {...props}
    >
      <path d="M16.5 14H17.5V12.5H19V11.5H17.5V10H16.5V11.5H15V12.5H16.5ZM11 15H12.5V12.75L14.25 15H16.075L13.75 12L16.075 9H14.25L12.5 11.25V9H11ZM6 15H10.5V9H6ZM7.5 11.5V10H9V11.5ZM7.5 14V12.5H9V14ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial8kPlusSharp.displayName = 'AmauiIconMaterial8kPlusSharp';

export default IconMaterial8kPlusSharp;
