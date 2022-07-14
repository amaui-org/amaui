import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpSharpW100Filled'
      short_name='Mp'

      {...props}
    >
      <path d="M13.9 14.6H14.6V13.1H17.6V9.4H13.9ZM14.6 12.4V10.1H16.9V12.4ZM6.4 14.6H7.1V10.1H8.9V13.1H9.6V10.1H11.4V14.6H12.1V9.4H6.4ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialMpSharpW100Filled;
