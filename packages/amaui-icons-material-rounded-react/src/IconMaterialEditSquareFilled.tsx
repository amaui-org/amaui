import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareFilled'

      short_name='EditSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.875 9.05 17.6 4.85l1.075-1.075q.6-.6 1.438-.6.837 0 1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8ZM5 23.7q-.825 0-1.413-.588Q3 22.525 3 21.7v-14q0-.825.587-1.413Q4.175 5.7 5 5.7h8.925l-6.05 6.05q-.425.425-.65.975-.225.55-.225 1.15V17.7q0 .825.588 1.412.587.588 1.412.588h3.825q.6 0 1.15-.225.55-.225.975-.65L21 12.75v8.95q0 .825-.587 1.412-.588.588-1.413.588Zm5-6q-.425 0-.712-.287Q9 17.125 9 16.7v-2.425q0-.4.15-.763.15-.362.425-.637l6.6-6.6 4.275 4.2-6.625 6.625q-.275.275-.637.438-.363.162-.763.162Z"/>
    </Icon>
  );
});

IconMaterialEditSquareFilled.displayName = 'AmauiIconMaterialEditSquareFilled';

export default IconMaterialEditSquareFilled;
