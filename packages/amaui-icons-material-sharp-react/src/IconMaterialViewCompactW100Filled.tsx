import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactW100Filled'

      short_name='ViewCompact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 9.3V5.35h3.75V9.3Zm4.45 0V5.35h3.75V9.3Zm4.45 0V5.35h3.95V9.3Zm-13.55 0V5.35H7.2V9.3Zm9.1 4.7v-4h3.75v4Zm4.45 0v-4h3.95v4ZM3.25 14v-4H7.2v4Zm9.1 4.65V14.7h3.75v3.95Zm-4.45 0V14.7h3.75v3.95Zm8.9 0V14.7h3.95v3.95Zm-13.55 0V14.7H7.2v3.95ZM7.9 14v-4h3.75v4Z"/>
    </Icon>
  );
});

IconMaterialViewCompactW100Filled.displayName = 'AmauiIconMaterialViewCompactW100Filled';

export default IconMaterialViewCompactW100Filled;
