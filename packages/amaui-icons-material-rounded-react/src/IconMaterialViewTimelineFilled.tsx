import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewTimelineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineFilled'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h4q.425 0 .713-.288Q12 16.425 12 16t-.287-.713Q11.425 15 11 15H7q-.425 0-.713.287Q6 15.575 6 16t.287.712Q6.575 17 7 17Zm6-8h4q.425 0 .712-.288Q18 8.425 18 8t-.288-.713Q17.425 7 17 7h-4q-.425 0-.712.287Q12 7.575 12 8t.288.712Q12.575 9 13 9Zm-3 4h4q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11h-4q-.425 0-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Zm-5 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineFilled.displayName = 'AmauiIconMaterialViewTimelineFilled';

export default IconMaterialViewTimelineFilled;
