import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialErrorMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedFilled'

      short_name='ErrorMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.075 14.95 1.85-2.525 1.825 2.525L18 10.525 16.4 9.35l-1.65 2.225L12.9 9.05l-1.825 2.525-1.85-2.525L6 13.475l1.6 1.175 1.625-2.225ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialErrorMedFilled.displayName = 'AmauiIconMaterialErrorMedFilled';

export default IconMaterialErrorMedFilled;
