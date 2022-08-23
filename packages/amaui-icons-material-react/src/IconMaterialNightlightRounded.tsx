import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightRounded'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14 4Q10.675 4 8.338 6.337Q6 8.675 6 12Q6 15.325 8.338 17.663Q10.675 20 14 20Q14.275 20 14.525 20Q14.775 20 15 19.95Q13.575 18.3 12.788 16.262Q12 14.225 12 12Q12 9.775 12.788 7.737Q13.575 5.7 15 4.05Q14.775 4 14.525 4Q14.275 4 14 4ZM14 22Q11.95 22 10.125 21.212Q8.3 20.425 6.938 19.062Q5.575 17.7 4.787 15.875Q4 14.05 4 12Q4 9.925 4.787 8.113Q5.575 6.3 6.938 4.938Q8.3 3.575 10.125 2.787Q11.95 2 14 2Q15.1 2 16.125 2.237Q17.15 2.475 18.1 2.9Q18.45 3.075 18.475 3.362Q18.5 3.65 18.15 3.9Q16.25 5.275 15.125 7.375Q14 9.475 14 12Q14 14.525 15.125 16.625Q16.25 18.725 18.15 20.1Q18.5 20.35 18.475 20.638Q18.45 20.925 18.1 21.1Q17.15 21.525 16.125 21.762Q15.1 22 14 22ZM10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Q10.5 12 10.5 12Z"/>
    </Icon>
  );
});

IconMaterialNightlightRounded.displayName = 'AmauiIconMaterialNightlightRounded';

export default IconMaterialNightlightRounded;
