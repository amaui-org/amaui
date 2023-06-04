import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndFilled'

      short_name='PinEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.95 14.375 11 11.425v2.225H9V8h5.65v2H12.4l2.95 2.95ZM19 20q-1.25 0-2.125-.875T16 17q0-1.25.875-2.125T19 14q1.25 0 2.125.875T22 17q0 1.25-.875 2.125T19 20ZM2 20V4h20v8h-2V6H4v12h10v2Z"/>
    </Icon>
  );
});

IconMaterialPinEndFilled.displayName = 'AmauiIconMaterialPinEndFilled';

export default IconMaterialPinEndFilled;
