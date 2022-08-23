import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownSharpW100'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M6.3 13.7V10.3H9.55L12.7 7.15V16.85L9.55 13.7ZM15.7 15.1V8.85Q16.425 9.375 16.812 10.212Q17.2 11.05 17.2 12Q17.2 12.95 16.812 13.762Q16.425 14.575 15.7 15.1ZM12 8.85 9.85 11H7V13H9.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownSharpW100.displayName = 'AmauiIconMaterialVolumeDownSharpW100';

export default IconMaterialVolumeDownSharpW100;
