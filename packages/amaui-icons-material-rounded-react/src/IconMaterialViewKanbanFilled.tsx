import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewKanbanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewKanbanFilled'

      short_name='ViewKanban'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q.425 0 .713-.288Q9 16.425 9 16V8q0-.425-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8v8q0 .425.287.712Q7.575 17 8 17Zm4-5q.425 0 .713-.288Q13 11.425 13 11V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3q0 .425.288.712.287.288.712.288Zm4 3q.425 0 .712-.288Q17 14.425 17 14V8q0-.425-.288-.713Q16.425 7 16 7t-.712.287Q15 7.575 15 8v6q0 .425.288.712.287.288.712.288ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialViewKanbanFilled.displayName = 'AmauiIconMaterialViewKanbanFilled';

export default IconMaterialViewKanbanFilled;
