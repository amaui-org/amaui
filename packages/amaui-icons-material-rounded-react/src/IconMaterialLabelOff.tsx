import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOff'

      short_name='LabelOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.45 15.6 17 14.15 18.55 12 15 7H9.85l-2-2H15q.5 0 .925.213.425.212.725.637l3.525 5q.35.525.35 1.15 0 .625-.35 1.15ZM5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.275.062-.5.063-.225.188-.45L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-3.15-3.15q-.225.125-.45.188-.225.062-.5.062Zm4.575-6.6Zm3.85-1.825ZM14.2 17 5 7.8V17Z"/>
    </Icon>
  );
});

IconMaterialLabelOff.displayName = 'AmauiIconMaterialLabelOff';

export default IconMaterialLabelOff;
