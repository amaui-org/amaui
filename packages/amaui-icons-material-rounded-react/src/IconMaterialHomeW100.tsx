import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeW100'

      short_name='Home'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h3.9v-5.85h4.2V19H18v-9l-6-4.55L6 10Zm0 .7q-.275 0-.487-.213Q5.3 19.275 5.3 19v-9q0-.175.075-.312.075-.138.2-.238l6-4.55q.1-.075.2-.1.1-.025.225-.025t.225.025q.1.025.2.1l6 4.55q.125.1.2.238.075.137.075.312v9q0 .275-.212.487-.213.213-.488.213h-4.6v-5.85h-2.8v5.85Zm6-7.475Z"/>
    </Icon>
  );
});

IconMaterialHomeW100.displayName = 'AmauiIconMaterialHomeW100';

export default IconMaterialHomeW100;
