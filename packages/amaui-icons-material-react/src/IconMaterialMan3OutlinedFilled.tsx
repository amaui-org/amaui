import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3OutlinedFilled'
      short_name='Man3'

      {...props}
    >
      <path d="M10 22.25v-7H8v-6q0-.825.588-1.413Q9.175 7.25 10 7.25h4q.825 0 1.413.587Q16 8.425 16 9.25v6h-2v7ZM12 6.5 9.75 4.25 12 2l2.25 2.25Z"/>
    </Icon>
  )
});

export default IconMaterialMan3OutlinedFilled;
