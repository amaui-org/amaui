import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlert'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-160q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v160q0 17 11.5 28.5T480-440ZM452-56 346-160H200q-17 0-28.5-11.5T160-200v-146L56-452q-11-12-11-28t11-28l104-106v-146q0-17 11.5-28.5T200-800h146l106-104q12-11 28-11t28 11l106 104h146q17 0 28.5 11.5T800-760v146l104 106q11 12 11 28t-11 28L800-346v146q0 17-11.5 28.5T760-160H614L508-56q-12 11-28 11t-28-11Zm28-424Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlert.displayName = 'AmauiIconMaterialBrightnessAlert';

export default IconMaterialBrightnessAlert;
