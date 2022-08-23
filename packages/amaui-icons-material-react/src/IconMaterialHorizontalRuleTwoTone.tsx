import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleTwoTone'
      short_name='HorizontalRule'

      {...props}
    >
      <g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><g><rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/></g></g>
    </Icon>
  );
});

IconMaterialHorizontalRuleTwoTone.displayName = 'AmauiIconMaterialHorizontalRuleTwoTone';

export default IconMaterialHorizontalRuleTwoTone;
