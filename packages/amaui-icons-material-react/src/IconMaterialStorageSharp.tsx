import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageSharp'
      short_name='Storage'

      {...props}
    >
      <path d="M3 20V16H21V20ZM5 19H7V17H5ZM3 8V4H21V8ZM5 7H7V5H5ZM3 14V10H21V14ZM5 13H7V11H5Z"/>
    </Icon>
  );
});

export default IconMaterialStorageSharp;
