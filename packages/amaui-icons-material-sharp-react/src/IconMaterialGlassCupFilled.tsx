import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlassCupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupFilled'

      short_name='GlassCup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m208 976-88-800h720l-88 800H208Zm54-240h436l52-480H209l53 480Z"/>
    </Icon>
  );
});

IconMaterialGlassCupFilled.displayName = 'AmauiIconMaterialGlassCupFilled';

export default IconMaterialGlassCupFilled;
