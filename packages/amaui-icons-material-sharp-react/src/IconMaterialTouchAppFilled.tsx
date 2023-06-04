import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchAppFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppFilled'

      short_name='TouchApp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 9.25q-.85-.575-1.425-1.563Q7 6.7 7 5.5q0-1.875 1.312-3.188Q9.625 1 11.5 1q1.875 0 3.188 1.312Q16 3.625 16 5.5q0 1.25-.587 2.212-.588.963-1.413 1.538V5.5q0-1.05-.725-1.775Q12.55 3 11.5 3q-1.05 0-1.775.725Q9 4.45 9 5.5ZM10.15 22l-5.4-5.375 1.2-1.25 4.05.875V5.5q0-.625.438-1.062Q10.875 4 11.5 4t1.062.438Q13 4.875 13 5.5v6h1.075l6.1 2.85L19.1 22Z"/>
    </Icon>
  );
});

IconMaterialTouchAppFilled.displayName = 'AmauiIconMaterialTouchAppFilled';

export default IconMaterialTouchAppFilled;
