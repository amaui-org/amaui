import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArticleShortcutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleShortcutW100'

      short_name='ArticleShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM296-132q-68.189 0-116.095-47.613Q132-227.226 132-295q0-53.51 31-95.755T242-450H132v-28h164v164h-28v-115q-47.012 9.935-77.506 47.19Q160-344.556 160-296.124 160-239 199.5-199.5 239-160 296-160v28Zm100-40v-28h364v-560H200v182h-28v-210h616v616H396Zm0-294h258v-28H396v28Zm0 160h138v-28H396v28Zm-90-320h348v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialArticleShortcutW100.displayName = 'AmauiIconMaterialArticleShortcutW100';

export default IconMaterialArticleShortcutW100;
