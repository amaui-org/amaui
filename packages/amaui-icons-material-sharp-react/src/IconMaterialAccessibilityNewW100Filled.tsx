import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewW100Filled'

      short_name='AccessibilityNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.75q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138Q11.325 2.55 12 2.55t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-1.95 15.6V8.25q-1.575-.125-3.025-.338Q5.575 7.7 4.3 7.4l.15-.7q1.875.45 3.712.65 1.838.2 3.838.2t3.838-.2q1.837-.2 3.712-.65l.15.7q-1.275.3-2.725.512-1.45.213-3.025.338v13.1h-.7v-6.3h-2.5v6.3Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewW100Filled.displayName = 'AmauiIconMaterialAccessibilityNewW100Filled';

export default IconMaterialAccessibilityNewW100Filled;
