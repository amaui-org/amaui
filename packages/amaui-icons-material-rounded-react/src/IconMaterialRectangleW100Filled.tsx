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
      <path d="M4 18.7q-.275 0-.487-.213Q3.3 18.275 3.3 18V6q0-.275.213-.488Q3.725 5.3 4 5.3h16q.275 0 .488.212.212.213.212.488v12q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100Filled.displayName = 'AmauiIconMaterialRectangleW100Filled';

export default IconMaterialRectangleW100Filled;
