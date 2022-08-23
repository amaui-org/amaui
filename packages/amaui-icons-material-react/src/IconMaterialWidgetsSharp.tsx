import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsSharp'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.65 13 11 7.35 16.65 1.7 22.3 7.35ZM3 11V3H11V11ZM13 21V13H21V21ZM3 21V13H11V21ZM5 9H9V5H5ZM16.675 10.2 19.5 7.375 16.675 4.55 13.85 7.375ZM15 19H19V15H15ZM5 19H9V15H5ZM9 9ZM13.85 7.375ZM9 15ZM15 15Z"/>
    </Icon>
  );
});

IconMaterialWidgetsSharp.displayName = 'AmauiIconMaterialWidgetsSharp';

export default IconMaterialWidgetsSharp;
