import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthSharpW100'
      short_name='South'

      {...props}
    >
      <path d="M12 20.6 5.85 14.45 6.325 13.95 11.65 19.275V3.175H12.35V19.275L17.675 13.95L18.15 14.45Z"/>
    </Icon>
  );
});

IconMaterialSouthSharpW100.displayName = 'AmauiIconMaterialSouthSharpW100';

export default IconMaterialSouthSharpW100;
