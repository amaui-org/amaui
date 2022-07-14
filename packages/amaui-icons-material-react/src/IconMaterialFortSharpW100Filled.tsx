import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFortSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortSharpW100Filled'
      short_name='Fort'

      {...props}
    >
      <path d="M1.65 20.35V17.275L3.65 15.275V8.725L1.65 6.725V3.65H2.35V5.65H5.65V3.65H6.35V5.65H9.65V3.65H10.35V6.725L8.35 8.725V10.65H15.65V8.725L13.65 6.725V3.65H14.35V5.65H17.65V3.65H18.35V5.65H21.65V3.65H22.35V6.725L20.35 8.725V15.275L22.35 17.275V20.35H14.65V15.35H9.35V20.35Z"/>
    </Icon>
  );
});

export default IconMaterialFortSharpW100Filled;
