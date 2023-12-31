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
      <path d="M466-136v-336L172-642v337l294 169Zm28 0 294-169v-337L494-472v336Zm143-451 135-77-292-168-132 76 289 169Zm-157 91 129-75-291-168-129 74 291 169Z"/>
    </Icon>
  );
});

IconMaterialPackage2W100Filled.displayName = 'AmauiIconMaterialPackage2W100Filled';

export default IconMaterialPackage2W100Filled;
