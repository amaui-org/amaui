import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package2Filled'

      short_name='Package2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-91v-366L120-642v367L440-91Zm80 0 320-184v-367L520-457v366Zm159-550 118-69-317-182-119 68 318 183ZM480-526l119-68-317-184-120 69 318 183Z"/>
    </Icon>
  );
});

IconMaterialPackage2Filled.displayName = 'AmauiIconMaterialPackage2Filled';

export default IconMaterialPackage2Filled;
