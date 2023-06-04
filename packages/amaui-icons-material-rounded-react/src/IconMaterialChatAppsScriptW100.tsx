import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatAppsScriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAppsScriptW100'

      short_name='ChatAppsScript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.875l-3.975-2.8q-.125-.075-.15-.213-.025-.137.05-.262.075-.125.212-.15.138-.025.263.05l4.025 2.8-1.7-4.6q-.05-.125.025-.263.075-.137.2-.187.125-.05.275.025.15.075.2.2l1.65 4.55 1.275-4.675q.05-.125.163-.213.112-.087.237-.037.125.05.225.162.1.113.05.238l-1.575 5.8q-.05.125-.137.2-.088.075-.213.075Zm-10.35-.925V6.15q0-.65.425-1.075Q4.5 4.65 5.15 4.65h11.7q.65 0 1.075.425.425.425.425 1.075V11h-.7V6.15q0-.3-.25-.55-.25-.25-.55-.25H5.15q-.3 0-.55.25-.25.25-.25.55v11.575l1.075-1.075H12v.7H5.725ZM7.15 9.35v-.7h7.7v.7Zm0 4v-.7h4.7v.7Z"/>
    </Icon>
  );
});

IconMaterialChatAppsScriptW100.displayName = 'AmauiIconMaterialChatAppsScriptW100';

export default IconMaterialChatAppsScriptW100;
