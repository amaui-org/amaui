import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop54 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54'

      short_name='Crop54'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20V4h18v16Zm2-2h14V6H5Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialCrop54.displayName = 'AmauiIconMaterialCrop54';

export default IconMaterialCrop54;
