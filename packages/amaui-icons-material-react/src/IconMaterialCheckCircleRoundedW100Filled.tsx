import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleRoundedW100Filled'
      short_name='CheckCircle'

      {...props}
    >
      <path d="M10.55 14.7 7.925 12.075Q7.825 11.975 7.7 11.975Q7.575 11.975 7.45 12.1Q7.325 12.225 7.325 12.35Q7.325 12.475 7.45 12.6L10.025 15.175Q10.25 15.4 10.55 15.4Q10.85 15.4 11.075 15.175L16.525 9.725Q16.625 9.625 16.625 9.5Q16.625 9.375 16.5 9.25Q16.375 9.125 16.25 9.125Q16.125 9.125 16 9.25ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleRoundedW100Filled.displayName = 'AmauiIconMaterialCheckCircleRoundedW100Filled';

export default IconMaterialCheckCircleRoundedW100Filled;
