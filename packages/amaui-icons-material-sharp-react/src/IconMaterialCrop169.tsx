import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h18v10Zm2-2h14V9H5Zm0 0V9v6Z"/>
    </Icon>
  );
});

IconMaterialCrop169.displayName = 'AmauiIconMaterialCrop169';

export default IconMaterialCrop169;
