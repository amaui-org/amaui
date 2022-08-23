import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTagSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagSharpW100'
      short_name='Tag'

      {...props}
    >
      <path d="M7.325 19.35 8.325 15.35H4.325L4.5 14.65H8.5L9.825 9.35H5.325L5.5 8.65H10L11 4.65H11.675L10.675 8.65H15L16 4.65H16.675L15.675 8.65H19.675L19.5 9.35H15.5L14.175 14.65H18.675L18.5 15.35H14L13 19.35H12.325L13.325 15.35H9L8 19.35ZM9.175 14.65H13.5L14.825 9.35H10.5Z"/>
    </Icon>
  );
});

IconMaterialTagSharpW100.displayName = 'AmauiIconMaterialTagSharpW100';

export default IconMaterialTagSharpW100;
