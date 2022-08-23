import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffRoundedW100Filled'
      short_name='LocationOff'

      {...props}
    >
      <path d="M17.75 14.95 13.275 10.475Q13.325 10.35 13.338 10.238Q13.35 10.125 13.35 10Q13.35 9.425 12.963 9.037Q12.575 8.65 12 8.65Q11.875 8.65 11.762 8.662Q11.65 8.675 11.525 8.725L7.2 4.4Q8.2 3.55 9.425 3.1Q10.65 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 11.25 18.95 12.425Q18.55 13.6 17.75 14.95ZM11.475 21.025Q8.025 17.825 6.338 15.087Q4.65 12.35 4.65 10.2Q4.65 9.15 4.875 8.237Q5.1 7.325 5.525 6.525L2.475 3.475Q2.375 3.375 2.375 3.25Q2.375 3.125 2.475 3Q2.575 2.875 2.725 2.875Q2.875 2.875 3 3L21.55 21.55Q21.675 21.675 21.675 21.8Q21.675 21.925 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05L16.175 17.175Q15.45 18.1 14.538 19.062Q13.625 20.025 12.525 21.025Q12.425 21.125 12.288 21.163Q12.15 21.2 12 21.2Q11.85 21.2 11.725 21.163Q11.6 21.125 11.475 21.025Z"/>
    </Icon>
  );
});

IconMaterialLocationOffRoundedW100Filled.displayName = 'AmauiIconMaterialLocationOffRoundedW100Filled';

export default IconMaterialLocationOffRoundedW100Filled;
