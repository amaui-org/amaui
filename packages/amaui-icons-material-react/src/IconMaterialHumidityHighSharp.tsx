import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityHighSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHighSharp'
      short_name='HumidityHigh'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.312Q4 16.875 4 13.6q0-1.65.613-3.063.612-1.412 1.737-2.487L12 2.5l5.65 5.55q1.125 1.075 1.738 2.487Q20 11.95 20 13.6q0 3.275-2.337 5.588Q15.325 21.5 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialHumidityHighSharp.displayName = 'AmauiIconMaterialHumidityHighSharp';

export default IconMaterialHumidityHighSharp;
