import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaSharpW100'
      short_name='Villa'

      {...props}
    >
      <path d="M4.3 19.7V8.9L15 4.775V13.3H16.9Q16.9 12.725 17.312 12.312Q17.725 11.9 18.3 11.9Q18.875 11.9 19.288 12.312Q19.7 12.725 19.7 13.3V19.7ZM5 19H9.6H10.3V13.3H14.3V12.6V5.775L5 9.375ZM11 19H14.3V16.9H15.7V19H19V14H11ZM9.6 12.6ZM15 19ZM15 18.3Z"/>
    </Icon>
  );
});

IconMaterialVillaSharpW100.displayName = 'AmauiIconMaterialVillaSharpW100';

export default IconMaterialVillaSharpW100;
