import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneBluetoothSpeakerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerW100'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.1 12.5v-4l-2.45 2.45-.5-.5 2.8-2.8-2.8-2.8.5-.5L16.1 6.8v-4h.3l2.7 2.7-2.15 2.15L19.1 9.8l-2.7 2.7Zm.7-5.7 1.3-1.3-1.3-1.3Zm0 4.3 1.3-1.3-1.3-1.3Zm1.825 8.45q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012ZM6.2 9.85l2.225-2L7.8 5H5.075q-.1 1.2.263 2.475Q5.7 8.75 6.2 9.85Zm8.2 8q.875.45 2.225.775t2.325.2v-2.7l-2.4-.475Zm-8.2-8Zm8.2 8Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerW100.displayName = 'AmauiIconMaterialPhoneBluetoothSpeakerW100';

export default IconMaterialPhoneBluetoothSpeakerW100;
