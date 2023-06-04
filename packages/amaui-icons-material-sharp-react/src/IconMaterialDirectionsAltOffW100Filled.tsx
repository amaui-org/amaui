import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffW100Filled'

      short_name='DirectionsAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.325-5.325L12 20.95 3.05 12l3.975-3.975L2.25 3.25l.5-.5L21.8 21.8ZM12 16.1l1.55-1.55-.5-.5-1.55 1.55Zm5.875-1.025L20.95 12 12 3.05 8.925 6.125l2.3 2.3.5-.5 4.1 4.1-.5.5ZM7.9 12.35h3.45l-.7-.7H7.9Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffW100Filled.displayName = 'AmauiIconMaterialDirectionsAltOffW100Filled';

export default IconMaterialDirectionsAltOffW100Filled;
