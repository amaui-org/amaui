import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRunningWithErrorsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsW100Filled'

      short_name='RunningWithErrors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q2.9 13.8 2.9 12t.688-3.388Q4.275 7.025 5.45 5.85t2.763-1.863Q9.8 3.3 11.6 3.3q1.825 0 3.45.7 1.625.7 2.85 1.975l-6.3 6.275V4Q8.25 4 5.925 6.325 3.6 8.65 3.6 12q0 3.35 2.325 5.675Q8.25 20 11.6 20q2 0 3.725-.962 1.725-.963 2.925-2.588v1.15q-1.275 1.45-3 2.275t-3.65.825Zm9-2.7q-.15 0-.25-.1t-.1-.25V11q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.65q0 .15-.1.25t-.25.1Zm0 2.25q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsW100Filled.displayName = 'AmauiIconMaterialRunningWithErrorsW100Filled';

export default IconMaterialRunningWithErrorsW100Filled;
