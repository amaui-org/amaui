import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseCircleW100Filled'

      short_name='PauseCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 15.35h.7v-6.7h-.7Zm3.2 0h.7v-6.7h-.7ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPauseCircleW100Filled.displayName = 'AmauiIconMaterialPauseCircleW100Filled';

export default IconMaterialPauseCircleW100Filled;
