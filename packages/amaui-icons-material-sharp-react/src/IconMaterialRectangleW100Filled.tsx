import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRectangleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RectangleW100Filled'

      short_name='Rectangle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100Filled.displayName = 'AmauiIconMaterialRectangleW100Filled';

export default IconMaterialRectangleW100Filled;
