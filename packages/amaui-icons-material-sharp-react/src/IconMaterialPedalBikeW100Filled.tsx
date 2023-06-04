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
      <path d="M5 19.35q-1.85 0-3.1-1.25T.65 15q0-1.8 1.275-3.1T5 10.6q1.65 0 2.925 1.162Q9.2 12.925 9.35 14.65h2.1L9.2 8.35H7.65v-.7h3.7v.7h-1.4l.8 2.25H17l-1.925-5.25H12.65v-.7h2.925l2.175 5.95H19q1.8 0 3.075 1.275 1.275 1.275 1.275 3.075 0 1.8-1.275 3.075Q20.8 19.3 19 19.3q-1.7 0-2.925-1.137-1.225-1.138-1.425-2.813h-5.3q-.15 1.725-1.437 2.862Q6.625 19.35 5 19.35Zm7.25-4.7h2.4q.075-.725.563-1.788Q15.7 11.8 16.65 11.3H11Zm6.15-.15.65-.25-1.05-2.8-.6.25Zm-12.75.85h3v-.7h-3Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeW100Filled.displayName = 'AmauiIconMaterialPedalBikeW100Filled';

export default IconMaterialPedalBikeW100Filled;
