import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSharpW100Filled'
      short_name='Shield'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65Z"/>
    </Icon>
  );
});

IconMaterialShieldSharpW100Filled.displayName = 'AmauiIconMaterialShieldSharpW100Filled';

export default IconMaterialShieldSharpW100Filled;
