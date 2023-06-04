import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultipleStopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStopW100Filled'

      short_name='MultipleStop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.025 19.1-3.1-3.1 3.1-3.1.5.5-2.25 2.25h7.3v.7h-7.3l2.25 2.25Zm8.025-2.625q-.2 0-.337-.138-.138-.137-.138-.337t.138-.338q.137-.137.337-.137t.337.137q.138.138.138.338t-.138.337q-.137.138-.337.138Zm2.95 0q-.2 0-.337-.138-.138-.137-.138-.337t.138-.338q.137-.137.337-.137t.337.137q.138.138.138.338t-.138.337q-.137.138-.337.138ZM16.975 11.1l-.5-.475L18.75 8.35h-7.325v-.7h7.3l-2.25-2.25.5-.5 3.1 3.1ZM6 8.475q-.2 0-.337-.138Q5.525 8.2 5.525 8t.138-.338Q5.8 7.525 6 7.525t.338.137q.137.138.137.338t-.137.337Q6.2 8.475 6 8.475Zm2.95 0q-.2 0-.337-.138Q8.475 8.2 8.475 8t.138-.338q.137-.137.337-.137t.338.137q.137.138.137.338t-.137.337q-.138.138-.338.138Z"/>
    </Icon>
  );
});

IconMaterialMultipleStopW100Filled.displayName = 'AmauiIconMaterialMultipleStopW100Filled';

export default IconMaterialMultipleStopW100Filled;
