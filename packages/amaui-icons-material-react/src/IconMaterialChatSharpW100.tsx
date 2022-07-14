import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatSharpW100'
      short_name='Chat'

      {...props}
    >
      <path d="M6.65 13.35H13.35V12.65H6.65ZM6.65 10.35H17.35V9.65H6.65ZM6.65 7.35H17.35V6.65H6.65ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialChatSharpW100;
