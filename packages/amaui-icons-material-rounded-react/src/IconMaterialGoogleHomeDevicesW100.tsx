import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGoogleHomeDevicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleHomeDevicesW100'

      short_name='GoogleHomeDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-252H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v60h-28v-60q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h268v108h-84q-12.75 0-21.375-8.625T346-202v-50Zm262-64q0-31.532 22.234-53.766Q652.468-392 684-392q31.532 0 53.766 22.234Q760-347.532 760-316q0 31.532-22.234 53.766Q715.532-240 684-240q-31.532 0-53.766-22.234Q608-284.468 608-316Zm188.38-272q13.62 0 22.62 9.209 9 9.21 9 22.823v352.354Q828-190 818.786-181q-9.213 9-22.833 9H571.62Q558-172 549-181.209q-9-9.21-9-22.823v-352.354Q540-570 549.214-579q9.213-9 22.833-9H796.38Zm-112.52 32q-20.86 0-34.36 13.64-13.5 13.639-13.5 34.5 0 20.86 13.64 34.36 13.639 13.5 34.5 13.5 20.86 0 34.36-13.64 13.5-13.639 13.5-34.5 0-20.86-13.64-34.36-13.639-13.5-34.5-13.5Zm-.001 352Q731-204 763.5-236.359q32.5-32.36 32.5-79.5Q796-363 763.641-395.5q-32.36-32.5-79.5-32.5Q637-428 604.5-395.641q-32.5 32.36-32.5 79.5Q572-269 604.359-236.5q32.36 32.5 79.5 32.5Z"/>
    </Icon>
  );
});

IconMaterialGoogleHomeDevicesW100.displayName = 'AmauiIconMaterialGoogleHomeDevicesW100';

export default IconMaterialGoogleHomeDevicesW100;
