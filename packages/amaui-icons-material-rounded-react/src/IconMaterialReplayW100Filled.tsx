import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayW100Filled'

      short_name='Replay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-3.125 0-5.35-2.125Q4.425 16.45 4.3 13.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q.125 2.8 2.15 4.725Q9.175 20 12 20q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.45l1.4 1.4q.125.125.125.25t-.125.25q-.1.1-.25.1t-.25-.1l-1.725-1.75q-.125-.125-.175-.263-.05-.137-.05-.262 0-.15.05-.288.05-.137.175-.237L12.5 3.35q.125-.125.25-.125t.25.125q.125.125.125.25T13 3.85L11.55 5.3H12q1.6 0 3 .6t2.45 1.65Q18.5 8.6 19.1 10q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 19.5 15 20.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialReplayW100Filled.displayName = 'AmauiIconMaterialReplayW100Filled';

export default IconMaterialReplayW100Filled;
