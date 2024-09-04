import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2W100Filled'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-401v-197q0-38-26-64t-64-26H280v-80q0-26 17-43t43-17h428q26 0 43 17t17 43v316q0 17-7.5 30T800-401ZM192-132q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h456q22 0 37 15t15 36v345q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2W100Filled.displayName = 'AmauiIconMaterialSelectWindow2W100Filled';

export default IconMaterialSelectWindow2W100Filled;
