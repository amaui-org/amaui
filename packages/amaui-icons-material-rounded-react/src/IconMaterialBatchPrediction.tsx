import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatchPrediction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPrediction'

      short_name='BatchPrediction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20V10q0-.825.588-1.413Q6.175 8 7 8h10q.825 0 1.413.587Q19 9.175 19 10v10q0 .825-.587 1.413Q17.825 22 17 22Zm5-1.5q.425 0 .713-.288.287-.287.287-.712V19h-2v.5q0 .425.288.712.287.288.712.288ZM11 18h2q0-.575.387-1.137.388-.563.863-1.175.475-.613.863-1.276.387-.662.387-1.412 0-1.45-1.025-2.475Q13.45 9.5 12 9.5q-1.45 0-2.475 1.025Q8.5 11.55 8.5 13q0 .75.387 1.412.388.663.863 1.276.475.612.863 1.175Q11 17.425 11 18ZM6 6.5q0-.625.438-1.062Q6.875 5 7.5 5h9q.625 0 1.062.438Q18 5.875 18 6.5Zm1-3q0-.625.438-1.062Q7.875 2 8.5 2h7q.625 0 1.062.438Q17 2.875 17 3.5Z"/>
    </Icon>
  );
});

IconMaterialBatchPrediction.displayName = 'AmauiIconMaterialBatchPrediction';

export default IconMaterialBatchPrediction;
