import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharpW100'
      short_name='Label'

      {...props}
    >
      <path d="M4.45 17.7V6.3H15.525L19.55 12L15.475 17.7ZM5.15 17H15.125L18.7 12L15.125 7H5.15ZM5.15 7V12V17Z"/>
    </Icon>
  );
});

IconMaterialLabelSharpW100.displayName = 'AmauiIconMaterialLabelSharpW100';

export default IconMaterialLabelSharpW100;
