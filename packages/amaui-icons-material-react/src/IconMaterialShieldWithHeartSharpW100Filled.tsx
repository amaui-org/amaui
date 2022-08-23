import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartSharpW100Filled'
      short_name='ShieldWithHeart'

      {...props}
    >
      <path d="M12 15.1q1.95-1.775 2.488-2.463.537-.687.537-1.387 0-.675-.5-1.163-.5-.487-1.175-.487-.425 0-.775.162-.35.163-.575.438-.225-.275-.575-.438-.35-.162-.775-.162-.675 0-1.175.487-.5.488-.5 1.163 0 .35.1.662.1.313.425.713.325.4.913.987Q11 14.2 12 15.1Zm0 5.55q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartSharpW100Filled.displayName = 'AmauiIconMaterialShieldWithHeartSharpW100Filled';

export default IconMaterialShieldWithHeartSharpW100Filled;
