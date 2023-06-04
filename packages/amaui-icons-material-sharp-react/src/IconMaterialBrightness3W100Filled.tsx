import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3W100Filled'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 20.7H8.9q2.3-1.375 3.588-3.7 1.287-2.325 1.287-5t-1.287-5Q11.2 4.675 8.9 3.3h.35q1.8 0 3.388.687 1.587.688 2.762 1.863t1.862 2.762Q17.95 10.2 17.95 12q0 1.8-.688 3.387-.687 1.588-1.862 2.763-1.175 1.175-2.762 1.862-1.588.688-3.388.688Z"/>
    </Icon>
  );
});

IconMaterialBrightness3W100Filled.displayName = 'AmauiIconMaterialBrightness3W100Filled';

export default IconMaterialBrightness3W100Filled;
