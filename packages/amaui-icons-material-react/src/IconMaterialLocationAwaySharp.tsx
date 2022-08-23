import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationAwaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwaySharp'
      short_name='LocationAway'

      {...props}
    >
      <path d="M2 21V9L10 3L15.4 7.05Q14.8 7.125 14.238 7.338Q13.675 7.55 13.175 7.9L10 5.5L4 10V19H8V21ZM10 21V19.1Q10 18.575 10.262 18.112Q10.525 17.65 10.975 17.375Q12.125 16.7 13.387 16.35Q14.65 16 16 16Q17.35 16 18.613 16.35Q19.875 16.7 21.025 17.375Q21.475 17.65 21.738 18.112Q22 18.575 22 19.1V21ZM12.15 19H19.85Q18.975 18.5 18 18.25Q17.025 18 16 18Q14.975 18 14 18.25Q13.025 18.5 12.15 19ZM16 15Q14.75 15 13.875 14.125Q13 13.25 13 12Q13 10.75 13.875 9.875Q14.75 9 16 9Q17.25 9 18.125 9.875Q19 10.75 19 12Q19 13.25 18.125 14.125Q17.25 15 16 15ZM16 13Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11Q15.575 11 15.288 11.287Q15 11.575 15 12Q15 12.425 15.288 12.712Q15.575 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialLocationAwaySharp.displayName = 'AmauiIconMaterialLocationAwaySharp';

export default IconMaterialLocationAwaySharp;
