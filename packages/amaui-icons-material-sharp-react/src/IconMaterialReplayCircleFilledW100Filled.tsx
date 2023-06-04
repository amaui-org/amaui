import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplayCircleFilledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilledW100Filled'

      short_name='ReplayCircleFilled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.85q2.225 0 3.788-1.562 1.562-1.563 1.562-3.788 0-2.65-2.187-4.225Q12.975 6.7 10.2 7.15l2.3-2.25-.5-.5-3.1 3.1 3.1 3.1.5-.5-2.25-2.25q2.475-.45 4.438.925Q16.65 10.15 16.65 12.5q0 1.95-1.35 3.3-1.35 1.35-3.3 1.35-1.75 0-3.062-1.138Q7.625 14.875 7.4 13.15h-.7q.2 2.025 1.725 3.362Q9.95 17.85 12 17.85Zm0 2.85q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilledW100Filled.displayName = 'AmauiIconMaterialReplayCircleFilledW100Filled';

export default IconMaterialReplayCircleFilledW100Filled;
