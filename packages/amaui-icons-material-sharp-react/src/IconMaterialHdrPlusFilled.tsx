import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusFilled'

      short_name='HdrPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM7 12h1.5V9.5h2V12H12V6h-1.5v2h-2V6H7Zm7.5 5.5H16V16h1.5v-1.5H16V13h-1.5v1.5H13V16h1.5ZM13 12h3q.6 0 1.05-.45.45-.45.45-1.05v-3q0-.6-.45-1.05Q16.6 6 16 6h-3Zm-2.5 3.5h-2v-1h2v1Zm-.05 3.5H12l-.9-2.1q.375-.225.638-.588Q12 15.95 12 15.5v-1q0-.625-.438-1.062Q11.125 13 10.5 13H7v6h1.5v-2h1.1Zm4.05-8.5v-3H16v3Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusFilled.displayName = 'AmauiIconMaterialHdrPlusFilled';

export default IconMaterialHdrPlusFilled;
