import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthRoundedW100Filled'
      short_name='South'

      {...props}
    >
      <path d="M12 20.3Q11.85 20.3 11.725 20.25Q11.6 20.2 11.475 20.075L6.075 14.675Q5.975 14.575 5.975 14.438Q5.975 14.3 6.075 14.2Q6.175 14.1 6.325 14.1Q6.475 14.1 6.575 14.2L11.65 19.275V3.525Q11.65 3.375 11.75 3.275Q11.85 3.175 12 3.175Q12.15 3.175 12.25 3.275Q12.35 3.375 12.35 3.525V19.275L17.425 14.2Q17.525 14.1 17.675 14.087Q17.825 14.075 17.925 14.2Q18.025 14.3 18.025 14.438Q18.025 14.575 17.925 14.675L12.525 20.075Q12.4 20.2 12.275 20.25Q12.15 20.3 12 20.3Z"/>
    </Icon>
  );
});

IconMaterialSouthRoundedW100Filled.displayName = 'AmauiIconMaterialSouthRoundedW100Filled';

export default IconMaterialSouthRoundedW100Filled;
