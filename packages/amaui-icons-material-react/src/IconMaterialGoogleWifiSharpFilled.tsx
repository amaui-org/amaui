import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGoogleWifiSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiSharpFilled'
      short_name='GoogleWifi'

      {...props}
    >
      <path d="m5 20-.325-1H4.15q-.875 0-1.462-.625-.588-.625-.538-1.5L2.475 12h19.05l.325 4.875q.05.875-.538 1.5-.587.625-1.462.625h-.525L19 20ZM2.6 10l.275-4.125q.05-.8.625-1.338Q4.075 4 4.875 4h14.25q.8 0 1.375.537.575.538.625 1.338L21.4 10Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifiSharpFilled.displayName = 'AmauiIconMaterialGoogleWifiSharpFilled';

export default IconMaterialGoogleWifiSharpFilled;
