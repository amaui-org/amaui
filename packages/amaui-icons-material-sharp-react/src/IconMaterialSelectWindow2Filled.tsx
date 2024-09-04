import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindow2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindow2Filled'

      short_name='SelectWindow2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-360v-320H240v-200h640v520h-80ZM80-80v-520h640v520H80Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2Filled.displayName = 'AmauiIconMaterialSelectWindow2Filled';

export default IconMaterialSelectWindow2Filled;
