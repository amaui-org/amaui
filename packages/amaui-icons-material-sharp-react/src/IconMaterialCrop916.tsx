import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop916 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop916'

      short_name='Crop916'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-720h400v720H280Zm80-640v560h240v-560H360Zm0 560v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCrop916.displayName = 'AmauiIconMaterialCrop916';

export default IconMaterialCrop916;
