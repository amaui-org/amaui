import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterNoneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneSharpW100'
      short_name='FilterNone'

      {...props}
    >
      <path d="M6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 4V16Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneSharpW100.displayName = 'AmauiIconMaterialFilterNoneSharpW100';

export default IconMaterialFilterNoneSharpW100;
