import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTagSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagSharpFilled'
      short_name='Tag'

      {...props}
    >
      <path d="M6 20 7 16H3.5L4 14H7.5L8.5 10H4.5L5 8H9L10 4H12L11 8H15L16 4H18L17 8H20.5L20 10H16.5L15.5 14H19.5L19 16H15L14 20H12L13 16H9L8 20ZM9.5 14H13.5L14.5 10H10.5Z"/>
    </Icon>
  );
});

IconMaterialTagSharpFilled.displayName = 'AmauiIconMaterialTagSharpFilled';

export default IconMaterialTagSharpFilled;
