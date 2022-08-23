import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeRoundedW100Filled'
      short_name='Nightlife'

      {...props}
    >
      <path d="M5.7 19.35Q5.55 19.35 5.45 19.25Q5.35 19.15 5.35 19Q5.35 18.85 5.45 18.75Q5.55 18.65 5.7 18.65H7.35V12.9L3.725 7.475Q3.475 7.1 3.7 6.7Q3.925 6.3 4.35 6.3H11.05Q11.5 6.3 11.713 6.7Q11.925 7.1 11.675 7.475L8.05 12.9V18.65H9.7Q9.85 18.65 9.95 18.75Q10.05 18.85 10.05 19Q10.05 19.15 9.95 19.25Q9.85 19.35 9.7 19.35ZM5.6 9H9.8L11.15 7H4.25ZM15.7 19.35Q14.725 19.35 14.038 18.663Q13.35 17.975 13.35 17Q13.35 16.025 14.038 15.337Q14.725 14.65 15.7 14.65Q16.125 14.65 16.525 14.812Q16.925 14.975 17.35 15.35V7.8Q17.35 7.175 17.788 6.738Q18.225 6.3 18.85 6.3H20.35Q20.625 6.3 20.837 6.5Q21.05 6.7 21.05 7Q21.05 7.275 20.837 7.487Q20.625 7.7 20.35 7.7H18.05V17Q18.05 17.975 17.363 18.663Q16.675 19.35 15.7 19.35Z"/>
    </Icon>
  );
});

IconMaterialNightlifeRoundedW100Filled.displayName = 'AmauiIconMaterialNightlifeRoundedW100Filled';

export default IconMaterialNightlifeRoundedW100Filled;
