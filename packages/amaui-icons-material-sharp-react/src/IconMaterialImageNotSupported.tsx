import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupported = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupported'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.3-2.3H3V5.8L.7 3.5l1.4-1.4 19.8 19.8ZM5 19h11.175l-2-2H6l3-4 2 2.725.85-1.05L5 7.825Zm16-.825-2-2V5H7.825l-2-2H21Zm-7.55-7.55Zm-2.85 2.8Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupported.displayName = 'AmauiIconMaterialImageNotSupported';

export default IconMaterialImageNotSupported;
