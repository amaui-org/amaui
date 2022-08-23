import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaSharpW100Filled'
      short_name='Villa'

      {...props}
    >
      <path d="M10.3 19.7V13.3H16.9Q16.9 12.725 17.312 12.312Q17.725 11.9 18.3 11.9Q18.875 11.9 19.288 12.312Q19.7 12.725 19.7 13.3V19.7H15.7V16.9H14.3V19.7ZM4.3 19.7V8.9L15 4.775V12.6H9.6V19.7Z"/>
    </Icon>
  );
});

IconMaterialVillaSharpW100Filled.displayName = 'AmauiIconMaterialVillaSharpW100Filled';

export default IconMaterialVillaSharpW100Filled;
