import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBusinessSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessSharpW100'
      short_name='AddBusiness'

      {...props}
    >
      <path d="M18 21.7V18.7H15V18H18V15H18.7V18H21.7V18.7H18.7V21.7ZM3.6 19.35V13.35H2.3V12.65L3.5 7.65H16.8L18 12.65V13.35H16.7V16.7H16V13.35H11.3V19.35ZM4.3 18.65H10.6V13.35H4.3ZM3 12.65H17.3ZM3.5 5.35V4.65H16.8V5.35ZM3 12.65H17.3L16.275 8.35H4.025Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessSharpW100.displayName = 'AmauiIconMaterialAddBusinessSharpW100';

export default IconMaterialAddBusinessSharpW100;
