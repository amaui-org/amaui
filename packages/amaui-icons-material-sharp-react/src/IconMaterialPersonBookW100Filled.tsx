import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonBookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonBookW100Filled'

      short_name='PersonBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q-69 0-129.5 21T240-220v60h480v-60q-51-38-111-59t-129-21ZM212-132v-696h536v696H212Zm268-264q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Z"/>
    </Icon>
  );
});

IconMaterialPersonBookW100Filled.displayName = 'AmauiIconMaterialPersonBookW100Filled';

export default IconMaterialPersonBookW100Filled;
