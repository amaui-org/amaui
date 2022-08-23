import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSuperscriptSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SuperscriptSharpFilled'
      short_name='Superscript'

      {...props}
    >
      <path d="M19 9V6H22V5H19V4H23V7H20V8H23V9ZM5.875 20 10.5 12.725 6.2 6H8.85L11.95 11H12.05L15.125 6H17.8L13.475 12.725L18.125 20H15.45L12.05 14.575H11.95L8.55 20Z"/>
    </Icon>
  );
});

IconMaterialSuperscriptSharpFilled.displayName = 'AmauiIconMaterialSuperscriptSharpFilled';

export default IconMaterialSuperscriptSharpFilled;
