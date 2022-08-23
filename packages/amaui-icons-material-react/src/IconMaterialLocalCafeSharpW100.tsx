import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalCafeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeSharpW100'
      short_name='LocalCafe'

      {...props}
    >
      <path d="M5.3 19.55V18.85H18.1V19.55ZM5.3 15.85V4.45H18.1Q18.725 4.45 19.163 4.887Q19.6 5.325 19.6 5.95V7.65Q19.6 8.275 19.163 8.712Q18.725 9.15 18.1 9.15H16.7V15.85ZM6 15.15H16V5.15H6ZM16.7 8.45H18.1Q18.45 8.45 18.675 8.225Q18.9 8 18.9 7.65V5.95Q18.9 5.6 18.675 5.375Q18.45 5.15 18.1 5.15H16.7ZM11 10.15Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeSharpW100.displayName = 'AmauiIconMaterialLocalCafeSharpW100';

export default IconMaterialLocalCafeSharpW100;
