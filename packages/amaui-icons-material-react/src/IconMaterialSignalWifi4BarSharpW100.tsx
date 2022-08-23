import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarSharpW100'
      short_name='SignalWifi4Bar'

      {...props}
    >
      <path d="M12 19.15 1.85 9Q3.975 7.175 6.588 6.238Q9.2 5.3 12 5.3Q14.8 5.3 17.413 6.238Q20.025 7.175 22.15 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarSharpW100.displayName = 'AmauiIconMaterialSignalWifi4BarSharpW100';

export default IconMaterialSignalWifi4BarSharpW100;
