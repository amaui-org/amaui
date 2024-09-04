import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPassword2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2Filled'

      short_name='Password2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-200v-80h800v80H80Zm400-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm320 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPassword2Filled.displayName = 'AmauiIconMaterialPassword2Filled';

export default IconMaterialPassword2Filled;
