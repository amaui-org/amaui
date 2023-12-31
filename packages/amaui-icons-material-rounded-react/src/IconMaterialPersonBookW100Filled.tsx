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
      <path d="M480-300q-69 0-129.5 21T240-220v28q0 13 9 22.5t22 9.5h417q14 0 23-9t9-23v-28q-51-38-111-59t-129-21ZM272-132q-25 0-42.5-17.5T212-192v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 25-17.5 42.5T688-132H272Zm208-264q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Z"/>
    </Icon>
  );
});

IconMaterialPersonBookW100Filled.displayName = 'AmauiIconMaterialPersonBookW100Filled';

export default IconMaterialPersonBookW100Filled;
