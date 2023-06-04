import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTourFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourFilled'

      short_name='Tour'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22V2h2v2h14l-2 5 2 5H7v8Zm7.5-11q.825 0 1.413-.588Q14.5 9.825 14.5 9t-.587-1.413Q13.325 7 12.5 7q-.825 0-1.412.587Q10.5 8.175 10.5 9q0 .825.588 1.412.587.588 1.412.588Z"/>
    </Icon>
  );
});

IconMaterialTourFilled.displayName = 'AmauiIconMaterialTourFilled';

export default IconMaterialTourFilled;
