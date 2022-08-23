import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyRoundedW100Filled'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M21.05 22.05 18.7 19.7H4.8Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H5.3L2.5 3.5Q2.4 3.4 2.388 3.262Q2.375 3.125 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.55 21.55Q21.65 21.65 21.663 21.788Q21.675 21.925 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05ZM20.7 17.9 15.475 12.675Q15.475 12.675 15.475 12.675Q15.475 12.675 15.475 12.675Q15.35 11.4 14.475 10.525Q13.6 9.65 12.325 9.525Q12.325 9.525 12.325 9.525Q12.325 9.525 12.325 9.525L8.375 5.575L9.1 4.775Q9.3 4.55 9.588 4.425Q9.875 4.3 10.2 4.3H13.8Q14.125 4.3 14.413 4.425Q14.7 4.55 14.9 4.775L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8ZM12 16.5Q12.725 16.5 13.363 16.225Q14 15.95 14.475 15.475L9.525 10.525Q9.05 11 8.775 11.637Q8.5 12.275 8.5 13Q8.5 14.475 9.512 15.488Q10.525 16.5 12 16.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyRoundedW100Filled.displayName = 'AmauiIconMaterialNoPhotographyRoundedW100Filled';

export default IconMaterialNoPhotographyRoundedW100Filled;
