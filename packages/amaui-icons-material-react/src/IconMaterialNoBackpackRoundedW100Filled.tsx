import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackRoundedW100Filled'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M15.95 13.125 18.7 15.875V8Q18.7 6.6 17.8 5.687Q16.9 4.775 15.7 4.65V3.5Q15.7 3.15 15.45 2.9Q15.2 2.65 14.85 2.65Q14.5 2.65 14.25 2.9Q14 3.15 14 3.5V4.65H10V3.5Q10 3.15 9.75 2.9Q9.5 2.65 9.15 2.65Q8.8 2.65 8.55 2.9Q8.3 3.15 8.3 3.5V4.65Q8.075 4.675 7.9 4.712Q7.725 4.75 7.625 4.8L15.525 12.7Q15.675 12.75 15.788 12.863Q15.9 12.975 15.95 13.125ZM6.8 20.85Q6.175 20.85 5.738 20.425Q5.3 20 5.3 19.35V8Q5.3 7.725 5.375 7.3Q5.45 6.875 5.6 6.6L3.4 4.4Q3.3 4.3 3.288 4.162Q3.275 4.025 3.4 3.9Q3.5 3.8 3.65 3.8Q3.8 3.8 3.9 3.9L20.1 20.1Q20.2 20.2 20.213 20.337Q20.225 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6L18.675 19.675Q18.55 20.175 18.163 20.513Q17.775 20.85 17.2 20.85ZM11.65 12.65H8.35Q8.2 12.65 8.1 12.75Q8 12.85 8 13Q8 13.15 8.1 13.25Q8.2 13.35 8.35 13.35H12.35Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackRoundedW100Filled.displayName = 'AmauiIconMaterialNoBackpackRoundedW100Filled';

export default IconMaterialNoBackpackRoundedW100Filled;
