import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAnalyticsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsSharp'
      short_name='Analytics'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM7 17H9V12H7ZM15 17H17V7H15ZM11 17H13V14H11ZM11 12H13V10H11ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialAnalyticsSharp;
