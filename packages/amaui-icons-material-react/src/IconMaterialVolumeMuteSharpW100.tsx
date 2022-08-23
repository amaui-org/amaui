import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeMuteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteSharpW100'
      short_name='VolumeMute'

      {...props}
    >
      <path d="M8.3 13.7V10.3H11.55L14.7 7.15V16.85L11.55 13.7ZM9 13H11.85L14 15.15V8.85L11.85 11H9ZM11.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteSharpW100.displayName = 'AmauiIconMaterialVolumeMuteSharpW100';

export default IconMaterialVolumeMuteSharpW100;
