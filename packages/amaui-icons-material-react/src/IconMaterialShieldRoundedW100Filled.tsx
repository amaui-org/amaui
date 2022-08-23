import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldRoundedW100Filled'
      short_name='Shield'

      {...props}
    >
      <path d="M12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialShieldRoundedW100Filled.displayName = 'AmauiIconMaterialShieldRoundedW100Filled';

export default IconMaterialShieldRoundedW100Filled;
