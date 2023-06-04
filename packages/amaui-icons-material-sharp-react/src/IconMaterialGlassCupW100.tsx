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
      <path d="m255 924-77-696h604l-77 696H255Zm25-28h400l12-106H268l12 106Zm-15-134h430l55-506H209l56 506Zm15 134h400-400Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100.displayName = 'AmauiIconMaterialGlassCupW100';

export default IconMaterialGlassCupW100;
