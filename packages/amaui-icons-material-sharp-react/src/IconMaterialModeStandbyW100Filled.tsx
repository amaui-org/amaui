import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeStandbyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeStandbyW100Filled'

      short_name='ModeStandby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q.725 0 1.213-.488.487-.487.487-1.212t-.487-1.213Q12.725 10.3 12 10.3q-.725 0-1.212.487-.488.488-.488 1.213 0 .725.488 1.212.487.488 1.212.488Zm0 7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialModeStandbyW100Filled.displayName = 'AmauiIconMaterialModeStandbyW100Filled';

export default IconMaterialModeStandbyW100Filled;
