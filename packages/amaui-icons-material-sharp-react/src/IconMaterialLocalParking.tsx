import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalParking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParking'

      short_name='LocalParking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21V3h7q2.5 0 4.25 1.75T19 9q0 2.5-1.75 4.25T13 15h-3v6Zm4-10h3.2q.825 0 1.413-.588Q15.2 9.825 15.2 9t-.587-1.413Q14.025 7 13.2 7H10Z"/>
    </Icon>
  );
});

IconMaterialLocalParking.displayName = 'AmauiIconMaterialLocalParking';

export default IconMaterialLocalParking;
