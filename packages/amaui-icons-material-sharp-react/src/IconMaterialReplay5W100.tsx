import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplay5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5W100'

      short_name='Replay5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 15.6v-.7h3v-1.55h-3V10.4h3.7v.7h-3v1.55h3v2.95Zm2.1 5.1q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3H5q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.45l1.65 1.65-.5.5-2.5-2.525L12.75 3.1l.5.5-1.7 1.7H12q1.6 0 3 .6t2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialReplay5W100.displayName = 'AmauiIconMaterialReplay5W100';

export default IconMaterialReplay5W100;
