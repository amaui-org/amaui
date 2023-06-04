import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableW100Filled'

      short_name='Enable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-3.025 1.75-5.275 1.75-2.25 4.6-3.1v.75q-2.6.8-4.125 2.9Q4 9.375 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-2.625-1.525-4.725-1.525-2.1-4.125-2.9v-.75q2.85.85 4.6 3.1Q20.7 8.975 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-5.625-4.1-4.1.5-.5 3.25 3.25v-10.4h.7v10.4l3.25-3.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialEnableW100Filled.displayName = 'AmauiIconMaterialEnableW100Filled';

export default IconMaterialEnableW100Filled;
