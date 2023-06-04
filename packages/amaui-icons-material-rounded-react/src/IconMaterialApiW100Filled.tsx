import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiW100Filled'

      short_name='Api'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.875 8.575-1.45-1.45 2.525-2.5q.225-.225.5-.338.275-.112.55-.112t.55.112q.275.113.5.338l2.525 2.5-1.45 1.45L12 6.45Zm-2.75 7-2.5-2.525q-.225-.225-.338-.5-.112-.275-.112-.55t.112-.55q.113-.275.338-.5l2.5-2.525 1.45 1.45L6.45 12l2.125 2.125Zm9.75 0-1.45-1.45L17.55 12l-2.125-2.125 1.45-1.45 2.5 2.525q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5ZM12 19.825q-.275 0-.55-.113-.275-.112-.5-.337l-2.525-2.5 1.45-1.45L12 17.55l2.125-2.125 1.45 1.45-2.525 2.5q-.225.225-.5.337-.275.113-.55.113Zm0-6.4q-.575 0-1-.425-.425-.425-.425-1T11 11q.425-.425 1-.425T13 11q.425.425.425 1T13 13q-.425.425-1 .425Z"/>
    </Icon>
  );
});

IconMaterialApiW100Filled.displayName = 'AmauiIconMaterialApiW100Filled';

export default IconMaterialApiW100Filled;
