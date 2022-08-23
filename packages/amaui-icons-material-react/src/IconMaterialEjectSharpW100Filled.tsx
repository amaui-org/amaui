import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectSharpW100Filled'
      short_name='Eject'

      {...props}
    >
      <path d="M6.6 14.55 12 6.5 17.4 14.55ZM6.5 18.15V17.55H17.5V18.15Z"/>
    </Icon>
  );
});

IconMaterialEjectSharpW100Filled.displayName = 'AmauiIconMaterialEjectSharpW100Filled';

export default IconMaterialEjectSharpW100Filled;
