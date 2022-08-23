import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDatasetSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetSharp'
      short_name='Dataset'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19ZM7 11H11V7H7ZM13 11H17V7H13ZM7 17H11V13H7ZM13 17H17V13H13Z"/>
    </Icon>
  );
});

IconMaterialDatasetSharp.displayName = 'AmauiIconMaterialDatasetSharp';

export default IconMaterialDatasetSharp;
