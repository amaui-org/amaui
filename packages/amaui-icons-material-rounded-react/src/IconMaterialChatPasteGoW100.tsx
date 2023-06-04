import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoW100'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M789 790H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h189l-79-80q-3.667-4-3.833-9.5Q706 667 710 663t9.818-4q5.818 0 10.182 4l92 92q9 9 9 21t-9 21l-92 92q-4.364 4-10.182 4-5.818 0-9.818-4t-3.833-9.5q.166-5.5 3.833-9.5l79-80Zm-560 0-57.333 57.333Q165 854 155.5 850.458 146 846.917 146 837V342q0-24.75 17.625-42.375T206 282h468q24.75 0 42.375 17.625T734 342v194h-28V342q0-14-9-23t-23-9H206q-14 0-23 9t-9 23v420h306v28H229Zm71-320h280q5.95 0 9.975-4.035 4.025-4.035 4.025-10T589.975 446q-4.025-4-9.975-4H300q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0 160h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T469.975 606q-4.025-4-9.975-4H300q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4ZM174 762V310v452Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoW100.displayName = 'AmauiIconMaterialChatPasteGoW100';

export default IconMaterialChatPasteGoW100;
