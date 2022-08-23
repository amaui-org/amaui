import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutSharpFilled'
      short_name='AllOut'

      {...props}
    >
      <path d="M3 21V16H5V19H8V21ZM16 21V19H19V16H21V21ZM12 19Q9.1 19 7.05 16.95Q5 14.9 5 12Q5 9.1 7.05 7.05Q9.1 5 12 5Q14.9 5 16.95 7.05Q19 9.1 19 12Q19 14.9 16.95 16.95Q14.9 19 12 19ZM3 8V3H8V5H5V8ZM19 8V5H16V3H21V8Z"/>
    </Icon>
  );
});

IconMaterialAllOutSharpFilled.displayName = 'AmauiIconMaterialAllOutSharpFilled';

export default IconMaterialAllOutSharpFilled;
