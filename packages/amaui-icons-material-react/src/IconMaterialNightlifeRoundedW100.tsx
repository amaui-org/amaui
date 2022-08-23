import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeRoundedW100'
      short_name='Nightlife'

      {...props}
    >
      <path d="M5.2 19.35Q5.05 19.35 4.95 19.25Q4.85 19.15 4.85 19Q4.85 18.85 4.95 18.75Q5.05 18.65 5.2 18.65H6.85V12.9L3.225 7.475Q2.975 7.1 3.2 6.7Q3.425 6.3 3.85 6.3H10.55Q11 6.3 11.213 6.7Q11.425 7.1 11.175 7.475L7.55 12.9V18.65H9.2Q9.35 18.65 9.45 18.75Q9.55 18.85 9.55 19Q9.55 19.15 9.45 19.25Q9.35 19.35 9.2 19.35ZM5.1 9H9.3L10.65 7H3.75ZM15.2 19.35Q14.225 19.35 13.538 18.663Q12.85 17.975 12.85 17Q12.85 16.025 13.538 15.337Q14.225 14.65 15.2 14.65Q15.625 14.65 16.025 14.812Q16.425 14.975 16.85 15.35V7.8Q16.85 7.175 17.288 6.738Q17.725 6.3 18.35 6.3H19.85Q20.125 6.3 20.337 6.5Q20.55 6.7 20.55 7Q20.55 7.275 20.337 7.487Q20.125 7.7 19.85 7.7H17.55V17Q17.55 17.975 16.863 18.663Q16.175 19.35 15.2 19.35Z"/>
    </Icon>
  );
});

IconMaterialNightlifeRoundedW100.displayName = 'AmauiIconMaterialNightlifeRoundedW100';

export default IconMaterialNightlifeRoundedW100;
