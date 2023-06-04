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
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100.displayName = 'AmauiIconMaterialRectangleW100';

export default IconMaterialRectangleW100;
