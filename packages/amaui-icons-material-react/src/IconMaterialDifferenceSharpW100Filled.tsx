import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceSharpW100Filled'
      short_name='Difference'

      {...props}
    >
      <path d="M13.15 10.35H13.85V8.35H15.85V7.65H13.85V5.65H13.15V7.65H11.15V8.35H13.15ZM11.15 14.35H15.85V13.65H11.15ZM7.3 17.7V2.3H15.65L19.7 6.35V17.7ZM3.3 21.7V8.3H4V21H13.7V21.7Z"/>
    </Icon>
  );
});

IconMaterialDifferenceSharpW100Filled.displayName = 'AmauiIconMaterialDifferenceSharpW100Filled';

export default IconMaterialDifferenceSharpW100Filled;
