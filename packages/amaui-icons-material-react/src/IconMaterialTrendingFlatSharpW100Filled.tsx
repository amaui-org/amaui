import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatSharpW100Filled'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M17.5 15.6 17 15.1 19.75 12.35H3.65V11.65H19.75L17 8.9L17.5 8.4L21.1 12Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatSharpW100Filled.displayName = 'AmauiIconMaterialTrendingFlatSharpW100Filled';

export default IconMaterialTrendingFlatSharpW100Filled;
