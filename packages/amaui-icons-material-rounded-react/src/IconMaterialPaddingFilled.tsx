import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaddingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingFilled'

      short_name='Padding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 9q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm4 0q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm4 0q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7t-.712.287Q15 7.575 15 8t.288.712Q15.575 9 16 9ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialPaddingFilled.displayName = 'AmauiIconMaterialPaddingFilled';

export default IconMaterialPaddingFilled;
