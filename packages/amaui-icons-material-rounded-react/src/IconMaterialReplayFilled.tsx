import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayFilled'

      short_name='Replay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.5 0-6.037-2.3Q3.425 17.4 3.05 14q-.05-.4.238-.7.287-.3.712-.3.4 0 .713.287.312.288.362.713.35 2.575 2.3 4.288Q9.325 20 12 20q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l.875.875q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3L8.7 5.7q-.15-.15-.212-.325Q8.425 5.2 8.425 5t.063-.375Q8.55 4.45 8.7 4.3l2.6-2.6q.275-.275.7-.275.425 0 .725.275.275.3.275.725t-.275.7L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayFilled.displayName = 'AmauiIconMaterialReplayFilled';

export default IconMaterialReplayFilled;
