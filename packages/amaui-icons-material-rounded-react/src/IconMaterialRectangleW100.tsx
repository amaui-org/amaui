import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRectangleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RectangleW100'

      short_name='Rectangle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.7q-.275 0-.487-.213Q3.3 18.275 3.3 18V6q0-.275.213-.488Q3.725 5.3 4 5.3h16q.275 0 .488.212.212.213.212.488v12q0 .275-.212.487-.213.213-.488.213Zm0-.7h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100.displayName = 'AmauiIconMaterialRectangleW100';

export default IconMaterialRectangleW100;
