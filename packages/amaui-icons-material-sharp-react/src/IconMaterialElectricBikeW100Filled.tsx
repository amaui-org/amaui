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
      <path d="M12.8 22.55 7.95 20.1h3.2v-1.65L16 20.9h-3.2ZM5 16.35q-1.85 0-3.1-1.25T.65 12q0-1.8 1.275-3.1T5 7.6q1.65 0 2.925 1.162Q9.2 9.925 9.35 11.65h2.1L9.2 5.35H7.65v-.7h3.7v.7h-1.4l.8 2.25H17l-1.925-5.25H12.65v-.7h2.925L17.75 7.6H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 16.3 19 16.3q-1.7 0-2.925-1.138-1.225-1.137-1.425-2.812h-5.3q-.15 1.725-1.437 2.863Q6.625 16.35 5 16.35Zm.65-4h3v-.7h-3Zm12.75-.85.65-.25L18 8.45l-.6.25Zm-6.15.15h2.4q.075-.725.563-1.788Q15.7 8.8 16.65 8.3H11Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeW100Filled.displayName = 'AmauiIconMaterialElectricBikeW100Filled';

export default IconMaterialElectricBikeW100Filled;
