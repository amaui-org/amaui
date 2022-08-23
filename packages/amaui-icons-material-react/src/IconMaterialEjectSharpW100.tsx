import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectSharpW100'
      short_name='Eject'

      {...props}
    >
      <path d="M6.5 18.15V17.55H17.5V18.15ZM6.6 14.55 12 6.5 17.4 14.55ZM12 13.95ZM7.85 13.95H16.15L12 7.75Z"/>
    </Icon>
  );
});

IconMaterialEjectSharpW100.displayName = 'AmauiIconMaterialEjectSharpW100';

export default IconMaterialEjectSharpW100;
