import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedSharpW100Filled'
      short_name='CallMissed'

      {...props}
    >
      <path d="M12.125 16.5 4.475 8.85V14.35H3.775V7.65H10.475V8.35H4.975L12.125 15.5L19.725 7.9L20.225 8.4Z"/>
    </Icon>
  );
});

export default IconMaterialCallMissedSharpW100Filled;
