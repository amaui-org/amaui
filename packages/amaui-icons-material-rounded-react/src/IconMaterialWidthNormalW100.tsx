import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalW100'

      short_name='WidthNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h4.075V6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25Zm4.775 0h4.85V6h-4.85Zm5.55 0H19.2q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6h-4.075ZM9.575 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalW100.displayName = 'AmauiIconMaterialWidthNormalW100';

export default IconMaterialWidthNormalW100;
