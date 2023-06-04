import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h3.975V5H6.8q-.35 0-.575.225Q6 5.45 6 5.8Zm4.675 0h2.65V5h-2.65Zm3.35 0H18V5.8q0-.35-.225-.575Q17.55 5 17.2 5h-3.175ZM6 19V5v14Zm12 0V5v14Zm-14.35.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100.displayName = 'AmauiIconMaterialCurtainsClosedW100';

export default IconMaterialCurtainsClosedW100;
