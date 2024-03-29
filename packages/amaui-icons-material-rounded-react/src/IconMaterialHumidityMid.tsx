import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityMid = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMid'

      short_name='HumidityMid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.312Q4 16.875 4 13.6q0-1.65.613-3.063.612-1.412 1.737-2.487L12 2.5l5.65 5.55q1.125 1.075 1.738 2.487Q20 11.95 20 13.6q0 3.275-2.337 5.588Q15.325 21.5 12 21.5Zm0-16.2L7.75 9.5q-.75.725-1.188 1.6-.437.875-.537 1.925h11.95q-.1-1.05-.537-1.925-.438-.875-1.188-1.6Z"/>
    </Icon>
  );
});

IconMaterialHumidityMid.displayName = 'AmauiIconMaterialHumidityMid';

export default IconMaterialHumidityMid;
