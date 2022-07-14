import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5gSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gSharpW100'
      short_name='5g'

      {...props}
    >
      <path d="M3.65 16.35V15.65H8.65V12.35H3.65V7.65H9.35V8.35H4.35V11.65H9.35V16.35ZM12.65 16.35V7.65H20.35V8.35H13.35V15.65H19.65V12.35H17.15V11.65H20.35V16.35Z"/>
    </Icon>
  );
});

export default IconMaterial5gSharpW100;
