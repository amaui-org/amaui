import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandlestickChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChart'

      short_name='CandlestickChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.425 0-.713-.288Q7 19.425 7 19v-1H6q-.425 0-.713-.288Q5 17.425 5 17V7q0-.425.287-.713Q5.575 6 6 6h1V5q0-.425.287-.713Q7.575 4 8 4t.713.287Q9 4.575 9 5v1h1q.425 0 .713.287Q11 6.575 11 7v10q0 .425-.287.712Q10.425 18 10 18H9v1q0 .425-.287.712Q8.425 20 8 20Zm-1-4h2V8H7Zm9 4q-.425 0-.712-.288Q15 19.425 15 19v-4h-1q-.425 0-.712-.288Q13 14.425 13 14V9q0-.425.288-.713Q13.575 8 14 8h1V5q0-.425.288-.713Q15.575 4 16 4t.712.287Q17 4.575 17 5v3h1q.425 0 .712.287Q19 8.575 19 9v5q0 .425-.288.712Q18.425 15 18 15h-1v4q0 .425-.288.712Q16.425 20 16 20Zm-1-7h2v-3h-2Zm-7-1Zm8-.5Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChart.displayName = 'AmauiIconMaterialCandlestickChart';

export default IconMaterialCandlestickChart;
