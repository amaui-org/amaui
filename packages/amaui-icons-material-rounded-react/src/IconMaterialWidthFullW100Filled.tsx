import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullW100Filled'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h.75V6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25Zm13.65 0h.75q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6h-.75Z"/>
    </Icon>
  );
});

IconMaterialWidthFullW100Filled.displayName = 'AmauiIconMaterialWidthFullW100Filled';

export default IconMaterialWidthFullW100Filled;
