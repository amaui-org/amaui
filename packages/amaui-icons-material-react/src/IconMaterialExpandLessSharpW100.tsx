import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandLessSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessSharpW100'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M7.4 14.5 6.9 14 12 8.9 17.1 14 16.6 14.5 12 9.9Z"/>
    </Icon>
  );
});

IconMaterialExpandLessSharpW100.displayName = 'AmauiIconMaterialExpandLessSharpW100';

export default IconMaterialExpandLessSharpW100;
