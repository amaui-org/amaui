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
      <path d="M40-160v-640h880v640H720v-560H240v560H40Zm260 80v-280h100l40-40h80l40 40h100v280H300Zm180-70q29 0 49.5-20.5T550-220q0-29-20.5-49.5T480-290q-29 0-49.5 20.5T410-220q0 29 20.5 49.5T480-150Z"/>
    </Icon>
  );
});

IconMaterialTabletCameraFilled.displayName = 'AmauiIconMaterialTabletCameraFilled';

export default IconMaterialTabletCameraFilled;
