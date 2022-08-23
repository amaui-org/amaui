import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExploreOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffRoundedW100Filled'
      short_name='ExploreOff'

      {...props}
    >
      <path d="M20.125 20.6Q20 20.725 19.875 20.725Q19.75 20.725 19.625 20.6L17.65 18.625Q16.45 19.65 15.012 20.175Q13.575 20.7 12.025 20.7Q10.225 20.7 8.638 20.012Q7.05 19.325 5.875 18.15Q4.7 16.975 4.013 15.387Q3.325 13.8 3.325 12Q3.325 10.45 3.85 9.012Q4.375 7.575 5.4 6.375L3.4 4.375Q3.3 4.275 3.312 4.137Q3.325 4 3.425 3.9Q3.55 3.775 3.675 3.775Q3.8 3.775 3.925 3.9L20.15 20.125Q20.25 20.225 20.238 20.363Q20.225 20.5 20.125 20.6ZM19.425 16.6 14.325 11.5 16 8.525Q16.15 8.275 15.95 8.075Q15.75 7.875 15.5 8.025L12.525 9.7L7.425 4.6Q8.45 3.975 9.6 3.637Q10.75 3.3 12.025 3.3Q13.825 3.3 15.413 3.987Q17 4.675 18.175 5.85Q19.35 7.025 20.038 8.612Q20.725 10.2 20.725 12Q20.725 13.275 20.388 14.425Q20.05 15.575 19.425 16.6ZM8.55 15.975 12.675 13.65 10.375 11.35 8.05 15.475Q7.9 15.725 8.1 15.925Q8.3 16.125 8.55 15.975Z"/>
    </Icon>
  );
});

IconMaterialExploreOffRoundedW100Filled.displayName = 'AmauiIconMaterialExploreOffRoundedW100Filled';

export default IconMaterialExploreOffRoundedW100Filled;
