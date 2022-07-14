import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSharp'
      short_name='Delete'

      {...props}
    >
      <path d="M5 21V6H4V4H9V3H15V4H20V6H19V21ZM7 19H17V6H7ZM9 17H11V8H9ZM13 17H15V8H13ZM7 6V19Z"/>
    </Icon>
  );
});

export default IconMaterialDeleteSharp;
