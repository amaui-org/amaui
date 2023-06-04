import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelFilled'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-.825 0-1.413-.587Q3 17.825 3 17V7q0-.825.587-1.412Q4.175 5 5 5h10q.5 0 .938.225.437.225.712.625l3.525 5q.375.525.375 1.15 0 .625-.375 1.15l-3.525 5q-.275.4-.712.625Q15.5 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialLabelFilled.displayName = 'AmauiIconMaterialLabelFilled';

export default IconMaterialLabelFilled;
