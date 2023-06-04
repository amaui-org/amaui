import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottom'

      short_name='VerticalAlignBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottom.displayName = 'AmauiIconMaterialVerticalAlignBottom';

export default IconMaterialVerticalAlignBottom;
