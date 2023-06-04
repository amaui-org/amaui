import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fps'

      short_name='60fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19V5h8v3H5v2h6v9Zm3-3h3v-3H5Zm10 0h4V8h-4Zm-3 3V5h10v14Z"/>
    </Icon>
  );
});

IconMaterial60fps.displayName = 'AmauiIconMaterial60fps';

export default IconMaterial60fps;
