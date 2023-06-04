import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8v8ZM6 18V6h12v12Zm2-2h8V8H8Z"/>
    </Icon>
  );
});

IconMaterialStop.displayName = 'AmauiIconMaterialStop';

export default IconMaterialStop;
