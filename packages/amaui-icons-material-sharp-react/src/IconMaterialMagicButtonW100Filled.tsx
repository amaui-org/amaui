import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicButtonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButtonW100Filled'

      short_name='MagicButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.4 17.6-2-4.4-4.4-2 4.4-2 2-4.4 2 4.4 4.4 2-4.4 2Zm6.4 1.6-1-2.2-2.2-1 2.2-1 1-2.2 1 2.2 2.2 1-2.2 1Z"/>
    </Icon>
  );
});

IconMaterialMagicButtonW100Filled.displayName = 'AmauiIconMaterialMagicButtonW100Filled';

export default IconMaterialMagicButtonW100Filled;
