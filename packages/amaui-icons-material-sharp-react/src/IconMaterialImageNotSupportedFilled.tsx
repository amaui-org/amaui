import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedFilled'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.3-2.3H3V5.8L.7 3.5l1.4-1.4 19.8 19.8ZM6 17h8.175l-2.325-2.325-.85 1.05L9 13Zm15 1.175L5.825 3H21Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedFilled.displayName = 'AmauiIconMaterialImageNotSupportedFilled';

export default IconMaterialImageNotSupportedFilled;
