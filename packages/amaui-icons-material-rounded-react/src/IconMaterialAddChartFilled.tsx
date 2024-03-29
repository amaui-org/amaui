import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddChartFilled'

      short_name='AddChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q.425 0 .713-.288Q9 16.425 9 16v-5q0-.425-.287-.713Q8.425 10 8 10t-.713.287Q7 10.575 7 11v5q0 .425.287.712Q7.575 17 8 17Zm4 0q.425 0 .713-.288Q13 16.425 13 16V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v8q0 .425.288.712.287.288.712.288Zm4 0q.425 0 .712-.288Q17 16.425 17 16v-2q0-.425-.288-.713Q16.425 13 16 13t-.712.287Q15 13.575 15 14v2q0 .425.288.712.287.288.712.288ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h8q.425 0 .713.287Q14 3.575 14 4t-.287.712Q13.425 5 13 5H5v14h14v-8q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v8q0 .825-.587 1.413Q19.825 21 19 21ZM18 9q-.425 0-.712-.288Q17 8.425 17 8V7h-1q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h1V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v1h1q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-1v1q0 .425-.288.712Q18.425 9 18 9Z"/>
    </Icon>
  );
});

IconMaterialAddChartFilled.displayName = 'AmauiIconMaterialAddChartFilled';

export default IconMaterialAddChartFilled;
