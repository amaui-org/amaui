import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSquareFootSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootSharp'
      short_name='SquareFoot'

      {...props}
    >
      <path d="M3 21V2.45L7.1 6.55L5.75 7.9L6.45 8.6L7.8 7.25L10.4 9.85L9.05 11.2L9.75 11.9L11.1 10.55L13.7 13.15L12.35 14.5L13.05 15.2L14.4 13.85L17 16.45L15.65 17.8L16.35 18.5L17.7 17.15L21.55 21ZM6 18H14.3L6 9.7Z"/>
    </Icon>
  );
});

IconMaterialSquareFootSharp.displayName = 'AmauiIconMaterialSquareFootSharp';

export default IconMaterialSquareFootSharp;
