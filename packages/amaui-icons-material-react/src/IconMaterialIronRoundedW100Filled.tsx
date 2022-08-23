import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronRoundedW100Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M4.375 16.7Q4.05 16.7 3.837 16.487Q3.625 16.275 3.625 15.95V14.9Q3.625 13.625 4.537 12.712Q5.45 11.8 6.725 11.8H15.325V10.65Q15.325 9.975 14.838 9.488Q14.35 9 13.675 9H11.1Q10.525 9 10.062 9.363Q9.6 9.725 9.475 10.3Q9.425 10.45 9.325 10.55Q9.225 10.65 9.1 10.65Q8.95 10.65 8.85 10.537Q8.75 10.425 8.775 10.3Q8.9 9.45 9.562 8.875Q10.225 8.3 11.1 8.3H13.675Q14.65 8.3 15.338 8.987Q16.025 9.675 16.025 10.65V14.6Q16.7 14.6 17.188 14.113Q17.675 13.625 17.675 12.95V9.65Q17.675 8.675 18.363 7.987Q19.05 7.3 20.025 7.3Q20.175 7.3 20.275 7.4Q20.375 7.5 20.375 7.65Q20.375 7.8 20.275 7.9Q20.175 8 20.025 8Q19.35 8 18.863 8.488Q18.375 8.975 18.375 9.65V12.95Q18.375 13.925 17.688 14.612Q17 15.3 16.025 15.3V15.95Q16.025 16.275 15.813 16.487Q15.6 16.7 15.275 16.7Z"/>
    </Icon>
  );
});

IconMaterialIronRoundedW100Filled.displayName = 'AmauiIconMaterialIronRoundedW100Filled';

export default IconMaterialIronRoundedW100Filled;
