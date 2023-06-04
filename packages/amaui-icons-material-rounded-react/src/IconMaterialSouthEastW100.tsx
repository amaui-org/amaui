import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastW100'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7.15l-12-12q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l12 12V10q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.6q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialSouthEastW100.displayName = 'AmauiIconMaterialSouthEastW100';

export default IconMaterialSouthEastW100;
