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
      <path d="M5.65 12.35q-.15 0-.25-.1T5.3 12q0-.15.1-.25t.25-.1h12.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleW100Filled.displayName = 'AmauiIconMaterialHorizontalRuleW100Filled';

export default IconMaterialHorizontalRuleW100Filled;
