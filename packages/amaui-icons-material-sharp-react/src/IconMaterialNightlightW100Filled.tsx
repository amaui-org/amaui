import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightW100Filled'

      short_name='Nightlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q5.95 13.8 5.95 12t.688-3.388Q7.325 7.025 8.5 5.85t2.763-1.863Q12.85 3.3 14.65 3.3q.65 0 1.238.075.587.075 1.162.275-1.7 1.55-2.7 3.7-1 2.15-1 4.65 0 2.5 1 4.65 1 2.15 2.7 3.7-.575.2-1.162.275-.588.075-1.238.075Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100Filled.displayName = 'AmauiIconMaterialNightlightW100Filled';

export default IconMaterialNightlightW100Filled;
