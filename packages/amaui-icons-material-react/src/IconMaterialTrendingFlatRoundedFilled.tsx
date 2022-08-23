import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrendingFlatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatRoundedFilled'
      short_name='TrendingFlat'

      {...props}
    >
      <path d="M18.175 13H4Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H18.175L16.775 9.6Q16.5 9.325 16.513 8.912Q16.525 8.5 16.825 8.2Q17.1 7.925 17.525 7.925Q17.95 7.925 18.225 8.2L21.3 11.3Q21.45 11.45 21.525 11.625Q21.6 11.8 21.575 12Q21.575 12.2 21.513 12.375Q21.45 12.55 21.3 12.7L18.2 15.8Q17.9 16.1 17.488 16.087Q17.075 16.075 16.8 15.8Q16.5 15.5 16.5 15.087Q16.5 14.675 16.775 14.4Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatRoundedFilled.displayName = 'AmauiIconMaterialTrendingFlatRoundedFilled';

export default IconMaterialTrendingFlatRoundedFilled;
