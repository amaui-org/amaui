import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransformSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformSharpW100Filled'
      short_name='Transform'

      {...props}
    >
      <path d="M16 22.1 12.9 19 13.4 18.5 15.65 20.7V16.35H9.15Q8.5 16.35 8.075 15.925Q7.65 15.5 7.65 14.85V8.35H2.65V7.65H7.65V3.3L5.4 5.5L4.9 5L8 1.9L11.1 5L10.6 5.5L8.35 3.3V14.85Q8.35 15.15 8.6 15.4Q8.85 15.65 9.15 15.65H21.35V16.35H16.35V20.7L18.6 18.5L19.1 19ZM15.65 13.65V9.15Q15.65 8.85 15.4 8.6Q15.15 8.35 14.85 8.35H10.35V7.65H14.85Q15.5 7.65 15.925 8.075Q16.35 8.5 16.35 9.15V13.65Z"/>
    </Icon>
  );
});

IconMaterialTransformSharpW100Filled.displayName = 'AmauiIconMaterialTransformSharpW100Filled';

export default IconMaterialTransformSharpW100Filled;
