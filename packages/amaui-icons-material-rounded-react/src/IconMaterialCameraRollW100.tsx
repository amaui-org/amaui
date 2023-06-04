import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollW100'

      short_name='CameraRoll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 18.7h-6.55v.5q0 .625-.425 1.062-.425.438-1.025.438H4.8q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h1.5V3.1q0-.35.225-.575Q6.75 2.3 7.1 2.3h1.8q.35 0 .575.225.225.225.225.575v1.2h1.5q.625 0 1.063.437.437.438.437 1.063v.5h6.5q.625 0 1.063.438.437.437.437 1.062v9.4q0 .625-.437 1.062-.438.438-1.063.438Zm.8-.7V7h-8V5.8q0-.35-.225-.575Q11.55 5 11.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8v13.4q0 .35.225.575Q4.45 20 4.8 20h6.4q.35 0 .575-.225Q12 19.55 12 19.2V18ZM9.8 16.7h1.4v-1.4H9.8Zm0-7h1.4V8.3H9.8Zm3.75 7h1.4v-1.4h-1.4Zm0-7h1.4V8.3h-1.4Zm3.75 7h1.4v-1.4h-1.4Zm0-7h1.4V8.3h-1.4ZM4 5V20 5Z"/>
    </Icon>
  );
});

IconMaterialCameraRollW100.displayName = 'AmauiIconMaterialCameraRollW100';

export default IconMaterialCameraRollW100;
