import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmendFilled'

      short_name='Amend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16h10v-2H7Zm0-4h4v-1.5H9.575q.5-.475 1.125-.738.625-.262 1.3-.262 1.175 0 2.088.688Q15 10.875 15.35 12h1.55q-.35-1.75-1.725-2.875T12 8q-.975 0-1.887.375Q9.2 8.75 8.5 9.45V8H7Zm5 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAmendFilled.displayName = 'AmauiIconMaterialAmendFilled';

export default IconMaterialAmendFilled;
