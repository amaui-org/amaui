import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneBluetoothSpeakerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeakerSharpFilled'
      short_name='PhoneBluetoothSpeaker'

      {...props}
    >
      <path d="M17 12V8.2L14.7 10.5L14 9.8L16.8 7L14 4.2L14.7 3.5L17 5.8V2H17.5L20.35 4.9L18.2 7L20.35 9.15L17.5 12ZM18 5.8 18.95 4.9 18 3.95ZM18 10.1 18.95 9.15 18 8.2ZM19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeakerSharpFilled.displayName = 'AmauiIconMaterialPhoneBluetoothSpeakerSharpFilled';

export default IconMaterialPhoneBluetoothSpeakerSharpFilled;
