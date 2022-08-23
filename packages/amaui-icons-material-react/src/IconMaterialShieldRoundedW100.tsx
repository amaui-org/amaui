import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldRoundedW100'
      short_name='Shield'

      {...props}
    >
      <path d="M12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.775Q18 6.575 17.9 6.425Q17.8 6.275 17.625 6.225L12.375 4.3Q12.175 4.225 12 4.225Q11.825 4.225 11.625 4.3L6.375 6.225Q6.2 6.275 6.1 6.425Q6 6.575 6 6.775V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Q12 12.05 12 12.05Z"/>
    </Icon>
  );
});

IconMaterialShieldRoundedW100.displayName = 'AmauiIconMaterialShieldRoundedW100';

export default IconMaterialShieldRoundedW100;
