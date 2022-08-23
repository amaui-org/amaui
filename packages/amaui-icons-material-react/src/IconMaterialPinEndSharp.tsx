import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndSharp'
      short_name='PinEnd'

      {...props}
    >
      <path d="M13.95 14.375 11 11.425V13.65H9V8H14.65V10H12.4L15.35 12.95ZM19 20Q17.75 20 16.875 19.125Q16 18.25 16 17Q16 15.75 16.875 14.875Q17.75 14 19 14Q20.25 14 21.125 14.875Q22 15.75 22 17Q22 18.25 21.125 19.125Q20.25 20 19 20ZM2 20V4H22V12H20V6H4V18H14V20Z"/>
    </Icon>
  );
});

IconMaterialPinEndSharp.displayName = 'AmauiIconMaterialPinEndSharp';

export default IconMaterialPinEndSharp;
