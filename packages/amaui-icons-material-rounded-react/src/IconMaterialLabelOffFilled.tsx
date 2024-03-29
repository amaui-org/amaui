import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffFilled'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.275.062-.5.063-.225.188-.45L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-3.15-3.15q-.225.125-.45.188-.225.062-.5.062Zm13.45-3.4L7.85 5H15q.5 0 .925.213.425.212.725.637l3.525 5q.375.525.375 1.15 0 .625-.375 1.15Z"/>
    </Icon>
  );
});

IconMaterialLabelOffFilled.displayName = 'AmauiIconMaterialLabelOffFilled';

export default IconMaterialLabelOffFilled;
