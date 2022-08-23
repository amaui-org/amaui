import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthRoundedW100Filled'
      short_name='North'

      {...props}
    >
      <path d="M12 20.6Q11.85 20.6 11.75 20.5Q11.65 20.4 11.65 20.25V4.475L6.575 9.575Q6.475 9.675 6.325 9.675Q6.175 9.675 6.075 9.575Q5.975 9.475 5.975 9.325Q5.975 9.175 6.075 9.075L11.475 3.7Q11.6 3.575 11.725 3.525Q11.85 3.475 12 3.475Q12.15 3.475 12.275 3.525Q12.4 3.575 12.525 3.7L17.925 9.075Q18.025 9.175 18.025 9.325Q18.025 9.475 17.925 9.575Q17.825 9.7 17.675 9.688Q17.525 9.675 17.425 9.575L12.35 4.5V20.25Q12.35 20.4 12.25 20.5Q12.15 20.6 12 20.6Z"/>
    </Icon>
  );
});

IconMaterialNorthRoundedW100Filled.displayName = 'AmauiIconMaterialNorthRoundedW100Filled';

export default IconMaterialNorthRoundedW100Filled;
