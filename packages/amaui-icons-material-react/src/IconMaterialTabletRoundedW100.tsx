import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletRoundedW100'
      short_name='Tablet'

      {...props}
    >
      <path d="M3.8 18.7Q3.175 18.7 2.738 18.262Q2.3 17.825 2.3 17.2V6.8Q2.3 6.175 2.738 5.738Q3.175 5.3 3.8 5.3H20.2Q20.825 5.3 21.263 5.738Q21.7 6.175 21.7 6.8V17.2Q21.7 17.825 21.263 18.262Q20.825 18.7 20.2 18.7ZM5.35 18H18.65V6H5.35ZM4.65 6H3.8Q3.45 6 3.225 6.225Q3 6.45 3 6.8V17.2Q3 17.55 3.225 17.775Q3.45 18 3.8 18H4.65ZM19.35 6V18H20.2Q20.55 18 20.775 17.775Q21 17.55 21 17.2V6.8Q21 6.45 20.775 6.225Q20.55 6 20.2 6ZM21 6Q21 6 20.775 6Q20.55 6 20.2 6H19.35H20.2Q20.55 6 20.775 6Q21 6 21 6ZM3 6Q3 6 3.225 6Q3.45 6 3.8 6H4.65H3.8Q3.45 6 3.225 6Q3 6 3 6Z"/>
    </Icon>
  );
});

IconMaterialTabletRoundedW100.displayName = 'AmauiIconMaterialTabletRoundedW100';

export default IconMaterialTabletRoundedW100;
