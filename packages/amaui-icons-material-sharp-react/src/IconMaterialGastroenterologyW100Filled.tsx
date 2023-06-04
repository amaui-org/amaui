import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGastroenterologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GastroenterologyW100Filled'

      short_name='Gastroenterology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.275 21.35V16q0-.975.688-1.663.687-.687 1.662-.687h2q1.525 0 2.588-1.063 1.062-1.062 1.062-2.587 0-.675-.487-1.163-.488-.487-1.163-.487-.575 0-.962-.388-.388-.387-.388-.962V2.65H12.7v.775q0 .5.362.862.363.363.863.363 2.5 0 4.137 1.887Q19.7 8.425 19.7 11v1q0 2.65-1.85 4.5t-4.5 1.85h-4q-.675 0-1.162.487Q7.7 19.325 7.7 20v1.35Z"/>
    </Icon>
  );
});

IconMaterialGastroenterologyW100Filled.displayName = 'AmauiIconMaterialGastroenterologyW100Filled';

export default IconMaterialGastroenterologyW100Filled;
