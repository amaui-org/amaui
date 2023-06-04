import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75W100'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.7V6.3h15.4v11.4ZM5 17h14V7H5Zm0 0V7v10Z"/>
    </Icon>
  );
});

IconMaterialCrop75W100.displayName = 'AmauiIconMaterialCrop75W100';

export default IconMaterialCrop75W100;
