import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellSharpW100Filled'
      short_name='Doorbell'

      {...props}
    >
      <path d="M12 17.15Q12.35 17.15 12.6 16.925Q12.85 16.7 12.9 16.35H11.1Q11.15 16.7 11.4 16.925Q11.65 17.15 12 17.15ZM8.4 15.85H15.6V15.15H14.6V12.9Q14.6 11.85 14.088 10.988Q13.575 10.125 12.6 9.85V8.9H11.4V9.85Q10.425 10.125 9.913 10.988Q9.4 11.85 9.4 12.9V15.15H8.4ZM5.3 19.7V9.65L12 4.6L18.7 9.65V19.7Z"/>
    </Icon>
  );
});

IconMaterialDoorbellSharpW100Filled.displayName = 'AmauiIconMaterialDoorbellSharpW100Filled';

export default IconMaterialDoorbellSharpW100Filled;
