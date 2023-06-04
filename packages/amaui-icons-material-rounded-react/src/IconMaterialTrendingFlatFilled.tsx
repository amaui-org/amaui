import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingFlatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatFilled'

      short_name='TrendingFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.175 13H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h14.175l-1.4-1.4q-.275-.275-.262-.688.012-.412.312-.712.275-.275.7-.275.425 0 .7.275l3.075 3.1q.15.15.225.325.075.175.05.375 0 .2-.062.375-.063.175-.213.325l-3.1 3.1q-.3.3-.712.287-.413-.012-.688-.287-.3-.3-.3-.713 0-.412.275-.687Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatFilled.displayName = 'AmauiIconMaterialTrendingFlatFilled';

export default IconMaterialTrendingFlatFilled;
