import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100Filled'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 9.85v-.5l5-5 .5.5-5 5Zm6.2-5.7-.5-.5.8-.8.5.5ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.875 0 1.7.2t1.575.55L10.15 8.525v3.325h3.325l5.1-5.1q.375.75.575 1.613.2.862.2 1.837 0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100Filled.displayName = 'AmauiIconMaterialEditLocationAltW100Filled';

export default IconMaterialEditLocationAltW100Filled;
