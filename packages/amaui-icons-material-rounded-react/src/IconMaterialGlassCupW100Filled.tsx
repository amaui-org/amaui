import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlassCupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupW100Filled'

      short_name='GlassCup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M309 924q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309ZM209 256l56 506h430l55-506H209Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100Filled.displayName = 'AmauiIconMaterialGlassCupW100Filled';

export default IconMaterialGlassCupW100Filled;
