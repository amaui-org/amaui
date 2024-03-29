import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneBluetoothSpeakerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerFilled'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 12V8.2l-2.3 2.3-.7-.7L16.8 7 14 4.2l.7-.7L17 5.8V2h.5l2.85 2.9L18.2 7l2.15 2.15L17.5 12Zm1-6.2.95-.9-.95-.95Zm0 4.3.95-.95L18 8.2ZM19.95 21q-3.225 0-6.287-1.425-3.063-1.425-5.425-3.8-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9 5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerFilled.displayName = 'AmauiIconMaterialPhoneBluetoothSpeakerFilled';

export default IconMaterialPhoneBluetoothSpeakerFilled;
