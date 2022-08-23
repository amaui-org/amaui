import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecurityRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityRoundedW100'
      short_name='Security'

      {...props}
    >
      <path d="M12 20.525Q11.8 20.525 11.638 20.487Q11.475 20.45 11.35 20.4Q8.725 19.325 7.013 16.8Q5.3 14.275 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.275 16.988 16.8Q15.275 19.325 12.65 20.4Q12.525 20.45 12.363 20.487Q12.2 20.525 12 20.525ZM12 19.9Q14.425 19.15 16.05 16.938Q17.675 14.725 17.95 12H12V4.15L6.525 6.175Q6.275 6.275 6.138 6.475Q6 6.675 6 6.925V11.1Q6 11.325 6 11.525Q6 11.725 6.05 12H12Z"/>
    </Icon>
  );
});

IconMaterialSecurityRoundedW100.displayName = 'AmauiIconMaterialSecurityRoundedW100';

export default IconMaterialSecurityRoundedW100;
