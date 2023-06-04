import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffW100Filled'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.325-5.325L12 20.95 3.05 12l4.475-4.475 5.825 5.8v1.025L2.25 3.25l.5-.5L21.8 21.8ZM8.65 14.325h.7v-3h2l-.7-.7H9.4q-.3 0-.525.225-.225.225-.225.525Zm9.225.75-2.925-2.95 1.15-1.15-1.95-1.925v1.575h-.7l-4.525-4.5L12 3.05 20.95 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffW100Filled.displayName = 'AmauiIconMaterialDirectionsOffW100Filled';

export default IconMaterialDirectionsOffW100Filled;
