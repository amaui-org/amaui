import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8kSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kSharpW100Filled'
      short_name='8k'

      {...props}
    >
      <path d="M12.85 14.6H13.55V12.2L16 14.6H17.05L14.3 11.95L17.05 9.4H16.05L13.55 11.75V9.4H12.85ZM7 14.6H10.7V9.4H7ZM7.7 11.65V10.1H10V11.65ZM7.7 13.9V12.35H10V13.9ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterial8kSharpW100Filled.displayName = 'AmauiIconMaterial8kSharpW100Filled';

export default IconMaterial8kSharpW100Filled;
