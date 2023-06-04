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
      <path d="M4.3 15.7V8.3h15.4v7.4Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100Filled.displayName = 'AmauiIconMaterialCrop169W100Filled';

export default IconMaterialCrop169W100Filled;
