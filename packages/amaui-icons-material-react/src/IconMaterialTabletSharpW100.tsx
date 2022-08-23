import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharpW100'
      short_name='Tablet'

      {...props}
    >
      <path d="M2.3 18.7V5.3H21.7V18.7ZM5.35 18H18.65V6H5.35ZM3 18H4.65V6H3ZM19.35 18H21V6H19.35ZM3 6H4.65ZM19.35 6H21Z"/>
    </Icon>
  );
});

IconMaterialTabletSharpW100.displayName = 'AmauiIconMaterialTabletSharpW100';

export default IconMaterialTabletSharpW100;
