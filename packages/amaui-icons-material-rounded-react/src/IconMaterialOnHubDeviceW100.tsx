import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnHubDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDeviceW100'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-184q-6 0-10-4t-4-10q0-6 4-10t10-4h196q6 0 10 4t4 10q0 6-4 10t-10 4H382Zm-16-136-32-406q-2-26 15-44t43-18h176q26 0 43 18t15 44l-32 406q-1 12-9.5 20t-20.5 8H396q-12 0-20.5-8t-9.5-20Zm28 0h172l32-408q1-14-7.5-23t-22.5-9H392q-14 0-22.5 9t-7.5 23l32 408Zm0-440h-32 236-204Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceW100.displayName = 'AmauiIconMaterialOnHubDeviceW100';

export default IconMaterialOnHubDeviceW100;
