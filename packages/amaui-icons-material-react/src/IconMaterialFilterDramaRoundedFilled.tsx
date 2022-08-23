import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterDramaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaRoundedFilled'
      short_name='FilterDrama'

      {...props}
    >
      <path d="M6.5 20Q4.2 20 2.6 18.4Q1 16.8 1 14.5Q1 12.675 2.338 11.337Q3.675 10 5.5 10Q7.1 10 8.338 11.05Q9.575 12.1 9.9 13.625Q9.975 14 10.263 14.25Q10.55 14.5 10.9 14.5Q11.4 14.5 11.7 14.162Q12 13.825 11.925 13.4Q11.575 11.25 10.05 9.825Q8.525 8.4 6.25 8Q6.7 6.15 8.287 5.075Q9.875 4 12 4Q14.95 4 16.975 6.025Q19 8.05 19 11Q20.575 11 21.788 12.4Q23 13.8 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaRoundedFilled.displayName = 'AmauiIconMaterialFilterDramaRoundedFilled';

export default IconMaterialFilterDramaRoundedFilled;
