import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingFilled'

      short_name='WifiCalling'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 10.075q-.2 0-.375-.075t-.325-.225L11.875 5.85q-.375-.375-.313-.863.063-.487.488-.737 1.05-.625 2.175-.938Q15.35 3 16.5 3t2.275.337q1.125.338 2.175.963.425.275.488.737.062.463-.313.838L17.2 9.8q-.15.15-.325.212-.175.063-.375.063ZM19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingFilled.displayName = 'AmauiIconMaterialWifiCallingFilled';

export default IconMaterialWifiCallingFilled;
