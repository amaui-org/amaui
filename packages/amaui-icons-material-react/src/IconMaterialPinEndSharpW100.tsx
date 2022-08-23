import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinEndSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndSharpW100'
      short_name='PinEnd'

      {...props}
    >
      <path d="M14.875 14.375 10.35 9.85V13H9.65V8.65H14V9.35H10.825L15.375 13.875ZM18.45 18.7Q17.525 18.7 16.863 18.038Q16.2 17.375 16.2 16.45Q16.2 15.5 16.863 14.85Q17.525 14.2 18.45 14.2Q19.4 14.2 20.05 14.85Q20.7 15.5 20.7 16.45Q20.7 17.375 20.05 18.038Q19.4 18.7 18.45 18.7ZM3.3 18.7V5.3H20.7V11.65H20V6H4V18H13.65V18.7Z"/>
    </Icon>
  );
});

IconMaterialPinEndSharpW100.displayName = 'AmauiIconMaterialPinEndSharpW100';

export default IconMaterialPinEndSharpW100;
