import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamSharpW100'
      short_name='Videocam'

      {...props}
    >
      <path d="M3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7ZM4.625 18H16.625V6H4.625ZM4.625 6V18Z"/>
    </Icon>
  );
});

IconMaterialVideocamSharpW100.displayName = 'AmauiIconMaterialVideocamSharpW100';

export default IconMaterialVideocamSharpW100;
