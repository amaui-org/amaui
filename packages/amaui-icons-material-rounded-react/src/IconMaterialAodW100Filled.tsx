import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodW100Filled'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 11.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1 3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialAodW100Filled.displayName = 'AmauiIconMaterialAodW100Filled';

export default IconMaterialAodW100Filled;
