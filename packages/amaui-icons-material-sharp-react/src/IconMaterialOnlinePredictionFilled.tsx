import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnlinePredictionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnlinePredictionFilled'

      short_name='OnlinePrediction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.925 19.075q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175L6 6Q4.825 7.175 4.162 8.7 3.5 10.225 3.5 12t.662 3.3Q4.825 16.825 6 18ZM7.05 16.95q-.95-.95-1.5-2.225Q5 13.45 5 12q0-1.45.55-2.725Q6.1 8 7.05 7.05L8.1 8.1q-.75.75-1.175 1.75-.425 1-.425 2.15t.425 2.15q.425 1 1.175 1.75ZM11 16.5q0-.575-.387-1.138-.388-.562-.863-1.174-.475-.613-.863-1.276Q8.5 12.25 8.5 11.5q0-1.45 1.025-2.475Q10.55 8 12 8q1.45 0 2.475 1.025Q15.5 10.05 15.5 11.5q0 .75-.387 1.412-.388.663-.863 1.276-.475.612-.863 1.174Q13 15.925 13 16.5Zm0 2.5v-1.5h2V19Zm5.95-2.05L15.9 15.9q.75-.75 1.175-1.75.425-1 .425-2.15t-.425-2.15q-.425-1-1.175-1.75l1.05-1.05q.95.95 1.5 2.225Q19 10.55 19 12q0 1.45-.55 2.725-.55 1.275-1.5 2.225Zm2.125 2.125L18 18q1.175-1.175 1.837-2.7.663-1.525.663-3.3t-.663-3.3Q19.175 7.175 18 6l1.075-1.075q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175Z"/>
    </Icon>
  );
});

IconMaterialOnlinePredictionFilled.displayName = 'AmauiIconMaterialOnlinePredictionFilled';

export default IconMaterialOnlinePredictionFilled;
