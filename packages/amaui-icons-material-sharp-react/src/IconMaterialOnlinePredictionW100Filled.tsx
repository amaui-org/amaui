import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnlinePredictionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnlinePredictionW100Filled'

      short_name='OnlinePrediction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.875 18.15q-1.3-1.35-1.925-2.85T3.325 12q0-1.8.625-3.3.625-1.5 1.925-2.85l.5.5Q5.2 7.525 4.613 8.975q-.588 1.45-.588 3.025t.588 3.025q.587 1.45 1.762 2.625Zm1.9-1.9q-.875-.95-1.312-1.963-.438-1.012-.438-2.287t.438-2.288Q6.9 8.7 7.775 7.75l.5.5Q7.55 9 7.138 9.925q-.413.925-.413 2.075 0 1.15.413 2.075.412.925 1.137 1.675Zm3.575-.15q-.125-.8-.475-1.375t-.725-1.088q-.375-.512-.662-1.05Q9.2 12.05 9.2 11.35q0-1.15.825-1.975Q10.85 8.55 12 8.55q1.15 0 1.975.825.825.825.825 1.975 0 .7-.287 1.225-.288.525-.663 1.05-.375.525-.725 1.1-.35.575-.475 1.375Zm.05 2.5v-1h1.2v1Zm4.875-2.35-.5-.5q.725-.75 1.138-1.675.412-.925.412-2.075 0-1.15-.412-2.075Q16.5 9 15.775 8.25l.5-.5q.875.95 1.313 1.962.437 1.013.437 2.288t-.437 2.287q-.438 1.013-1.313 1.963Zm1.9 1.9-.5-.5q1.175-1.175 1.763-2.625.587-1.45.587-3.025t-.587-3.025q-.588-1.45-1.763-2.625l.5-.5Q19.45 7.2 20.088 8.7q.637 1.5.637 3.3 0 1.8-.637 3.3-.638 1.5-1.913 2.85Z"/>
    </Icon>
  );
});

IconMaterialOnlinePredictionW100Filled.displayName = 'AmauiIconMaterialOnlinePredictionW100Filled';

export default IconMaterialOnlinePredictionW100Filled;
