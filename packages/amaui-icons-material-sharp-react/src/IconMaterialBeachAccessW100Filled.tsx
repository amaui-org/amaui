import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeachAccessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessW100Filled'

      short_name='BeachAccess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 19.8-5.95-5.9.5-.5 5.95 5.95ZM6 18.4q-1.725-2.35-1.737-5.275Q4.25 10.2 6 7.85q-.3 1-.162 2.088.137 1.087.537 2.149.4 1.063.988 2.038.587.975 1.187 1.725Zm3.025-3.025q-1-1.125-1.587-2.375-.588-1.25-.813-2.4Q6.4 9.45 6.55 8.525q.15-.925.625-1.4.475-.475 1.4-.6.925-.125 2.062.112 1.138.238 2.375.838 1.238.6 2.338 1.575Zm6.8-6.8Q15.1 8 14.15 7.412q-.95-.587-1.987-1Q11.125 6 10.05 5.825t-2.05.1q2.35-1.65 5.2-1.638Q16.05 4.3 18.4 6Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessW100Filled.displayName = 'AmauiIconMaterialBeachAccessW100Filled';

export default IconMaterialBeachAccessW100Filled;
