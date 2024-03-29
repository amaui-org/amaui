import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cable'

      short_name='Cable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2H3v-5h2V7q0-1.65 1.175-2.825Q7.35 3 9 3q1.65 0 2.825 1.175Q13 5.35 13 7v10q0 .825.588 1.413Q14.175 19 15 19t1.413-.587Q17 17.825 17 17v-7h-2V5h1V3h4v2h1v5h-2v7q0 1.65-1.175 2.825Q16.65 21 15 21q-1.65 0-2.825-1.175Q11 18.65 11 17V7q0-.825-.587-1.412Q9.825 5 9 5q-.825 0-1.412.588Q7 6.175 7 7v7h2v5H8v2Z"/>
    </Icon>
  );
});

IconMaterialCable.displayName = 'AmauiIconMaterialCable';

export default IconMaterialCable;
