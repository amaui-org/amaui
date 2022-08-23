import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTodaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodaySharp'
      short_name='Today'

      {...props}
    >
      <path d="M9 16.5Q7.95 16.5 7.225 15.775Q6.5 15.05 6.5 14Q6.5 12.95 7.225 12.225Q7.95 11.5 9 11.5Q10.05 11.5 10.775 12.225Q11.5 12.95 11.5 14Q11.5 15.05 10.775 15.775Q10.05 16.5 9 16.5ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  );
});

IconMaterialTodaySharp.displayName = 'AmauiIconMaterialTodaySharp';

export default IconMaterialTodaySharp;
