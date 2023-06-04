import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilled'

      short_name='Movie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4 4 2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4Z"/>
    </Icon>
  );
});

IconMaterialMovieFilled.displayName = 'AmauiIconMaterialMovieFilled';

export default IconMaterialMovieFilled;
