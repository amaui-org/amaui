import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package2W100Filled'

      short_name='Package2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-136v-336L172-642v302q0 16 8 30t22 22l264 152Zm28 0 264-152q14-8 22-22t8-30v-302L494-472v336Zm143-451 135-77-262-151q-14-8-30-8t-30 8l-102 59 289 169Zm-157 91 129-75-291-168-129 74 291 169Z"/>
    </Icon>
  );
});

IconMaterialPackage2W100Filled.displayName = 'AmauiIconMaterialPackage2W100Filled';

export default IconMaterialPackage2W100Filled;
