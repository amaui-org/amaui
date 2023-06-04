import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpokeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeW100Filled'

      short_name='Spoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.7q-1.125 0-1.912-.788Q9.3 8.125 9.3 7t.788-1.913Q10.875 4.3 12 4.3t1.913.787Q14.7 5.875 14.7 7t-.787 1.912Q13.125 9.7 12 9.7Zm-5 10q-1.125 0-1.912-.787Q4.3 18.125 4.3 17t.788-1.913Q5.875 14.3 7 14.3t1.913.787Q9.7 15.875 9.7 17t-.787 1.913Q8.125 19.7 7 19.7Zm10 0q-1.125 0-1.912-.787Q14.3 18.125 14.3 17t.788-1.913Q15.875 14.3 17 14.3t1.913.787q.787.788.787 1.913t-.787 1.913q-.788.787-1.913.787Z"/>
    </Icon>
  );
});

IconMaterialSpokeW100Filled.displayName = 'AmauiIconMaterialSpokeW100Filled';

export default IconMaterialSpokeW100Filled;
