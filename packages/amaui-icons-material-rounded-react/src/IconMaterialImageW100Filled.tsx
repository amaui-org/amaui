import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageW100Filled'

      short_name='Image'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 16.35h6.7q.275 0 .375-.225.1-.225-.05-.425L14 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialImageW100Filled.displayName = 'AmauiIconMaterialImageW100Filled';

export default IconMaterialImageW100Filled;
