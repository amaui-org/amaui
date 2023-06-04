import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosedW100Filled'

      short_name='VerticalShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6 19h2.475V5H6.8q-.35 0-.575.225Q6 5.45 6 5.8Zm3.175 0h2.475V5H9.175Zm3.175 0h2.475V5H12.35Zm3.175 0H18V5.8q0-.35-.225-.575Q17.55 5 17.2 5h-1.675Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosedW100Filled.displayName = 'AmauiIconMaterialVerticalShadesClosedW100Filled';

export default IconMaterialVerticalShadesClosedW100Filled;
