import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneBluetoothSpeaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneBluetoothSpeaker'

      short_name='PhoneBluetoothSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.225 11.775q-.1-.05-.163-.15-.062-.1-.062-.2V8.2l-1.95 1.95q-.15.15-.35.15-.2 0-.35-.15-.15-.15-.15-.35 0-.2.15-.35L16.8 7l-2.45-2.45q-.15-.15-.15-.35 0-.2.15-.35.15-.15.35-.15.2 0 .35.15L17 5.8V2.575q0-.1.062-.213.063-.112.163-.162.125-.075.275-.063.15.013.275.138L20 4.55q.05.05.15.35 0 .05-.15.35L18.2 7 20 8.8q.05.05.15.35 0 .05-.15.35l-2.2 2.2q-.125.125-.287.137-.163.013-.288-.062ZM18 5.8l.95-.9-.95-.95Zm0 4.3.95-.95L18 8.2ZM19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.05 9 7.7 7.35 7.25 5h-2.2q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.5L15 17.9q.975.425 1.975.7 1 .275 2.025.35Zm-4-1.05ZM6.05 9Z"/>
    </Icon>
  );
});

IconMaterialPhoneBluetoothSpeaker.displayName = 'AmauiIconMaterialPhoneBluetoothSpeaker';

export default IconMaterialPhoneBluetoothSpeaker;
