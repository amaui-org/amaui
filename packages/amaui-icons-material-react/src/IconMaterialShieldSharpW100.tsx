import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSharpW100'
      short_name='Shield'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65ZM12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.15L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialShieldSharpW100.displayName = 'AmauiIconMaterialShieldSharpW100';

export default IconMaterialShieldSharpW100;
