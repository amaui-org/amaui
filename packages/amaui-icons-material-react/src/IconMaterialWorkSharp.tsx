import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkSharp'
      short_name='Work'

      {...props}
    >
      <path d="M2 21V6H8V2H16V6H22V21ZM10 6H14V4H10ZM4 19H20V8H4ZM4 19V8Z"/>
    </Icon>
  );
});

IconMaterialWorkSharp.displayName = 'AmauiIconMaterialWorkSharp';

export default IconMaterialWorkSharp;
