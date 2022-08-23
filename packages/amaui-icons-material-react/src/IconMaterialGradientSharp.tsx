import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientSharp'
      short_name='Gradient'

      {...props}
    >
      <path d="M11 13V11H13V13ZM9 15V13H11V15ZM13 15V13H15V15ZM15 13V11H17V13ZM7 13V11H9V13ZM3 21V3H21V21ZM7 19H9V17H7ZM11 19H13V17H11ZM15 19H17V17H15ZM5 17H7V15H9V17H11V15H13V17H15V15H17V17H19V15H17V13H19V5H5V13H7V15H5ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialGradientSharp.displayName = 'AmauiIconMaterialGradientSharp';

export default IconMaterialGradientSharp;
