import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasinoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoFilled'

      short_name='Casino'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 18q.625 0 1.062-.438Q9 17.125 9 16.5t-.438-1.062Q8.125 15 7.5 15t-1.062.438Q6 15.875 6 16.5t.438 1.062Q6.875 18 7.5 18Zm0-9q.625 0 1.062-.438Q9 8.125 9 7.5t-.438-1.062Q8.125 6 7.5 6t-1.062.438Q6 6.875 6 7.5t.438 1.062Q6.875 9 7.5 9Zm4.5 4.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 10.5 12 10.5t-1.062.438Q10.5 11.375 10.5 12t.438 1.062q.437.438 1.062.438Zm4.5 4.5q.625 0 1.062-.438Q18 17.125 18 16.5t-.438-1.062Q17.125 15 16.5 15t-1.062.438Q15 15.875 15 16.5t.438 1.062Q15.875 18 16.5 18Zm0-9q.625 0 1.062-.438Q18 8.125 18 7.5t-.438-1.062Q17.125 6 16.5 6t-1.062.438Q15 6.875 15 7.5t.438 1.062Q15.875 9 16.5 9ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialCasinoFilled.displayName = 'AmauiIconMaterialCasinoFilled';

export default IconMaterialCasinoFilled;
