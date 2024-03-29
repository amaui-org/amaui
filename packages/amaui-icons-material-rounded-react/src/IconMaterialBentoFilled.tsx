import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBentoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoFilled'

      short_name='Bento'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 11V5h4q.825 0 1.413.588Q22 6.175 22 7v4ZM4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h10v14Zm4-5.5q.625 0 1.062-.438Q9.5 12.625 9.5 12t-.438-1.062Q8.625 10.5 8 10.5t-1.062.438Q6.5 11.375 6.5 12t.438 1.062Q7.375 13.5 8 13.5Zm8 5.5v-6h6v4q0 .825-.587 1.413Q20.825 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialBentoFilled.displayName = 'AmauiIconMaterialBentoFilled';

export default IconMaterialBentoFilled;
