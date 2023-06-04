import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodFilled'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11.5V10h8v1.5Zm1 3V13h6v1.5ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialAodFilled.displayName = 'AmauiIconMaterialAodFilled';

export default IconMaterialAodFilled;
