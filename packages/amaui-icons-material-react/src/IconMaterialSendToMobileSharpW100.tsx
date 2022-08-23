import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileSharpW100'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 15.1 16.5 14.6 18.75 12.35H12.65V11.65H18.75L16.5 9.4L17 8.9L20.1 12ZM17 19.35H7V21H17ZM17 4.65V3H7V4.65ZM6.3 21.7V2.3H17.7V6.9H17V5.35H7V18.65H17V17.1H17.7V21.7ZM7 3V4.65ZM7 21V19.35Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileSharpW100.displayName = 'AmauiIconMaterialSendToMobileSharpW100';

export default IconMaterialSendToMobileSharpW100;
