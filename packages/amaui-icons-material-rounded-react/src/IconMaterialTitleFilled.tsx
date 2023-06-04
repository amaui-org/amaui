import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleFilled'

      short_name='Title'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-.625 0-1.062-.438-.438-.437-.438-1.062V7h-4q-.625 0-1.062-.438Q5 6.125 5 5.5t.438-1.062Q5.875 4 6.5 4h11q.625 0 1.062.438Q19 4.875 19 5.5t-.438 1.062Q18.125 7 17.5 7h-4v11.5q0 .625-.438 1.062Q12.625 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTitleFilled.displayName = 'AmauiIconMaterialTitleFilled';

export default IconMaterialTitleFilled;
