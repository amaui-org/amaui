import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteForeverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverW100Filled'

      short_name='DeleteForever'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13 2.35 2.35q.125.1.263.1.137 0 .237-.1.125-.125.125-.263 0-.137-.125-.237L12.5 12.5l2.35-2.35q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125L12 12 9.65 9.65q-.1-.125-.237-.125-.138 0-.263.125-.1.1-.1.237 0 .138.1.263l2.35 2.35-2.35 2.35q-.125.125-.125.25t.125.25q.125.125.25.125t.25-.125Zm-4.2 6.7q-.65 0-1.075-.425Q6.3 18.85 6.3 18.2V6h-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q0-.3.225-.5t.525-.2h4.5q.3 0 .525.2.225.2.225.5h3.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v12.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverW100Filled.displayName = 'AmauiIconMaterialDeleteForeverW100Filled';

export default IconMaterialDeleteForeverW100Filled;
