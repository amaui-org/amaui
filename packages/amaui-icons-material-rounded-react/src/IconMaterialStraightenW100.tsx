import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenW100'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h14.4q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V8.8q0-.3-.25-.55Q19.5 8 19.2 8h-2.85v3h-.7V8h-3.3v3h-.7V8h-3.3v3h-.7V8H4.8q-.3 0-.55.25Q4 8.5 4 8.8v6.4q0 .3.25.55.25.25.55.25Zm2.85-5h.7Zm4 0h.7Zm4 0h.7ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenW100.displayName = 'AmauiIconMaterialStraightenW100';

export default IconMaterialStraightenW100;
