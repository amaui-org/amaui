import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRectangle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rectangle'

      short_name='Rectangle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialRectangle.displayName = 'AmauiIconMaterialRectangle';

export default IconMaterialRectangle;
