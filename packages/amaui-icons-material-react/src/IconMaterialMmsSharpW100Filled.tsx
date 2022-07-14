import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharpW100Filled'
      short_name='Mms'

      {...props}
    >
      <path d="M7.95 13.1H16.25L13.7 9.7L11.2 12.8L9.6 10.95ZM3.3 19.5V3.3H20.7V16.7H6.1Z"/>
    </Icon>
  );
});

export default IconMaterialMmsSharpW100Filled;
