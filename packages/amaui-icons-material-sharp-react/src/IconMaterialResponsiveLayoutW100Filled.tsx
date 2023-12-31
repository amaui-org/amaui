import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayoutW100Filled'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-172v-416H380v-200h408v616H588Zm-208 0v-388h180v388H380Zm-208 0v-388h180v388H172Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayoutW100Filled.displayName = 'AmauiIconMaterialResponsiveLayoutW100Filled';

export default IconMaterialResponsiveLayoutW100Filled;
