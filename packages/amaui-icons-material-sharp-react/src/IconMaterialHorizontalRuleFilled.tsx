import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleFilled'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13v-2h16v2Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleFilled.displayName = 'AmauiIconMaterialHorizontalRuleFilled';

export default IconMaterialHorizontalRuleFilled;
