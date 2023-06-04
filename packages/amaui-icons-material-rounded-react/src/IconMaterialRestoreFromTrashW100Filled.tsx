import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100Filled'

      short_name='RestoreFromTrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 19.7q-.65 0-1.075-.425Q6.3 18.85 6.3 18.2V6h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q0-.3.225-.5t.525-.2h4.5q.3 0 .525.2.225.2.225.5h3.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v12.2q0 .65-.425 1.075-.425.425-1.075.425Zm3.85-9.45v4.5q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.5l2 2q.125.125.25.125t.25-.125q.125-.125.125-.25t-.125-.25l-2.325-2.325Q12.3 9.2 12 9.2q-.3 0-.525.225L9.15 11.75q-.125.125-.125.25t.125.25q.125.125.25.125t.25-.125Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100Filled.displayName = 'AmauiIconMaterialRestoreFromTrashW100Filled';

export default IconMaterialRestoreFromTrashW100Filled;
