import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexNoWrapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrapW100Filled'

      short_name='FlexNoWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 709V443q0-12.75 8.625-21.375T122 413h116q12.75 0 21.375 8.625T268 443v266q0 12.75-8.625 21.375T238 739H122q-12.75 0-21.375-8.625T92 709Zm300 0V443q0-12.75 8.625-21.375T422 413h116q12.75 0 21.375 8.625T568 443v266q0 12.75-8.625 21.375T538 739H422q-12.75 0-21.375-8.625T392 709Zm300 0V443q0-12.75 8.625-21.375T722 413h116q12.75 0 21.375 8.625T868 443v266q0 12.75-8.625 21.375T838 739H722q-12.75 0-21.375-8.625T692 709Zm-572 2h120V441H120v270Zm610 0h110V441H730v270Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrapW100Filled.displayName = 'AmauiIconMaterialFlexNoWrapW100Filled';

export default IconMaterialFlexNoWrapW100Filled;
