import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5g = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5g'

      short_name='5g'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17H4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h4v-2H4q-.425 0-.712-.288Q3 12.425 3 12V8q0-.425.288-.713Q3.575 7 4 7h5q.425 0 .713.287Q10 7.575 10 8t-.287.712Q9.425 9 9 9H5v2h3q.825 0 1.413.587Q10 12.175 10 13v2q0 .825-.587 1.413Q8.825 17 8 17Zm6 0q-.825 0-1.412-.587Q12 15.825 12 15V9q0-.825.588-1.413Q13.175 7 14 7h6q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9h-6v6h5v-2h-1.5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 11 17.5 11H20q.425 0 .712.287.288.288.288.713v3q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterial5g.displayName = 'AmauiIconMaterial5g';

export default IconMaterial5g;
