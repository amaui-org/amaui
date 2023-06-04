import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleW100Filled'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 12.35v-.7h13.4v.7Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleW100Filled.displayName = 'AmauiIconMaterialHorizontalRuleW100Filled';

export default IconMaterialHorizontalRuleW100Filled;
