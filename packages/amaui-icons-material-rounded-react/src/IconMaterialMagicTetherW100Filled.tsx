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
      <path d="M480 576q69 0 129.5 24T718 667q7 6 7.5 14.5T720 696q-6 6-14.5 5.5T690 695q-42-37-96-58t-114-21q-60 0-114 21t-96 58q-7 6-15.5 6.5T240 696q-6-6-5.5-14.5T242 667q48-43 108.5-67T480 576Zm0-240q121 0 224.5 42.5T888 496q7 6 7.5 15t-5.5 15q-7 7-16 5t-17-9q-75-69-171.5-107.5T480 376q-109 0-205.5 38.5T103 522q-8 7-17 9t-16-5q-6-6-5.5-15t7.5-15q80-75 183.5-117.5T480 336Zm-30 520-52-23q-5-2-5-7t5-7l52-23 23-52q2-5 7-5t7 5l23 52 52 23q5 2 5 7t-5 7l-52 23-23 52q-2 5-7 5t-7-5l-23-52Z"/>
    </Icon>
  );
});

IconMaterialMagicTetherW100Filled.displayName = 'AmauiIconMaterialMagicTetherW100Filled';

export default IconMaterialMagicTetherW100Filled;
