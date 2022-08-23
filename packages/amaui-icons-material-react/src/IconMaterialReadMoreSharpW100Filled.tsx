import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReadMoreSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreSharpW100Filled'
      short_name='ReadMore'

      {...props}
    >
      <path d="M7.45 16.525 6.975 16.05 10.625 12.35H2.65V11.65H10.625L6.975 7.95L7.45 7.475L11.975 12ZM13.65 8.35V7.65H21.35V8.35ZM13.65 16.35V15.65H21.35V16.35ZM16.65 12.35V11.65H21.35V12.35Z"/>
    </Icon>
  );
});

IconMaterialReadMoreSharpW100Filled.displayName = 'AmauiIconMaterialReadMoreSharpW100Filled';

export default IconMaterialReadMoreSharpW100Filled;
