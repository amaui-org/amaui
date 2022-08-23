import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharpW100Filled'
      short_name='Label'

      {...props}
    >
      <path d="M4.45 17.7V6.3H15.525L19.55 12L15.475 17.7Z"/>
    </Icon>
  );
});

IconMaterialLabelSharpW100Filled.displayName = 'AmauiIconMaterialLabelSharpW100Filled';

export default IconMaterialLabelSharpW100Filled;
