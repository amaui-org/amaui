import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDaySharp'
      short_name='ViewDay'

      {...props}
    >
      <path d="M3 20V18H21V20ZM3 16V8H21V16ZM5 14H19V10H5ZM3 6V4H21V6ZM5 14V10V14Z"/>
    </Icon>
  );
});

IconMaterialViewDaySharp.displayName = 'AmauiIconMaterialViewDaySharp';

export default IconMaterialViewDaySharp;
