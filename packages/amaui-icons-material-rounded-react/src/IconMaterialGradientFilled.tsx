import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientFilled'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm6-10v2h2v-2Zm-4 0v2h2v-2Zm2 2v2h2v-2Zm4 0v2h2v-2Zm-8 0v2h2v-2Zm10-2v2h2v2h2v-2h-2v-2Zm-8 4v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h-2v2h-2v-2h-2v2H9v-2Z"/>
    </Icon>
  );
});

IconMaterialGradientFilled.displayName = 'AmauiIconMaterialGradientFilled';

export default IconMaterialGradientFilled;
