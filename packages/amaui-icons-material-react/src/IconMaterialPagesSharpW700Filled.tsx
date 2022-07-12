import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesSharpW700Filled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 17 13.55 13.55 17 12 13.55 10.45 12 7 10.45 10.45 7 12 10.45 13.55ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPagesSharpW700Filled;
