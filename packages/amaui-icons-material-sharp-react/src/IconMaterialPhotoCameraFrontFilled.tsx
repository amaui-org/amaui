import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontFilled'

      short_name='PhotoCameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h8v-.55q0-1.125-1.1-1.788Q13.8 14 12 14q-1.8 0-2.9.662Q8 15.325 8 16.45Zm4-4q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13ZM2 21V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontFilled.displayName = 'AmauiIconMaterialPhotoCameraFrontFilled';

export default IconMaterialPhotoCameraFrontFilled;
