import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDiningW100Filled'

      short_name='LocalDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.175 19.85q-.125-.125-.125-.25t.125-.25l9.85-9.85q-.525-1.25-.25-2.363.275-1.112 1.25-2.087.875-.875 2.3-1.3 1.425-.425 2.4.55.975.975.55 2.4-.425 1.425-1.3 2.3-.975.975-2.088 1.25-1.112.275-2.362-.25l-2 2 7.35 7.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-7.35-7.3-7.35 7.3q-.125.125-.25.125t-.25-.125Zm3.35-8.15L4.825 9q-.9-.9-1.1-2.088-.2-1.187.3-2.312.125-.275.425-.325.3-.05.55.2L9.875 9.35Z"/>
    </Icon>
  );
});

IconMaterialLocalDiningW100Filled.displayName = 'AmauiIconMaterialLocalDiningW100Filled';

export default IconMaterialLocalDiningW100Filled;
