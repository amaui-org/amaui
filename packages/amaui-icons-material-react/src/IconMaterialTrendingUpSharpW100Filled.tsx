import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingUpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingUpSharpW100Filled'
      short_name='TrendingUp'

      {...props}
    >
      <path d="M3.275 17.35 2.775 16.85 9.275 10.3 13.275 14.3 20.075 7.6H16.525V6.9H21.225V11.6H20.525V8.1L13.275 15.35L9.275 11.35Z"/>
    </Icon>
  );
});

IconMaterialTrendingUpSharpW100Filled.displayName = 'AmauiIconMaterialTrendingUpSharpW100Filled';

export default IconMaterialTrendingUpSharpW100Filled;
