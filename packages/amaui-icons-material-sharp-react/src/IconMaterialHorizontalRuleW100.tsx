import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleW100'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 12.35v-.7h13.4v.7Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleW100.displayName = 'AmauiIconMaterialHorizontalRuleW100';

export default IconMaterialHorizontalRuleW100;
