import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToQueueSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueSharpW100Filled'
      short_name='AddToQueue'

      {...props}
    >
      <path d="M11.65 14.35H12.35V11.35H15.35V10.65H12.35V7.65H11.65V10.65H8.65V11.35H11.65ZM9.3 19.7V17.7H3.3V4.3H20.7V17.7H14.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialAddToQueueSharpW100Filled.displayName = 'AmauiIconMaterialAddToQueueSharpW100Filled';

export default IconMaterialAddToQueueSharpW100Filled;
