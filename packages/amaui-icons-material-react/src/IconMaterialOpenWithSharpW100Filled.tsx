import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenWithSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithSharpW100Filled'
      short_name='OpenWith'

      {...props}
    >
      <path d="M11.65 9.35V4.25L9.15 6.75L8.65 6.25L12 2.9L15.35 6.25L14.85 6.75L12.35 4.25V9.35ZM12 21.1 8.65 17.75 9.15 17.25 11.65 19.75V14.65H12.35V19.75L14.85 17.25L15.35 17.75ZM17.75 15.35 17.25 14.85 19.75 12.35H14.65V11.65H19.75L17.25 9.15L17.75 8.65L21.1 12ZM6.25 15.35 2.9 12 6.25 8.65 6.75 9.15 4.25 11.65H9.35V12.35H4.25L6.75 14.85Z"/>
    </Icon>
  );
});

IconMaterialOpenWithSharpW100Filled.displayName = 'AmauiIconMaterialOpenWithSharpW100Filled';

export default IconMaterialOpenWithSharpW100Filled;
