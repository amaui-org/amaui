import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixOffW100Filled'

      short_name='AutoFixOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.275 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm-4.9 5.275-2.4-2.4 2-1.975 2.4 2.4Zm5.1 8.925-7-7-6.9 6.85-2.4-2.4 6.9-6.875-7-6.975.5-.5 16.4 16.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixOffW100Filled.displayName = 'AmauiIconMaterialAutoFixOffW100Filled';

export default IconMaterialAutoFixOffW100Filled;
