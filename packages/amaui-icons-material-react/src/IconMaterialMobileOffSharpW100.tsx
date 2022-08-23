import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffSharpW100'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.95 22.6 1.1 2.75 1.6 2.25 21.45 22.1ZM6.3 7.45 7 8.15V18.65H17.025L17.7 19.325V21.7H6.3ZM7 19.35V21H17V19.35ZM17.7 2.3V15.55L17 14.85V5.35H7.5L6.3 4.125V3.8V2.3ZM7 4.65H17V3H7ZM7 19.35V21V19.35ZM7 4.65V3Z"/>
    </Icon>
  );
});

IconMaterialMobileOffSharpW100.displayName = 'AmauiIconMaterialMobileOffSharpW100';

export default IconMaterialMobileOffSharpW100;
