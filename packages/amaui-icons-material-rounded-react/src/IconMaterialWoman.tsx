import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman'

      short_name='Woman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22q-.425 0-.712-.288Q10 21.425 10 21v-5H8.475q-.525 0-.825-.438-.3-.437-.1-.937l2.5-6.325q.25-.6.775-.95T12 7q.65 0 1.175.35t.775.95l2.5 6.325q.2.5-.1.937-.3.438-.825.438H14v5q0 .425-.287.712Q13.425 22 13 22Zm1-16q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialWoman.displayName = 'AmauiIconMaterialWoman';

export default IconMaterialWoman;
