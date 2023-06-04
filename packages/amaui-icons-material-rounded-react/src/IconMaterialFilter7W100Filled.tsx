import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7W100Filled'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 6.35-3.525 7.5q-.075.175.013.338.087.162.287.162.1 0 .175-.05.075-.05.125-.15l3.625-7.675q.05-.075.05-.138V6.2q0-.225-.15-.388-.15-.162-.35-.162h-3.875q-.125 0-.225.1T11 6q0 .15.1.25t.25.1ZM8.15 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilter7W100Filled.displayName = 'AmauiIconMaterialFilter7W100Filled';

export default IconMaterialFilter7W100Filled;
