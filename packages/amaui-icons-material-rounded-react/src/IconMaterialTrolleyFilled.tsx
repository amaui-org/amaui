import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrolleyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyFilled'

      short_name='Trolley'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 17H6q-.825 0-1.412-.587Q4 15.825 4 15V5H3q-.425 0-.712-.288Q2 4.425 2 4t.288-.713Q2.575 3 3 3h1q.825 0 1.412.587Q6 4.175 6 5v10h14q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20q0-.825.588-1.413Q5.175 18 6 18t1.412.587Q8 19.175 8 20q0 .825-.588 1.413Q6.825 22 6 22Zm2-8q-.425 0-.713-.288Q7 13.425 7 13V9q0-.425.287-.713Q7.575 8 8 8h4q.425 0 .713.287Q13 8.575 13 9v4q0 .425-.287.712Q12.425 14 12 14Zm7 0q-.425 0-.712-.288Q14 13.425 14 13V9q0-.425.288-.713Q14.575 8 15 8h4q.425 0 .712.287Q20 8.575 20 9v4q0 .425-.288.712Q19.425 14 19 14Zm4 8q-.825 0-1.413-.587Q17 20.825 17 20q0-.825.587-1.413Q18.175 18 19 18q.825 0 1.413.587Q21 19.175 21 20q0 .825-.587 1.413Q19.825 22 19 22Z"/>
    </Icon>
  );
});

IconMaterialTrolleyFilled.displayName = 'AmauiIconMaterialTrolleyFilled';

export default IconMaterialTrolleyFilled;
