import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWavingHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandW100Filled'

      short_name='WavingHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.4 22.6v-.725q1.8-.125 3.05-1.4Q21.7 19.2 21.875 17.4h.7q-.125 2.2-1.687 3.7-1.563 1.5-3.488 1.5ZM1.425 6.6q.125-2.125 1.588-3.588Q4.475 1.55 6.6 1.425v.7q-1.8.125-3.05 1.4Q2.3 4.8 2.125 6.6ZM5.45 19.2q-1.025-1.025-1.537-2.225-.513-1.2-.513-2.438 0-1.237.513-2.437.512-1.2 1.537-2.225L9.925 5.4l1.45 1.45-3.3 3.3q1.075 1.6.987 2.963-.087 1.362-.862 2.487l.5.5q.95-1.4 1-2.788.05-1.387-.75-2.962L15.7 3.6l1.45 1.45-5.5 5.5.525.525L19.1 4.15l1.45 1.45-6.925 6.925.525.525 5.875-5.875 1.45 1.45L14.9 15.2l.5.5 4.45-4.45 1.45 1.45-6.5 6.5q-1.025 1.025-2.225 1.538-1.2.512-2.45.512-1.25 0-2.45-.512-1.2-.513-2.225-1.538Z"/>
    </Icon>
  );
});

IconMaterialWavingHandW100Filled.displayName = 'AmauiIconMaterialWavingHandW100Filled';

export default IconMaterialWavingHandW100Filled;
