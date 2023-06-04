import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthW100Filled'

      short_name='South'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.3q-.15 0-.275-.05-.125-.05-.25-.175l-5.4-5.4q-.1-.1-.1-.237 0-.138.1-.238.1-.1.25-.1t.25.1l5.075 5.075V3.525q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v15.75l5.075-5.075q.1-.1.25-.113.15-.012.25.113.1.1.1.238 0 .137-.1.237l-5.4 5.4q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialSouthW100Filled.displayName = 'AmauiIconMaterialSouthW100Filled';

export default IconMaterialSouthW100Filled;
