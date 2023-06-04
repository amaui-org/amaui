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
      <path d="m255 924-77-696h604l-77 696H255Zm10-162h430l55-506H209l56 506Z"/>
    </Icon>
  );
});

IconMaterialGlassCupW100Filled.displayName = 'AmauiIconMaterialGlassCupW100Filled';

export default IconMaterialGlassCupW100Filled;
