import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecurityRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityRounded'
      short_name='Security'

      {...props}
    >
      <path d="M12 21.85Q11.725 21.85 11.488 21.812Q11.25 21.775 11.05 21.7Q7.95 20.55 5.975 17.6Q4 14.65 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.65 18.025 17.6Q16.05 20.55 12.95 21.7Q12.75 21.775 12.512 21.812Q12.275 21.85 12 21.85ZM12 19.9Q14.425 19.15 16.05 16.938Q17.675 14.725 17.95 12H12V4.125L6 6.375Q6 6.375 6 6.375Q6 6.375 6 6.375V11.1Q6 11.375 6 11.55Q6 11.725 6.05 12H12Z"/>
    </Icon>
  );
});

IconMaterialSecurityRounded.displayName = 'AmauiIconMaterialSecurityRounded';

export default IconMaterialSecurityRounded;
