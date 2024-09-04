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
      <path d="M800-401v-287H280v-140h548v427h-28ZM132-132v-456h568v456H132Z"/>
    </Icon>
  );
});

IconMaterialSelectWindow2W100Filled.displayName = 'AmauiIconMaterialSelectWindow2W100Filled';

export default IconMaterialSelectWindow2W100Filled;
