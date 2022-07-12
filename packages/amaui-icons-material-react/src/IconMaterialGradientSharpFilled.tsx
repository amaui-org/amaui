import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientSharpFilled'
      short_name='Gradient'

      {...props}
    >
      <path d="M11 13H13V11H11ZM9 15H11V13H9ZM13 15H15V13H13ZM15 13H17V11H15ZM7 13H9V11H7ZM3 21V3H21V21ZM17 15H19V13H17ZM5 19H7V17H9V19H11V17H13V19H15V17H17V19H19V17H17V15H15V17H13V15H11V17H9V15H7V17H5ZM5 15H7V13H5Z"/>
    </Icon>
  )
});

export default IconMaterialGradientSharpFilled;
