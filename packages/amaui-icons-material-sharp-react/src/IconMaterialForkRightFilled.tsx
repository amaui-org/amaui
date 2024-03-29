import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRightFilled'

      short_name='ForkRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21V6.8L7.4 8.4 6 7l4-4 4 4-1.4 1.4L11 6.8v6.55q.875-.775 1.975-1.113 1.1-.337 2.2-.337.275 0 .538.025.262.025.487.075l-1.6-1.6L16 9l4 4-4 4-1.4-1.4 1.6-1.6q-.275-.05-.562-.088-.288-.037-.563-.037-1.35 0-2.487.762Q11.45 15.4 11 17v4Z"/>
    </Icon>
  );
});

IconMaterialForkRightFilled.displayName = 'AmauiIconMaterialForkRightFilled';

export default IconMaterialForkRightFilled;
