import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCozyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozyW100Filled'

      short_name='ViewCozy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.475 11.175h2.7v-2.7h-2.7Zm4.35 0h2.7v-2.7h-2.7Zm-4.35 4.35h2.7v-2.7h-2.7Zm4.35 0h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialViewCozyW100Filled.displayName = 'AmauiIconMaterialViewCozyW100Filled';

export default IconMaterialViewCozyW100Filled;
