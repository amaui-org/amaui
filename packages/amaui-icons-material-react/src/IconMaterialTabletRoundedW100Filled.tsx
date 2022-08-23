import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletRoundedW100Filled'
      short_name='Tablet'

      {...props}
    >
      <path d="M3.8 18.7Q3.175 18.7 2.738 18.262Q2.3 17.825 2.3 17.2V6.8Q2.3 6.175 2.738 5.738Q3.175 5.3 3.8 5.3H20.2Q20.825 5.3 21.263 5.738Q21.7 6.175 21.7 6.8V17.2Q21.7 17.825 21.263 18.262Q20.825 18.7 20.2 18.7ZM5.35 18H18.65V6H5.35Z"/>
    </Icon>
  );
});

IconMaterialTabletRoundedW100Filled.displayName = 'AmauiIconMaterialTabletRoundedW100Filled';

export default IconMaterialTabletRoundedW100Filled;
