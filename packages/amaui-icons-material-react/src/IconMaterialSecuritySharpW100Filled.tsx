import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSecuritySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecuritySharpW100Filled'
      short_name='Security'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65ZM12 19.9Q14.425 19.15 16.05 16.938Q17.675 14.725 17.95 12H12V4.15L6 6.375V11.1Q6 11.325 6 11.525Q6 11.725 6.05 12H12Z"/>
    </Icon>
  );
});

IconMaterialSecuritySharpW100Filled.displayName = 'AmauiIconMaterialSecuritySharpW100Filled';

export default IconMaterialSecuritySharpW100Filled;
