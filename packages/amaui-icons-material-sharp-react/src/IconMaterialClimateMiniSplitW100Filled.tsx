import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitW100Filled'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 12V4.6h17.4V12h-3.575V7.95H6.9V12Zm1.35 5.8v-.725q1.225 0 2.088-.85.862-.85.862-2.075h.725q0 1.525-1.075 2.588Q6.175 17.8 4.65 17.8ZM7.6 12V8.65h8.825V12Zm4.05 6.85v-4.7h.7v4.7Zm7.7-1.05q-1.525 0-2.588-1.062Q15.7 15.675 15.7 14.15h.725q0 1.225.85 2.075.85.85 2.075.85Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitW100Filled.displayName = 'AmauiIconMaterialClimateMiniSplitW100Filled';

export default IconMaterialClimateMiniSplitW100Filled;
