import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicTetherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicTetherW100Filled'

      short_name='MagicTether'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m254 710-28-28q50-50 114.5-78T480 576q75 0 139.5 28T734 682l-28 28q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84 540l-28-28q81-81 189-128.5T480 336q127 0 235 47.5T904 512l-28 28q-77-77-178.5-120.5T480 376q-116 0-217.5 43.5T84 540Zm396 384-30-68-68-30 68-30 30-68 30 68 68 30-68 30-30 68Z"/>
    </Icon>
  );
});

IconMaterialMagicTetherW100Filled.displayName = 'AmauiIconMaterialMagicTetherW100Filled';

export default IconMaterialMagicTetherW100Filled;
