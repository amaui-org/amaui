import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletCameraFilled'

      short_name='TabletCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160v-560H240v560H120q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H720ZM360-80q-25 0-42.5-17.5T300-140v-160q0-25 17.5-42.5T360-360h40l40-40h80l40 40h40q25 0 42.5 17.5T660-300v160q0 25-17.5 42.5T600-80H360Zm120-70q29 0 49.5-20.5T550-220q0-29-20.5-49.5T480-290q-29 0-49.5 20.5T410-220q0 29 20.5 49.5T480-150Z"/>
    </Icon>
  );
});

IconMaterialTabletCameraFilled.displayName = 'AmauiIconMaterialTabletCameraFilled';

export default IconMaterialTabletCameraFilled;
