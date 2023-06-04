import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Zm1.65-2.15H9.7l5-9h2.65v-.7H14.3l-5 9H6.65Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100.displayName = 'AmauiIconMaterialEscalatorW100';

export default IconMaterialEscalatorW100;
