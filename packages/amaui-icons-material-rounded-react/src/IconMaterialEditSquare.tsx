import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquare'

      short_name='EditSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23.7q-.825 0-1.413-.588Q3 22.525 3 21.7v-14q0-.825.587-1.413Q4.175 5.7 5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.587 1.412-.588.588-1.413.588Zm7-9Zm4.175-8.425 1.425 1.4-6.6 6.6V15.7h1.4l6.625-6.625 1.425 1.4-6.625 6.625q-.275.275-.637.438-.363.162-.763.162H10q-.425 0-.712-.287Q9 17.125 9 16.7v-2.425q0-.4.15-.763.15-.362.425-.637Zm4.275 4.2-4.275-4.2 2.5-2.5q.6-.6 1.438-.6.837 0 1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8Z"/>
    </Icon>
  );
});

IconMaterialEditSquare.displayName = 'AmauiIconMaterialEditSquare';

export default IconMaterialEditSquare;
