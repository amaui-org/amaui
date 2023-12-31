import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticleShortcutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleShortcutW100Filled'

      short_name='ArticleShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-626h320q5.95 0 9.975-4.035 4.025-4.035 4.025-10T649.975-650q-4.025-4-9.975-4H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm106 454q-12.75 0-21.375-8.625T396-202v-104h124q5.95 0 9.975-4.035 4.025-4.035 4.025-10T529.975-330q-4.025-4-9.975-4H396v-132h244q5.95 0 9.975-4.035 4.025-4.035 4.025-10T649.975-490q-4.025-4-9.975-4H388q-14-37-46.94-60.5T266-578h-64q-12.75 0-21.375-8.625T172-608v-120q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H426Zm-130 40q-68.189 0-116.095-47.613Q132-227.226 132-295q0-53.51 31-95.755T242-450h-96q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q12.75 0 21.375 8.625T296-448v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025T272-318.025q-4-4.025-4-9.975v-101q-47.012 9.935-77.506 47.19Q160-344.556 160-296.124 160-239 199.5-199.5 239-160 296-160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T305.975-136q-4.025 4-9.975 4Z"/>
    </Icon>
  );
});

IconMaterialArticleShortcutW100Filled.displayName = 'AmauiIconMaterialArticleShortcutW100Filled';

export default IconMaterialArticleShortcutW100Filled;
