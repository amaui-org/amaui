import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthFilled'

      short_name='HomeHealth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 14.5v1q0 .625.438 1.062Q11.375 17 12 17t1.062-.438q.438-.437.438-1.062v-1h1q.625 0 1.062-.438Q16 13.625 16 13t-.438-1.062q-.437-.438-1.062-.438h-1v-1q0-.625-.438-1.062Q12.625 9 12 9t-1.062.438q-.438.437-.438 1.062v1h-1q-.625 0-1.062.438Q8 12.375 8 13t.438 1.062q.437.438 1.062.438ZM6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthFilled.displayName = 'AmauiIconMaterialHomeHealthFilled';

export default IconMaterialHomeHealthFilled;
