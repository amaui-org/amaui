import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageW100Filled'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.375 18.9q-.55 0-.963-.35-.412-.35-.512-.9l-1.225-7.275q-.05-.35.175-.613.225-.262.575-.262h13.15q.35 0 .575.262.225.263.175.613L18.1 17.65q-.1.55-.513.9-.412.35-.962.35ZM10 13.55h4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM6 8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T6 7.3h12q.15 0 .25.1t.1.25q0 .15-.1.25T18 8Zm2-2.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T8 5.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageW100Filled.displayName = 'AmauiIconMaterialHomeStorageW100Filled';

export default IconMaterialHomeStorageW100Filled;
