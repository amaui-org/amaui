import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneBluetoothSpeakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerW100Filled'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.1 12.5v-4l-2.45 2.45-.5-.5 2.8-2.8-2.8-2.8.5-.5L16.1 6.8v-4h.3l2.7 2.7-2.15 2.15L19.1 9.8l-2.7 2.7Zm.7-5.7 1.3-1.3-1.3-1.3Zm0 4.3 1.3-1.3-1.3-1.3Zm1.825 8.45q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerW100Filled.displayName = 'AmauiIconMaterialPhoneBluetoothSpeakerW100Filled';

export default IconMaterialPhoneBluetoothSpeakerW100Filled;
