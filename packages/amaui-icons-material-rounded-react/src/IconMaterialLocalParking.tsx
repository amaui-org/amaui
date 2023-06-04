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
      <path d="M8 21q-.825 0-1.412-.587Q6 19.825 6 19V5q0-.825.588-1.413Q7.175 3 8 3h5q2.5 0 4.25 1.75T19 9q0 2.5-1.75 4.25T13 15h-3v4q0 .825-.587 1.413Q8.825 21 8 21Zm2-10h3.2q.825 0 1.413-.588Q15.2 9.825 15.2 9t-.587-1.413Q14.025 7 13.2 7H10Z"/>
    </Icon>
  );
});

IconMaterialLocalParking.displayName = 'AmauiIconMaterialLocalParking';

export default IconMaterialLocalParking;
