import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGen'

      short_name='OvenGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-9v7h14v-7h-2v5H7v-5Zm4 3h6v-3H9Zm-4-5h14V5H5Zm3-2q-.425 0-.713-.287Q7 7.425 7 7t.287-.713Q7.575 6 8 6t.713.287Q9 6.575 9 7t-.287.713Q8.425 8 8 8Zm4 0q-.425 0-.712-.287Q11 7.425 11 7t.288-.713Q11.575 6 12 6t.713.287Q13 6.575 13 7t-.287.713Q12.425 8 12 8Zm4 0q-.425 0-.712-.287Q15 7.425 15 7t.288-.713Q15.575 6 16 6t.712.287Q17 6.575 17 7t-.288.713Q16.425 8 16 8Z"/>
    </Icon>
  );
});

IconMaterialOvenGen.displayName = 'AmauiIconMaterialOvenGen';

export default IconMaterialOvenGen;
