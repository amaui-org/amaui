import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalLibrarySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibrarySharpFilled'
      short_name='LocalLibrary'

      {...props}
    >
      <path d="M12 22.5Q10.2 20.8 7.875 19.9Q5.55 19 3 19V8Q5.525 8 7.85 8.912Q10.175 9.825 12 11.55Q13.825 9.825 16.15 8.912Q18.475 8 21 8V19Q18.425 19 16.113 19.9Q13.8 20.8 12 22.5ZM12 9Q10.35 9 9.175 7.825Q8 6.65 8 5Q8 3.35 9.175 2.175Q10.35 1 12 1Q13.65 1 14.825 2.175Q16 3.35 16 5Q16 6.65 14.825 7.825Q13.65 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialLocalLibrarySharpFilled.displayName = 'AmauiIconMaterialLocalLibrarySharpFilled';

export default IconMaterialLocalLibrarySharpFilled;
