import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPestControlRodentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlRodentFilled'

      short_name='PestControlRodent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.25 0-3.95-1.438-1.7-1.437-1.975-3.662-1.8-.35-2.937-1.75Q2 12.75 2 10.95q0-2.075 1.463-3.512Q4.925 6 7 6h2.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q9.7 5 9.5 5H8q-.425 0-.713-.288Q7 4.425 7 4t.287-.713Q7.575 3 8 3h1.5q1.05 0 1.775.725Q12 4.45 12 5.5q0 1.05-.725 1.775Q10.55 8 9.5 8H7q-1.25 0-2.125.85T4 10.925q0 1 .575 1.812.575.813 1.525 1.113.4-2.125 2.037-3.487Q9.775 9 11.95 9q.5 0 .963.062.462.063.937.213-1.275.525-2.062 1.65Q11 12.05 11 13.425q0 .8.238 1.563.237.762.737 1.337.125.125.3.15.175.025.325-.1.175-.125.188-.337.012-.213-.113-.388-.35-.45-.512-1Q12 14.1 12 13.5q0-1.475 1.025-2.488Q14.05 10 15.525 10q1.45 0 2.463 1.012Q19 12.025 19 13.45q0 .6-.212 1.162-.213.563-.638.988l3.15 2.75q.3.275.488.612.187.338.187.738 0 .575-.487.937Q21 21 20.35 21Zm5-2q.425 0 .712-.288Q18 18.425 18 18t-.288-.712Q17.425 17 17 17t-.712.288Q16 17.575 16 18t.288.712Q16.575 19 17 19Z"/>
    </Icon>
  );
});

IconMaterialPestControlRodentFilled.displayName = 'AmauiIconMaterialPestControlRodentFilled';

export default IconMaterialPestControlRodentFilled;
