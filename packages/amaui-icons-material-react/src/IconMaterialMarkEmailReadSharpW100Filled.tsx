import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadSharpW100Filled'
      short_name='MarkEmailRead'

      {...props}
    >
      <path d="M15.35 21.05 12 17.7 12.5 17.2 15.35 20.05 21.05 14.35 21.55 14.85ZM12 11.85 20 6.55 19.6 6 12 11 4.4 6 4 6.55ZM3.3 18.7V5.3H20.7V11.9L15.35 17.225L12.5 14.375L9.175 17.7L10.175 18.7Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadSharpW100Filled.displayName = 'AmauiIconMaterialMarkEmailReadSharpW100Filled';

export default IconMaterialMarkEmailReadSharpW100Filled;
