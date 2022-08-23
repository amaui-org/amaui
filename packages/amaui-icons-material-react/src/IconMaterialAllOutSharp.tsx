import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutSharp'
      short_name='AllOut'

      {...props}
    >
      <path d="M3 21V16H5V19H8V21ZM16 21V19H19V16H21V21ZM12 19Q9.1 19 7.05 16.95Q5 14.9 5 12Q5 9.1 7.05 7.05Q9.1 5 12 5Q14.9 5 16.95 7.05Q19 9.1 19 12Q19 14.9 16.95 16.95Q14.9 19 12 19ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM3 8V3H8V5H5V8ZM19 8V5H16V3H21V8ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialAllOutSharp.displayName = 'AmauiIconMaterialAllOutSharp';

export default IconMaterialAllOutSharp;
