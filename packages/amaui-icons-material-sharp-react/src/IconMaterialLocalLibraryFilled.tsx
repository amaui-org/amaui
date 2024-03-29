import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryFilled'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-1.8-1.7-4.125-2.6Q5.55 19 3 19V8q2.525 0 4.85.912 2.325.913 4.15 2.638 1.825-1.725 4.15-2.638Q18.475 8 21 8v11q-2.575 0-4.887.9-2.313.9-4.113 2.6ZM12 9q-1.65 0-2.825-1.175Q8 6.65 8 5q0-1.65 1.175-2.825Q10.35 1 12 1q1.65 0 2.825 1.175Q16 3.35 16 5q0 1.65-1.175 2.825Q13.65 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryFilled.displayName = 'AmauiIconMaterialLocalLibraryFilled';

export default IconMaterialLocalLibraryFilled;
