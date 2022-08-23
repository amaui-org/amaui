import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceSharpW100'
      short_name='Difference'

      {...props}
    >
      <path d="M13.15 10.35H13.85V8.35H15.85V7.65H13.85V5.65H13.15V7.65H11.15V8.35H13.15ZM11.15 14.35H15.85V13.65H11.15ZM7.3 17.7V2.3H15.65L19.7 6.35V17.7ZM8 17H19V6.7L15.3 3H8ZM3.3 21.7V8.3H4V21H13.7V21.7ZM8 17V3V6.7V17Z"/>
    </Icon>
  );
});

IconMaterialDifferenceSharpW100.displayName = 'AmauiIconMaterialDifferenceSharpW100';

export default IconMaterialDifferenceSharpW100;
