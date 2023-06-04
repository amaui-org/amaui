import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPedalBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeW100Filled'

      short_name='PedalBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.35q-1.85 0-3.1-1.25T.65 15q0-1.8 1.275-3.1T5 10.6q1.65 0 2.925 1.162Q9.2 12.925 9.35 14.65h2.1L9.2 8.35H8q-.15 0-.25-.1T7.65 8q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.95l.8 2.25H17l-1.75-4.8q-.075-.225-.25-.338-.175-.112-.4-.112H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.6q.425 0 .787.237.363.238.513.663l1.85 5.05H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 19.3 19 19.3q-1.7 0-2.925-1.137-1.225-1.138-1.425-2.813h-5.3q-.15 1.725-1.437 2.862Q6.625 19.35 5 19.35Zm7.25-4.7h2.4q.075-.725.563-1.788Q15.7 11.8 16.65 11.3H11Zm6.475-.275q.125-.05.188-.187.062-.138.012-.263L18 11.45l-.6.25.875 2.475q.05.15.175.2.125.05.275 0ZM6 15.35h2.65v-.7H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeW100Filled.displayName = 'AmauiIconMaterialPedalBikeW100Filled';

export default IconMaterialPedalBikeW100Filled;
