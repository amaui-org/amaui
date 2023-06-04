import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100Filled'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19.7q-.275 0-.487-.213Q5.3 19.275 5.3 19v-9q0-.175.075-.312.075-.138.2-.238l6-4.55q.1-.075.2-.1.1-.025.225-.025t.225.025q.1.025.2.1l6 4.55q.125.1.2.238.075.137.075.312v9q0 .275-.212.487-.213.213-.488.213h-4.25v-6.2h-3.5v6.2Z"/>
    </Icon>
  );
});

IconMaterialHomeW100Filled.displayName = 'AmauiIconMaterialHomeW100Filled';

export default IconMaterialHomeW100Filled;
