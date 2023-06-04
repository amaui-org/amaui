import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100Filled'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 16.7q-.65 0-1.075-.425Q4.3 15.85 4.3 15.2V8.8q0-.65.425-1.075Q5.15 7.3 5.8 7.3h12.4q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100Filled.displayName = 'AmauiIconMaterialCrop32W100Filled';

export default IconMaterialCrop32W100Filled;
