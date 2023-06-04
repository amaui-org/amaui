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
      <path d="M12 17.85q2.225 0 3.788-1.562 1.562-1.563 1.562-3.788 0-2.65-2.187-4.225Q12.975 6.7 10.2 7.15l2.05-2q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125L9.425 6.975q-.125.125-.175.25-.05.125-.05.275 0 .15.05.275.05.125.175.25l2.325 2.325q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-2-2q2.475-.45 4.438.925Q16.65 10.15 16.65 12.5q0 1.95-1.35 3.3-1.35 1.35-3.3 1.35-1.675 0-2.95-1.038-1.275-1.037-1.6-2.662-.025-.125-.125-.213-.1-.087-.225-.087-.175 0-.275.125-.1.125-.075.275.325 1.875 1.812 3.087Q10.05 17.85 12 17.85Zm0 2.85q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilledW100Filled.displayName = 'AmauiIconMaterialReplayCircleFilledW100Filled';

export default IconMaterialReplayCircleFilledW100Filled;
