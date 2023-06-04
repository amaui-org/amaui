import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccessibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibilityW100Filled'

      short_name='SettingsAccessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 3.75q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138Q11.35.55 12.025.55t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-1.6 15.1q-.15 0-.25-.1t-.1-.25V6.25Q8.6 6.125 7.25 5.938 5.9 5.75 4.675 5.475q-.15-.05-.237-.163Q4.35 5.2 4.4 5.05q.05-.15.162-.238.113-.087.263-.037 1.8.425 3.55.6 1.75.175 3.65.175t3.65-.175q1.75-.175 3.55-.6.15-.05.263.037.112.088.162.238t-.037.262q-.088.113-.238.163-1.225.275-2.575.463-1.35.187-2.825.312V18.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.7h-2.5v5.7q0 .15-.1.25t-.25.1Zm-2.4 4.85q-.275 0-.488-.213-.212-.212-.212-.487t.212-.487q.213-.213.488-.213t.487.213q.213.212.213.487t-.213.487q-.212.213-.487.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibilityW100Filled.displayName = 'AmauiIconMaterialSettingsAccessibilityW100Filled';

export default IconMaterialSettingsAccessibilityW100Filled;
