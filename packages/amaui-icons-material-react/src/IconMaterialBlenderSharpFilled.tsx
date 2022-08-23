import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlenderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderSharpFilled'
      short_name='Blender'

      {...props}
    >
      <path d="M6 22V17L7.85 15.15L7.25 11H3V3H10V2H14V3H18L16.15 15.15L18 17V22ZM5 9H6.95L6.3 5H5ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18Q13 17.575 12.713 17.288Q12.425 17 12 17Q11.575 17 11.288 17.288Q11 17.575 11 18Q11 18.425 11.288 18.712Q11.575 19 12 19ZM9.7 14H14.3L15.65 5H8.35Z"/>
    </Icon>
  );
});

IconMaterialBlenderSharpFilled.displayName = 'AmauiIconMaterialBlenderSharpFilled';

export default IconMaterialBlenderSharpFilled;
