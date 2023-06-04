import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndW100Filled'

      short_name='LineEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 13.85q-.675 0-1.188-.425-.512-.425-.637-1.075H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14.675q.125-.65.637-1.075.513-.425 1.188-.425.775 0 1.312.538.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538Z"/>
    </Icon>
  );
});

IconMaterialLineEndW100Filled.displayName = 'AmauiIconMaterialLineEndW100Filled';

export default IconMaterialLineEndW100Filled;
