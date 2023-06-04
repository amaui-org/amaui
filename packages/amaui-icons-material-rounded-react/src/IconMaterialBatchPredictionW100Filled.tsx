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
      <path d="M7 19.9q-.45 0-.775-.325T5.9 18.8v-10q0-.45.325-.775T7 7.7h10q.45 0 .775.325t.325.775v10q0 .45-.325.775T17 19.9Zm5-1q.25 0 .425-.175t.175-.425v-.4h-1.2v.4q0 .25.175.425T12 18.9Zm-.65-2.5h1.3q.125-.8.475-1.375t.725-1.1q.375-.525.663-1.05.287-.525.287-1.225 0-1.15-.825-1.975Q13.15 8.85 12 8.85q-1.15 0-1.975.825Q9.2 10.5 9.2 11.65q0 .7.288 1.237.287.538.662 1.051.375.512.725 1.087t.475 1.375ZM7 6.2q.125-.325.4-.512.275-.188.625-.188h7.95q.35 0 .625.188.275.187.4.512ZM8.025 4q.125-.325.4-.513Q8.7 3.3 9.05 3.3h5.9q.35 0 .625.187.275.188.4.513Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionW100Filled.displayName = 'AmauiIconMaterialBatchPredictionW100Filled';

export default IconMaterialBatchPredictionW100Filled;
