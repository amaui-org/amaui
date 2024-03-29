import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatchPredictionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionFilled'

      short_name='BatchPrediction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22V8h14v14Zm6-1.5h2V19h-2Zm0-2.5h2q0-.575.387-1.137.388-.563.863-1.175.475-.613.863-1.276.387-.662.387-1.412 0-1.45-1.025-2.475Q13.45 9.5 12 9.5q-1.45 0-2.475 1.025Q8.5 11.55 8.5 13q0 .75.387 1.412.388.663.863 1.276.475.612.863 1.175Q11 17.425 11 18ZM6 6.5V5h12v1.5Zm1-3V2h10v1.5Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionFilled.displayName = 'AmauiIconMaterialBatchPredictionFilled';

export default IconMaterialBatchPredictionFilled;
