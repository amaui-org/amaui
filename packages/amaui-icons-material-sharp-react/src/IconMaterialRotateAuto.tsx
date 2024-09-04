import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateAuto'

      short_name='RotateAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-320h64l32-92h146l32 92h62L512-680h-64L312-320Zm114-144 52-150h4l52 150H426Zm54 384q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 66 25 124.5t68.5 102q43.5 43.5 102 69T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h116v80H80v-240h80v80q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialRotateAuto.displayName = 'AmauiIconMaterialRotateAuto';

export default IconMaterialRotateAuto;
