import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCircleFilled'

      short_name='AddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4Zm1 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddCircleFilled.displayName = 'AmauiIconMaterialAddCircleFilled';

export default IconMaterialAddCircleFilled;
