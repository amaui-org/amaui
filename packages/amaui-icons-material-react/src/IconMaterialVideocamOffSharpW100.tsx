import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffSharpW100'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M20.15 15.25 17.4 12.5V14.75L16.7 14.05V6H8.65L7.95 5.3H17.4V11.5L20.15 8.75ZM4 18.7V5.2L2.95 4.15L3.45 3.65L19.55 19.75L19.05 20.25L17.55 18.7ZM4.7 18H16.8L4.7 5.85ZM12.725 10.075ZM10.725 11.9Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffSharpW100.displayName = 'AmauiIconMaterialVideocamOffSharpW100';

export default IconMaterialVideocamOffSharpW100;
