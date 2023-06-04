import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMiniW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniW100Filled'

      short_name='HomeMini'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6.3q2.55 0 4.225.6 1.675.6 2.675 1.475 1 .875 1.4 1.863.4.987.4 1.762H3.3q0-.775.4-1.762.4-.988 1.4-1.863Q6.1 7.5 7.775 6.9 9.45 6.3 12 6.3ZM9 17.7q-2.2 0-3.787-1.438Q3.625 14.825 3.35 12.7h17.3q-.275 2.125-1.862 3.562Q17.2 17.7 15 17.7Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniW100Filled.displayName = 'AmauiIconMaterialHomeMiniW100Filled';

export default IconMaterialHomeMiniW100Filled;
