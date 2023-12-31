import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqW100Filled'

      short_name='Aq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m730-287-23-35q-17 9-35 14t-38 5q-66 0-111.5-45.5T477-460q0-66 45.5-111.5T633-617q65 0 110 46t45 111q0 36-15 67.5T730-338l23 35-23 16Zm-558-23 116-300h33l118 300h-32l-28-74H232l-28 74h-32Zm461-21q15 0 29.5-3.5T691-346l-36-54 23-16 36 54q21-19 32.5-44t11.5-54q0-53-36-91t-89-38q-53 0-89.5 37.5T507-460q0 54 36.5 91.5T633-331Zm-391-78h128l-63-163h-4l-61 163Z"/>
    </Icon>
  );
});

IconMaterialAqW100Filled.displayName = 'AmauiIconMaterialAqW100Filled';

export default IconMaterialAqW100Filled;
