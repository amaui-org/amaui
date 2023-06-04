import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapW100Filled'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.525 19.425 9 17.5l-3.75 1.45q-.35.125-.65-.075-.3-.2-.3-.575V6.6q0-.25.112-.463.113-.212.338-.287L8.5 4.575Q8.75 4.5 9 4.5t.5.075L15 6.5l3.75-1.45q.35-.125.65.038.3.162.3.512v11.9q0 .275-.15.475-.15.2-.4.275l-3.675 1.2q-.225.075-.475.062-.25-.012-.475-.087Zm.125-.675V7.05L9.35 5.2v11.7Z"/>
    </Icon>
  );
});

IconMaterialMapW100Filled.displayName = 'AmauiIconMaterialMapW100Filled';

export default IconMaterialMapW100Filled;
