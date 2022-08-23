import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeRoundedW100Filled'
      short_name='StayPrimaryLandscape'

      {...props}
    >
      <path d="M3.8 17.7Q3.15 17.7 2.725 17.275Q2.3 16.85 2.3 16.2V7.8Q2.3 7.15 2.725 6.725Q3.15 6.3 3.8 6.3H20.2Q20.85 6.3 21.275 6.725Q21.7 7.15 21.7 7.8V16.2Q21.7 16.85 21.275 17.275Q20.85 17.7 20.2 17.7ZM5.35 17H18.65V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeRoundedW100Filled.displayName = 'AmauiIconMaterialStayPrimaryLandscapeRoundedW100Filled';

export default IconMaterialStayPrimaryLandscapeRoundedW100Filled;
