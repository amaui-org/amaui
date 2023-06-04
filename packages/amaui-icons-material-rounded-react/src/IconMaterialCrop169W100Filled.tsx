import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100Filled'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 15.7q-.65 0-1.075-.425Q4.3 14.85 4.3 14.2V9.8q0-.65.425-1.075Q5.15 8.3 5.8 8.3h12.4q.65 0 1.075.425.425.425.425 1.075v4.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100Filled.displayName = 'AmauiIconMaterialCrop169W100Filled';

export default IconMaterialCrop169W100Filled;
