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
      <path d="M16.1 11.7V8.5l-2.2 2.2q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l2.55-2.55L13.4 5.1q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.2 2.2V3.6q0-.125.075-.25t.2-.175q.125-.05.25-.038.125.013.225.113l1.975 1.975q.05.05.1.275 0 .025-.1.275L16.95 7.65l1.875 1.875q.05.05.1.275 0 .025-.1.275L16.85 12.05q-.1.1-.225.112-.125.013-.25-.037-.125-.05-.2-.175-.075-.125-.075-.25Zm.7-4.9 1.3-1.3-1.3-1.3Zm0 4.3 1.3-1.3-1.3-1.3Zm1.8 8.45q-2.425 0-4.962-1.3-2.538-1.3-4.6-3.363-2.063-2.062-3.375-4.587Q4.35 7.775 4.35 5.35q0-.45.3-.75t.75-.3h2q.45 0 .762.262.313.263.413.688l.45 2.05q.075.4-.013.725-.087.325-.362.55L6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.05-2.15q.275-.275.563-.363.287-.087.637-.012l1.7.35q.425.1.688.413.262.312.262.762v1.95q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerW100Filled.displayName = 'AmauiIconMaterialPhoneBluetoothSpeakerW100Filled';

export default IconMaterialPhoneBluetoothSpeakerW100Filled;
