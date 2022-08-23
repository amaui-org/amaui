import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleSharp'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M4 13V11H20V13Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleSharp.displayName = 'AmauiIconMaterialHorizontalRuleSharp';

export default IconMaterialHorizontalRuleSharp;
