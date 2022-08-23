import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelRoundedW100'
      short_name='Gavel'

      {...props}
    >
      <path d="M4.475 20.35Q4.35 20.35 4.25 20.25Q4.15 20.15 4.15 20Q4.15 19.85 4.25 19.75Q4.35 19.65 4.5 19.65H14.525Q14.65 19.65 14.75 19.75Q14.85 19.85 14.85 20Q14.85 20.15 14.75 20.25Q14.65 20.35 14.5 20.35ZM9.15 13.65 6.5 11Q6.075 10.575 6.062 9.95Q6.05 9.325 6.475 8.9L6.9 8.45L11.7 13.2L11.25 13.65Q10.825 14.075 10.2 14.075Q9.575 14.075 9.15 13.65ZM15.2 9.7 10.45 4.9 10.9 4.475Q11.35 4.05 11.963 4.062Q12.575 4.075 13 4.5L15.65 7.15Q16.075 7.575 16.075 8.2Q16.075 8.825 15.65 9.25ZM20.35 18.85 8.45 6.95 8.95 6.45 20.875 18.375Q20.975 18.475 20.963 18.613Q20.95 18.75 20.85 18.85Q20.725 18.975 20.6 18.975Q20.475 18.975 20.35 18.85Z"/>
    </Icon>
  );
});

IconMaterialGavelRoundedW100.displayName = 'AmauiIconMaterialGavelRoundedW100';

export default IconMaterialGavelRoundedW100;
