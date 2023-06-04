import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearFilled'

      short_name='CameraRear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.85 22.5-1.4-1.4 1.1-1.1H5v-2h4.55l-1.1-1.1 1.4-1.4 3.5 3.5ZM14 20v-2h5v2Zm-9-3V2h14v15h-6.225L9.85 14.075 6.925 17Zm7-7q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialCameraRearFilled.displayName = 'AmauiIconMaterialCameraRearFilled';

export default IconMaterialCameraRearFilled;
