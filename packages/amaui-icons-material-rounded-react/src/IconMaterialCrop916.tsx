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
      <path d="M360-120q-33 0-56.5-23.5T280-200v-560q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v560q0 33-23.5 56.5T600-120H360Zm0-640v560h240v-560H360Zm0 0v560-560Z"/>
    </Icon>
  );
});

IconMaterialCrop916.displayName = 'AmauiIconMaterialCrop916';

export default IconMaterialCrop916;
