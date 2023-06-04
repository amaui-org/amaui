import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75W100Filled'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 17.7q-.65 0-1.075-.425Q4.3 16.85 4.3 16.2V7.8q0-.65.425-1.075Q5.15 6.3 5.8 6.3h12.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCrop75W100Filled.displayName = 'AmauiIconMaterialCrop75W100Filled';

export default IconMaterialCrop75W100Filled;
