import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountTreeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeSharpW100Filled'
      short_name='AccountTree'

      {...props}
    >
      <path d="M15.65 20.35V17.35H11.65V7.35H8.35V10.35H2.65V3.65H8.35V6.65H15.65V3.65H21.35V10.35H15.65V7.35H12.35V16.65H15.65V13.65H21.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeSharpW100Filled.displayName = 'AmauiIconMaterialAccountTreeSharpW100Filled';

export default IconMaterialAccountTreeSharpW100Filled;
