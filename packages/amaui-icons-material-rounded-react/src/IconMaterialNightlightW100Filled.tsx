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
      <path d="M14.65 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q5.95 13.8 5.95 12t.688-3.388Q7.325 7.025 8.5 5.85t2.763-1.863Q12.85 3.3 14.65 3.3q.45 0 .875.037.425.038.85.138.275.05.325.25.05.2-.15.4-1.475 1.525-2.337 3.55Q13.35 9.7 13.35 12q0 2.3.863 4.325.862 2.025 2.337 3.55.2.2.15.4-.05.2-.325.25-.425.1-.85.138-.425.037-.875.037Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100Filled.displayName = 'AmauiIconMaterialNightlightW100Filled';

export default IconMaterialNightlightW100Filled;
