import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharpW100Filled'
      short_name='Tablet'

      {...props}
    >
      <path d="M2.3 18.7V5.3H21.7V18.7ZM5.35 18H18.65V6H5.35Z"/>
    </Icon>
  );
});

export default IconMaterialTabletSharpW100Filled;
