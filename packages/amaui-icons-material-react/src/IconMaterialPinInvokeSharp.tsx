import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinInvokeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeSharp'
      short_name='PinInvoke'

      {...props}
    >
      <path d="M10.05 16.375 8.65 14.95 11.6 12H9.35V10H15V15.65H13V13.425ZM19 10Q17.75 10 16.875 9.125Q16 8.25 16 7Q16 5.75 16.875 4.875Q17.75 4 19 4Q20.25 4 21.125 4.875Q22 5.75 22 7Q22 8.25 21.125 9.125Q20.25 10 19 10ZM2 20V4H14V6H4V18H20V12H22V20Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeSharp.displayName = 'AmauiIconMaterialPinInvokeSharp';

export default IconMaterialPinInvokeSharp;
