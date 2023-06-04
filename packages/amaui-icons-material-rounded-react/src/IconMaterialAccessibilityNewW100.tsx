import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewW100'

      short_name='AccessibilityNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.75q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138Q11.325 2.55 12 2.55t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm7.35 1.725q-1.225.275-2.575.463-1.35.187-2.825.312v12.775q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25v-5.95h-2.5v5.975q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25V8.25q-1.475-.125-2.825-.312-1.35-.188-2.575-.463-.15-.05-.238-.163-.087-.112-.037-.262.05-.15.162-.238.113-.087.263-.037 1.8.425 3.55.6 1.75.175 3.65.175t3.65-.175q1.75-.175 3.55-.6.15-.05.263.037.112.088.162.238t-.038.262q-.087.113-.237.163Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewW100.displayName = 'AmauiIconMaterialAccessibilityNewW100';

export default IconMaterialAccessibilityNewW100;
