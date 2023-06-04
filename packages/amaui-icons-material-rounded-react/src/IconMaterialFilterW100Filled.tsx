import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterW100Filled'

      short_name='Filter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 13.6h6.7q.275 0 .375-.225.1-.225-.05-.425L15.25 10.6q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225Zm-1.85 3.1q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilterW100Filled.displayName = 'AmauiIconMaterialFilterW100Filled';

export default IconMaterialFilterW100Filled;
