import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenSharpW100Filled'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M3.775 17.05V16.35H15.475V17.05ZM3.775 12.35V11.65H12.475V12.35ZM3.775 7.65V6.95H15.475V7.65ZM19.725 16.1 15.625 12 19.725 7.9 20.225 8.4 16.625 12 20.225 15.6Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenSharpW100Filled.displayName = 'AmauiIconMaterialMenuOpenSharpW100Filled';

export default IconMaterialMenuOpenSharpW100Filled;
