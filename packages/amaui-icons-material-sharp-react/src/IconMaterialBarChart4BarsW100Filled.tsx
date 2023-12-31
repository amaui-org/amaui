import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBarChart4BarsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BarChart4BarsW100Filled'

      short_name='BarChart4Bars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h696v28H132Zm40-108v-188h68v188h-68Zm182 0v-388h68v388h-68Zm183 0v-268h68v268h-68Zm183 0v-508h68v508h-68Z"/>
    </Icon>
  );
});

IconMaterialBarChart4BarsW100Filled.displayName = 'AmauiIconMaterialBarChart4BarsW100Filled';

export default IconMaterialBarChart4BarsW100Filled;
