import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharpW100'
      short_name='Mms'

      {...props}
    >
      <path d="M7.95 13.1H16.25L13.7 9.7L11.2 12.8L9.6 10.95ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialMmsSharpW100;
