import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWomanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanW100'

      short_name='Woman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.2 21.35V15.2H7.5l3.225-8.1h2.55l3.225 8.1h-2.7v6.15ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialWomanW100.displayName = 'AmauiIconMaterialWomanW100';

export default IconMaterialWomanW100;
