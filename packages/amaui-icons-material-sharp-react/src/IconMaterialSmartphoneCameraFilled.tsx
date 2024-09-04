import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneCameraFilled'

      short_name='SmartphoneCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v200H280v480h480v200H200Zm320-280v-280h100l40-40h80l40 40h100v280H520Zm180-70q29 0 49.5-20.5T770-460q0-29-20.5-49.5T700-530q-29 0-49.5 20.5T630-460q0 29 20.5 49.5T700-390Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneCameraFilled.displayName = 'AmauiIconMaterialSmartphoneCameraFilled';

export default IconMaterialSmartphoneCameraFilled;
