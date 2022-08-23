import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarSharpW100Filled'
      short_name='WineBar'

      {...props}
    >
      <path d="M8.9 19.7V19H11.65V14.35Q9.5 14.025 8.325 12.512Q7.15 11 7.15 9V4.3H16.85V9Q16.85 11 15.675 12.512Q14.5 14.025 12.35 14.35V19H15.1V19.7ZM7.85 8.65H16.15V5H7.85Z"/>
    </Icon>
  );
});

IconMaterialWineBarSharpW100Filled.displayName = 'AmauiIconMaterialWineBarSharpW100Filled';

export default IconMaterialWineBarSharpW100Filled;
