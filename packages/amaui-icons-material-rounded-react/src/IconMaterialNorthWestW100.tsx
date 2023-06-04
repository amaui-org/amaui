import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestW100'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.35 18.85-12-12V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6.4q0-.325.213-.538.212-.212.537-.212H14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.85l12 12q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNorthWestW100.displayName = 'AmauiIconMaterialNorthWestW100';

export default IconMaterialNorthWestW100;
