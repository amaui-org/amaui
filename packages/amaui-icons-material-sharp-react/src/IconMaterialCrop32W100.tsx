import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.7V7.3h15.4v9.4ZM5 16h14V8H5Zm0 0V8v8Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100.displayName = 'AmauiIconMaterialCrop32W100';

export default IconMaterialCrop32W100;
