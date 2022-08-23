import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideSourceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceRoundedW100Filled'
      short_name='HideSource'

      {...props}
    >
      <path d="M19.625 20.6 17.65 18.625Q16.5 19.6 15.075 20.15Q13.65 20.7 12.025 20.7Q10.225 20.7 8.638 20.012Q7.05 19.325 5.875 18.15Q4.7 16.975 4.013 15.387Q3.325 13.8 3.325 12Q3.325 10.375 3.875 8.95Q4.425 7.525 5.4 6.375L3.4 4.375Q3.3 4.275 3.312 4.137Q3.325 4 3.425 3.9Q3.55 3.775 3.675 3.775Q3.8 3.775 3.925 3.9L20.15 20.125Q20.25 20.225 20.238 20.363Q20.225 20.5 20.125 20.6Q20 20.725 19.875 20.725Q19.75 20.725 19.625 20.6ZM19.425 16.6 7.425 4.6Q8.45 3.975 9.6 3.637Q10.75 3.3 12.025 3.3Q13.825 3.3 15.413 3.987Q17 4.675 18.175 5.85Q19.35 7.025 20.038 8.612Q20.725 10.2 20.725 12Q20.725 13.275 20.388 14.425Q20.05 15.575 19.425 16.6Z"/>
    </Icon>
  );
});

IconMaterialHideSourceRoundedW100Filled.displayName = 'AmauiIconMaterialHideSourceRoundedW100Filled';

export default IconMaterialHideSourceRoundedW100Filled;
