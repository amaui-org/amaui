import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockRoundedW100Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M9 20.9Q8.85 20.9 8.75 20.8Q8.65 20.7 8.65 20.55Q8.65 20.4 8.75 20.3Q8.85 20.2 9 20.2H15Q15.15 20.2 15.25 20.3Q15.35 20.4 15.35 20.55Q15.35 20.7 15.25 20.8Q15.15 20.9 15 20.9ZM8.8 18.2Q8.15 18.2 7.725 17.775Q7.3 17.35 7.3 16.7V4.3Q7.3 3.65 7.725 3.225Q8.15 2.8 8.8 2.8H15.2Q15.85 2.8 16.275 3.225Q16.7 3.65 16.7 4.3V16.7Q16.7 17.35 16.275 17.775Q15.85 18.2 15.2 18.2ZM8 15.15H16V5.85H8Z"/>
    </Icon>
  );
});

IconMaterialDockRoundedW100Filled.displayName = 'AmauiIconMaterialDockRoundedW100Filled';

export default IconMaterialDockRoundedW100Filled;
