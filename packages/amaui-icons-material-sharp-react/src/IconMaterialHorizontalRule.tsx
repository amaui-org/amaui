import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRule'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13v-2h16v2Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRule.displayName = 'AmauiIconMaterialHorizontalRule';

export default IconMaterialHorizontalRule;
