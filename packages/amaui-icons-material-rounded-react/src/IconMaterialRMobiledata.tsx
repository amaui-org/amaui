import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledata'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.775 9.475 5.85 7.35H4V9q0 .425-.287.712Q3.425 10 3 10t-.712-.288Q2 9.425 2 9V3q0-.425.288-.713Q2.575 2 3 2h4q.825 0 1.412.587Q9 3.175 9 4v1.35q0 .6-.35 1.088-.35.487-.85.762l.65 1.5q.225.525-.025.913-.25.387-.85.387-.25 0-.475-.15-.225-.15-.325-.375ZM4 5.35h3V4H4Z"/>
    </Icon>
  );
});

IconMaterialRMobiledata.displayName = 'AmauiIconMaterialRMobiledata';

export default IconMaterialRMobiledata;
