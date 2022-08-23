import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallSharpW100Filled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M10.275 15.35H10.975V12.35H13.975V11.65H10.975V8.65H10.275V11.65H7.275V12.35H10.275ZM3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7Z"/>
    </Icon>
  );
});

IconMaterialVideoCallSharpW100Filled.displayName = 'AmauiIconMaterialVideoCallSharpW100Filled';

export default IconMaterialVideoCallSharpW100Filled;
