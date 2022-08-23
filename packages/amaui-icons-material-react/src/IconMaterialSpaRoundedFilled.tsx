import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaRoundedFilled'
      short_name='Spa'

      {...props}
    >
      <path d="M13 20.85Q13.05 21.325 12.688 21.663Q12.325 22 11.875 21.925Q7.525 21.275 4.975 18.562Q2.425 15.85 2.075 11.175Q2.025 10.675 2.362 10.337Q2.7 10 3.2 10.075Q7.775 10.7 10.25 13.6Q12.725 16.5 13 20.85ZM11.225 2.975Q11.525 2.55 12.012 2.562Q12.5 2.575 12.8 3Q13.925 4.575 14.763 6.45Q15.6 8.325 15.775 9.6Q14.8 10.05 13.6 11.062Q12.4 12.075 12.025 12.625Q11.675 12.075 10.413 11.012Q9.15 9.95 8.275 9.6Q8.475 8.35 9.288 6.437Q10.1 4.525 11.225 2.975ZM20.875 10.075Q21.35 10.025 21.675 10.337Q22 10.65 21.975 11.15Q21.775 15.175 19.788 17.688Q17.8 20.2 14.975 21.2Q14.925 19.675 14.513 17.738Q14.1 15.8 13.225 14.4Q14.3 12.75 16.413 11.55Q18.525 10.35 20.875 10.075Z"/>
    </Icon>
  );
});

IconMaterialSpaRoundedFilled.displayName = 'AmauiIconMaterialSpaRoundedFilled';

export default IconMaterialSpaRoundedFilled;
