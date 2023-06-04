import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18V6h18v12Zm2-2h14V8H5Zm0 0V8v8Z"/>
    </Icon>
  );
});

IconMaterialCrop32.displayName = 'AmauiIconMaterialCrop32';

export default IconMaterialCrop32;
