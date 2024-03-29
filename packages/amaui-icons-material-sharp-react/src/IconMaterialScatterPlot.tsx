import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScatterPlot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlot'

      short_name='ScatterPlot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-1.65 0-2.825-1.175Q3 15.65 3 14q0-1.65 1.175-2.825Q5.35 10 7 10q1.65 0 2.825 1.175Q11 12.35 11 14q0 1.65-1.175 2.825Q8.65 18 7 18Zm0-2q.825 0 1.412-.588Q9 14.825 9 14t-.588-1.413Q7.825 12 7 12t-1.412.587Q5 13.175 5 14q0 .825.588 1.412Q6.175 16 7 16Zm4-8q.825 0 1.413-.588Q13 6.825 13 6t-.587-1.412Q11.825 4 11 4q-.825 0-1.412.588Q9 5.175 9 6t.588 1.412Q10.175 8 11 8Zm0 2q-1.65 0-2.825-1.175Q7 7.65 7 6q0-1.65 1.175-2.825Q9.35 2 11 2q1.65 0 2.825 1.175Q15 4.35 15 6q0 1.65-1.175 2.825Q12.65 10 11 10Zm6 9q.825 0 1.413-.587Q19 17.825 19 17q0-.825-.587-1.412Q17.825 15 17 15q-.825 0-1.412.588Q15 16.175 15 17t.588 1.413Q16.175 19 17 19Zm0 2q-1.65 0-2.825-1.175Q13 18.65 13 17q0-1.65 1.175-2.825Q15.35 13 17 13q1.65 0 2.825 1.175Q21 15.35 21 17q0 1.65-1.175 2.825Q18.65 21 17 21ZM11 6Zm-4 8Zm10 3Z"/>
    </Icon>
  );
});

IconMaterialScatterPlot.displayName = 'AmauiIconMaterialScatterPlot';

export default IconMaterialScatterPlot;
