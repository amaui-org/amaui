import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingFlat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlat'

      short_name='TrendingFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.5 16.5-1.425-1.4 2.1-2.1H3v-2h15.175L16.1 8.9l1.425-1.4L22 12Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlat.displayName = 'AmauiIconMaterialTrendingFlat';

export default IconMaterialTrendingFlat;
