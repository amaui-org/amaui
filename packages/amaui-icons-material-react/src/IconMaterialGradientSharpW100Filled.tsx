import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientSharpW100Filled'
      short_name='Gradient'

      {...props}
    >
      <path d="M11 13H13V11H11ZM9 15H11V13H9ZM13 15H15V13H13ZM15 13H17V11H15ZM7 13H9V11H7ZM4.3 19.7V4.3H19.7V19.7ZM17 15H19V13H17ZM5 19H7V17H9V19H11V17H13V19H15V17H17V19H19V17H17V15H15V17H13V15H11V17H9V15H7V17H5ZM5 15H7V13H5Z"/>
    </Icon>
  );
});

IconMaterialGradientSharpW100Filled.displayName = 'AmauiIconMaterialGradientSharpW100Filled';

export default IconMaterialGradientSharpW100Filled;
