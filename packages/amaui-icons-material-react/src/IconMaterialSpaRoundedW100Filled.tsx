import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaRoundedW100Filled'
      short_name='Spa'

      {...props}
    >
      <path d="M12.425 19.9Q12.45 20.2 12.238 20.4Q12.025 20.6 11.725 20.55Q8.4 20 6.325 17.625Q4.25 15.25 3.9 11.675Q3.85 11.375 4.062 11.188Q4.275 11 4.575 11.05Q7.975 11.6 10.1 13.775Q12.225 15.95 12.425 19.9ZM11.55 5.55Q11.725 5.3 12 5.3Q12.275 5.3 12.45 5.55Q13.4 6.975 14.025 8.862Q14.65 10.75 14.65 12.25Q13.85 12.7 13.088 13.65Q12.325 14.6 12 15.3Q11.55 14.45 10.863 13.587Q10.175 12.725 9.35 12.2Q9.35 10.7 9.975 8.837Q10.6 6.975 11.55 5.55ZM19.45 11.05Q19.75 11 19.962 11.188Q20.175 11.375 20.125 11.675Q19.8 14.975 18.1 17.125Q16.4 19.275 13.2 20.4Q13.15 19.275 12.925 18.163Q12.7 17.05 12.35 16.2Q13.075 14.325 14.913 12.9Q16.75 11.475 19.45 11.05Z"/>
    </Icon>
  );
});

IconMaterialSpaRoundedW100Filled.displayName = 'AmauiIconMaterialSpaRoundedW100Filled';

export default IconMaterialSpaRoundedW100Filled;
