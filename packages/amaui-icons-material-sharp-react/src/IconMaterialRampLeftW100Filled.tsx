import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampLeftW100Filled'

      short_name='RampLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.35V5.275L9.4 7.525l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25V9q0 1.525.563 2.837.562 1.313 1.412 2.363.85 1.05 1.825 1.862.975.813 1.8 1.338l-.5.5q-1.8-1.2-3.125-2.625t-1.975-2.95v8.025Z"/>
    </Icon>
  );
});

IconMaterialRampLeftW100Filled.displayName = 'AmauiIconMaterialRampLeftW100Filled';

export default IconMaterialRampLeftW100Filled;
