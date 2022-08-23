import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandCircleDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDownRoundedW100Filled'
      short_name='ExpandCircleDown'

      {...props}
    >
      <path d="M11.475 14.05Q11.7 14.275 12 14.275Q12.3 14.275 12.525 14.05L15.325 11.25Q15.45 11.125 15.438 11Q15.425 10.875 15.325 10.775Q15.2 10.65 15.075 10.65Q14.95 10.65 14.825 10.775L12 13.6L9.15 10.75Q9.025 10.625 8.9 10.637Q8.775 10.65 8.675 10.75Q8.55 10.875 8.55 11Q8.55 11.125 8.675 11.25ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDownRoundedW100Filled.displayName = 'AmauiIconMaterialExpandCircleDownRoundedW100Filled';

export default IconMaterialExpandCircleDownRoundedW100Filled;
