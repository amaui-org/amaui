import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffRoundedW100Filled'
      short_name='TvOff'

      {...props}
    >
      <path d="M20.2 17.35 7.15 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V16.2Q20.7 16.475 20.6 16.763Q20.5 17.05 20.2 17.35ZM19.95 20.95 16.65 17.7H14.7V18.95Q14.7 19.275 14.488 19.487Q14.275 19.7 13.95 19.7H10.05Q9.725 19.7 9.513 19.487Q9.3 19.275 9.3 18.95V17.7H4.8Q4.15 17.7 3.725 17.275Q3.3 16.85 3.3 16.2V5.8Q3.3 5.45 3.425 5.2Q3.55 4.95 3.75 4.75L2.35 3.35Q2.25 3.25 2.237 3.112Q2.225 2.975 2.35 2.85Q2.475 2.725 2.6 2.725Q2.725 2.725 2.85 2.85L20.45 20.45Q20.55 20.55 20.562 20.688Q20.575 20.825 20.45 20.95Q20.35 21.05 20.213 21.05Q20.075 21.05 19.95 20.95Z"/>
    </Icon>
  );
});

IconMaterialTvOffRoundedW100Filled.displayName = 'AmauiIconMaterialTvOffRoundedW100Filled';

export default IconMaterialTvOffRoundedW100Filled;
