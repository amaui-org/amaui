import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideSourceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceW100Filled'

      short_name='HideSource'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.85 20.85-2.225-2.225q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L3.15 4.15l.5-.5 16.7 16.7Zm-.45-4.25-12-12q1.025-.625 2.175-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.425-.338 1.15-.963 2.175Z"/>
    </Icon>
  );
});

IconMaterialHideSourceW100Filled.displayName = 'AmauiIconMaterialHideSourceW100Filled';

export default IconMaterialHideSourceW100Filled;
