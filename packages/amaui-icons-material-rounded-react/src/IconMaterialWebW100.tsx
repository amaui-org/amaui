import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebW100'

      short_name='Web'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.35v-4H4v3.2q0 .3.25.55.25.25.55.25Zm11.05 0h3.35q.3 0 .55-.25.25-.25.25-.55V9.3h-4.15ZM4 13.3h11.15v-4H4Z"/>
    </Icon>
  );
});

IconMaterialWebW100.displayName = 'AmauiIconMaterialWebW100';

export default IconMaterialWebW100;
