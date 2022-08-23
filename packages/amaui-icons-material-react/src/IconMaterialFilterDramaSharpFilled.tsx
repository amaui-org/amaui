import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterDramaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaSharpFilled'
      short_name='FilterDrama'

      {...props}
    >
      <path d="M6.5 20Q4.2 20 2.6 18.4Q1 16.8 1 14.5Q1 12.675 2.338 11.337Q3.675 10 5.5 10Q7.325 10 8.662 11.337Q10 12.675 10 14.5H12Q12 11.925 10.4 10.188Q8.8 8.45 6.25 8Q6.7 6.15 8.287 5.075Q9.875 4 12 4Q14.95 4 16.975 6.025Q19 8.05 19 11Q20.575 11 21.788 12.4Q23 13.8 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaSharpFilled.displayName = 'AmauiIconMaterialFilterDramaSharpFilled';

export default IconMaterialFilterDramaSharpFilled;
