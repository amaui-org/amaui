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
      <path d="M346-172v-80H132v-536h696v120h-28v-92H160v480h300v108H346Zm262-144q0-31.532 22.234-53.766Q652.468-392 684-392q31.532 0 53.766 22.234Q760-347.532 760-316q0 31.532-22.234 53.766Q715.532-240 684-240q-31.532 0-53.766-22.234Q608-284.468 608-316Zm220-272v416H540v-416h288Zm-144.14 32q-20.86 0-34.36 13.64-13.5 13.639-13.5 34.5 0 20.86 13.64 34.36 13.639 13.5 34.5 13.5 20.86 0 34.36-13.64 13.5-13.639 13.5-34.5 0-20.86-13.64-34.36-13.639-13.5-34.5-13.5Zm-.001 352Q731-204 763.5-236.359q32.5-32.36 32.5-79.5Q796-363 763.641-395.5q-32.36-32.5-79.5-32.5Q637-428 604.5-395.641q-32.5 32.36-32.5 79.5Q572-269 604.359-236.5q32.36 32.5 79.5 32.5Z"/>
    </Icon>
  );
});

IconMaterialGoogleHomeDevicesW100.displayName = 'AmauiIconMaterialGoogleHomeDevicesW100';

export default IconMaterialGoogleHomeDevicesW100;
