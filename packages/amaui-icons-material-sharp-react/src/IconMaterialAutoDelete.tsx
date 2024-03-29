import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDelete'

      short_name='AutoDelete'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 6v13Zm4.25 15H5V6H4V4h5V3h6v1h5v2h-1v4.3q-.425-.125-.988-.213Q17.45 10 17 10V6H7v13h3.3q.15.525.4 1.038.25.512.55.962ZM9 17h1q0-1.575.5-2.588L11 13.4V8H9Zm4-5.75q.425-.275.963-.55.537-.275 1.037-.4V8h-2ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.65-2.65.7-.7-1.85-1.85V14h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialAutoDelete.displayName = 'AmauiIconMaterialAutoDelete';

export default IconMaterialAutoDelete;
