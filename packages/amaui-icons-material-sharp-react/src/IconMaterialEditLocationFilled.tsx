import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationFilled'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 13.5h1.45l3.9-3.925-1.425-1.425-3.925 3.9Zm6.075-4.65.975-.975-1.425-1.425-.975.975ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialEditLocationFilled.displayName = 'AmauiIconMaterialEditLocationFilled';

export default IconMaterialEditLocationFilled;
