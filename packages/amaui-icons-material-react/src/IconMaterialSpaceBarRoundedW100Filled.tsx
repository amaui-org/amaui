import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarRoundedW100Filled'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M6.05 13.7Q5.725 13.7 5.513 13.487Q5.3 13.275 5.3 12.95V9.35Q5.3 9.2 5.4 9.1Q5.5 9 5.65 9Q5.8 9 5.9 9.1Q6 9.2 6 9.35V13H18V9.35Q18 9.2 18.1 9.1Q18.2 9 18.35 9Q18.5 9 18.6 9.1Q18.7 9.2 18.7 9.35V12.95Q18.7 13.275 18.488 13.487Q18.275 13.7 17.95 13.7Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarRoundedW100Filled.displayName = 'AmauiIconMaterialSpaceBarRoundedW100Filled';

export default IconMaterialSpaceBarRoundedW100Filled;
