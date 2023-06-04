import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartW100Filled'

      short_name='BubbleChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 17q-1.225 0-2.112-.887Q4.5 15.225 4.5 14q0-1.25.888-2.125Q6.275 11 7.5 11q1.25 0 2.125.875T10.5 14q0 1.225-.875 2.113Q8.75 17 7.5 17Zm8.5-3.8q-1.775 0-2.987-1.213Q11.8 10.775 11.8 9q0-1.775 1.213-2.988Q14.225 4.8 16 4.8q1.775 0 2.988 1.212Q20.2 7.225 20.2 9t-1.212 2.987Q17.775 13.2 16 13.2Zm-1.75 6.05q-.825 0-1.412-.587-.588-.588-.588-1.413 0-.825.588-1.412.587-.588 1.412-.588t1.413.588q.587.587.587 1.412t-.587 1.413q-.588.587-1.413.587Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartW100Filled.displayName = 'AmauiIconMaterialBubbleChartW100Filled';

export default IconMaterialBubbleChartW100Filled;
