import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3W100Filled'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.95 12q0 1.625-.537 3.062-.538 1.438-1.488 2.575-.95 1.138-2.275 1.901-1.325.762-2.875 1.037-.35.05-.512-.1-.163-.15-.163-.35 0-.125.038-.225.037-.1.137-.175 1.8-1.425 2.65-3.4.85-1.975.85-4.325t-.85-4.325q-.85-1.975-2.65-3.4-.1-.075-.137-.175-.038-.1-.038-.225 0-.2.163-.35.162-.15.512-.1 1.55.25 2.875 1.025 1.325.775 2.275 1.912.95 1.138 1.488 2.576.537 1.437.537 3.062Z"/>
    </Icon>
  );
});

IconMaterialBrightness3W100Filled.displayName = 'AmauiIconMaterialBrightness3W100Filled';

export default IconMaterialBrightness3W100Filled;
