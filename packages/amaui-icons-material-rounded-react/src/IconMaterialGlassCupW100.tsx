import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlassCupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupW100'

      short_name='GlassCup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M309 924q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Zm383-134H268l9 78q2 12 11 20t21 8h342q12 0 21-8t11-20l9-78ZM209 256l56 506h430l55-506H209Zm472 640H279h402Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100.displayName = 'AmauiIconMaterialGlassCupW100';

export default IconMaterialGlassCupW100;
