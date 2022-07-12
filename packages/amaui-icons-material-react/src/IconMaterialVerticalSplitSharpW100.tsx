import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitSharpW100'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M4.3 13.45V14.15H11V13.45ZM4.3 17V17.7H11V17ZM4.3 9.85V10.55H11V9.85ZM4.3 6.3V7H11V6.3ZM15 7V17ZM14.3 6.3H19.7V17.7H14.3ZM15 7V17H19V7Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalSplitSharpW100;
