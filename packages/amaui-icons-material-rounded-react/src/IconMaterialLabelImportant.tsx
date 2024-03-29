import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportant'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 15.925 7.5 12 4.975 8.075q-.65-1-.075-2.038Q5.475 5 6.675 5H15q.5 0 .938.225.437.225.712.625l3.525 5q.35.525.35 1.15 0 .625-.35 1.15l-3.525 5q-.275.4-.712.625Q15.5 19 15 19H6.675q-1.2 0-1.775-1.038-.575-1.037.075-2.037ZM6.65 17H15l3.55-5L15 7H6.65l3.25 5Zm3.25-5L6.65 7l3.25 5-3.25 5Z"/>
    </Icon>
  );
});

IconMaterialLabelImportant.displayName = 'AmauiIconMaterialLabelImportant';

export default IconMaterialLabelImportant;
