import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSquareFootSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootSharpW100'
      short_name='SquareFoot'

      {...props}
    >
      <path d="M5 19V6.55L7.4 8.95L6.8 9.55L7.2 9.95L7.8 9.35L9.8 11.35L9.2 11.95L9.6 12.35L10.2 11.75L12.3 13.85L11.7 14.45L12.1 14.85L12.7 14.25L14.7 16.25L14.1 16.85L14.5 17.25L15.1 16.65L17.45 19ZM6 18H14.3L6 9.7Z"/>
    </Icon>
  );
});

IconMaterialSquareFootSharpW100.displayName = 'AmauiIconMaterialSquareFootSharpW100';

export default IconMaterialSquareFootSharpW100;
