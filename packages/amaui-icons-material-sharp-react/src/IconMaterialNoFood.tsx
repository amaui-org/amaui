import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFood'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3.675 3.5 2.1 2.075l19.8 19.8Zm1.15-4.55L19.8 16.925 20.8 7h-9.55L11 5h5V1h2v4h5Zm-6-5.975ZM1 19v-2h15v2Zm0 4v-2h15v2ZM9.05 9.025v2q-.125 0-.275-.013Q8.625 11 8.5 11q-1.475 0-2.787.5Q4.4 12 3.675 13h9.35l2 2H1q0-3.025 2.338-4.512Q5.675 9 8.5 9q.125 0 .275.012.15.013.275.013ZM8.5 13Z"/>
    </Icon>
  );
});

IconMaterialNoFood.displayName = 'AmauiIconMaterialNoFood';

export default IconMaterialNoFood;
