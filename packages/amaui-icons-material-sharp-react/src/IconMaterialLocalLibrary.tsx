import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibrary'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-1.8-1.7-4.125-2.6Q5.55 19 3 19V8q2.525 0 4.85.912 2.325.913 4.15 2.638 1.825-1.725 4.15-2.638Q18.475 8 21 8v11q-2.575 0-4.887.9-2.313.9-4.113 2.6Zm0-2.6q1.575-1.175 3.35-1.875 1.775-.7 3.65-.925v-6.9q-1.825.325-3.587 1.312Q13.65 12.5 12 14.15q-1.65-1.65-3.412-2.638Q6.825 10.525 5 10.2v6.9q1.875.225 3.65.925 1.775.7 3.35 1.875ZM12 9q-1.65 0-2.825-1.175Q8 6.65 8 5q0-1.65 1.175-2.825Q10.35 1 12 1q1.65 0 2.825 1.175Q16 3.35 16 5q0 1.65-1.175 2.825Q13.65 9 12 9Zm0-2q.825 0 1.413-.588Q14 5.825 14 5t-.587-1.413Q12.825 3 12 3q-.825 0-1.412.587Q10 4.175 10 5q0 .825.588 1.412Q11.175 7 12 7Zm0-2Zm0 10.05Z"/>
    </Icon>
  );
});

IconMaterialLocalLibrary.displayName = 'AmauiIconMaterialLocalLibrary';

export default IconMaterialLocalLibrary;
