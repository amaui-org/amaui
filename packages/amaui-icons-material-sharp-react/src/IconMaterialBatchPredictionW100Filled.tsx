import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatchPredictionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionW100Filled'

      short_name='BatchPrediction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 19.9V7.7h12.2v12.2Zm5.5-1h1.2v-1h-1.2Zm-.05-2.5h1.3q.125-.8.475-1.375t.725-1.1q.375-.525.663-1.05.287-.525.287-1.225 0-1.15-.825-1.975Q13.15 8.85 12 8.85q-1.15 0-1.975.825Q9.2 10.5 9.2 11.65q0 .7.288 1.237.287.538.662 1.051.375.512.725 1.087t.475 1.375ZM7 6.2v-.7h10v.7ZM8.025 4v-.7h7.95V4Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionW100Filled.displayName = 'AmauiIconMaterialBatchPredictionW100Filled';

export default IconMaterialBatchPredictionW100Filled;
