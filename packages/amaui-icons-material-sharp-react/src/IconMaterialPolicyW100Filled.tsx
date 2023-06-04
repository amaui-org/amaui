import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolicyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyW100Filled'

      short_name='Policy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm0 6.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 1.425-.4 2.825-.4 1.4-1.15 2.625L14.2 13.6q.225-.35.362-.763.138-.412.138-.837 0-1.125-.787-1.913Q13.125 9.3 12 9.3t-1.912.787Q9.3 10.875 9.3 12t.788 1.912q.787.788 1.912.788.475 0 .913-.15.437-.15.787-.45l3.05 3.05q-.95 1.275-2.175 2.175-1.225.9-2.575 1.325Z"/>
    </Icon>
  );
});

IconMaterialPolicyW100Filled.displayName = 'AmauiIconMaterialPolicyW100Filled';

export default IconMaterialPolicyW100Filled;
