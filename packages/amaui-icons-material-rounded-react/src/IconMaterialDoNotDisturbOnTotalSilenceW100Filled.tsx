import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOnTotalSilenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnTotalSilenceW100Filled'

      short_name='DoNotDisturbOnTotalSilence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-3.35q2.225 0 3.788-1.562Q17.35 14.225 17.35 12q0-2.225-1.562-3.788Q14.225 6.65 12 6.65q-2.225 0-3.787 1.562Q6.65 9.775 6.65 12q0 2.225 1.563 3.788Q9.775 17.35 12 17.35Zm-2.025-5q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h4.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOnTotalSilenceW100Filled.displayName = 'AmauiIconMaterialDoNotDisturbOnTotalSilenceW100Filled';

export default IconMaterialDoNotDisturbOnTotalSilenceW100Filled;
