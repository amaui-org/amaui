import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallSharpW100'
      short_name='VideoCall'

      {...props}
    >
      <path d="M10.275 15.35H10.975V12.35H13.975V11.65H10.975V8.65H10.275V11.65H7.275V12.35H10.275ZM3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7ZM4.625 18H16.625V6H4.625ZM4.625 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVideoCallSharpW100.displayName = 'AmauiIconMaterialVideoCallSharpW100';

export default IconMaterialVideoCallSharpW100;
