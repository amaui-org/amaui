import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchHandsFree = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchHandsFree'

      short_name='SearchHandsFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-84v-120q-60-12-102-54t-54-102H164q12 109 89.5 185T440-164Zm80 0q109-12 186.5-89.5T796-440H676q-12 60-54 102t-102 54v120ZM164-520h116l97-97q11-11 25.5-17t30.5-6h94q16 0 30.5 6t25.5 17l97 97h116q-15-121-105-200.5T480-800q-121 0-211 79.5T164-520Z"/>
    </Icon>
  );
});

IconMaterialSearchHandsFree.displayName = 'AmauiIconMaterialSearchHandsFree';

export default IconMaterialSearchHandsFree;
