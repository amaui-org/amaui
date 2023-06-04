import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationW100Filled'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 13h.5l3.9-3.9-.5-.5L9 12.5Zm5.125-4.625.725-.725-.5-.5-.725.725ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialEditLocationW100Filled.displayName = 'AmauiIconMaterialEditLocationW100Filled';

export default IconMaterialEditLocationW100Filled;
