import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinInvokeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeTwoTone'
      short_name='PinInvoke'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,12v6c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10l0,2H4v12h16v-6H22z M22,7c0-1.66-1.34-3-3-3 c-1.66,0-3,1.34-3,3s1.34,3,3,3C20.66,10,22,8.66,22,7z M11.47,12.12l-2.83,2.83l1.41,1.41l2.83-2.83L15,15.66V10H9.34L11.47,12.12z"/>
    </Icon>
  );
});

IconMaterialPinInvokeTwoTone.displayName = 'AmauiIconMaterialPinInvokeTwoTone';

export default IconMaterialPinInvokeTwoTone;
