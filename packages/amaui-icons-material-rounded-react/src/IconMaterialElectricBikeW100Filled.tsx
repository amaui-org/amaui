import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBikeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeW100Filled'

      short_name='ElectricBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.8 22.55 7.95 20.1h3.2v-1.65L16 20.9h-3.2ZM5 16.35q-1.85 0-3.1-1.25T.65 12q0-1.8 1.275-3.1T5 7.6q1.65 0 2.925 1.162Q9.2 9.925 9.35 11.65h2.1L9.2 5.35H8q-.15 0-.25-.1T7.65 5q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.95l.8 2.25H17l-1.75-4.8q-.075-.225-.25-.338-.175-.112-.4-.112H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.6q.425 0 .787.237.363.238.513.663l1.85 5.05H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 16.3 19 16.3q-1.7 0-2.925-1.138-1.225-1.137-1.425-2.812h-5.3q-.15 1.725-1.437 2.863Q6.625 16.35 5 16.35Zm1-4h2.65v-.7H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm12.725-.975q.125-.05.188-.187.062-.138.012-.263L18 8.45l-.6.25.875 2.475q.05.125.175.187.125.063.275.013Zm-6.475.275h2.4q.075-.725.563-1.788Q15.7 8.8 16.65 8.3H11Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeW100Filled.displayName = 'AmauiIconMaterialElectricBikeW100Filled';

export default IconMaterialElectricBikeW100Filled;
