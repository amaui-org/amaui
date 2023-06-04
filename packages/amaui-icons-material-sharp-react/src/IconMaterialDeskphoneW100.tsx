import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskphoneW100'

      short_name='Deskphone'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M655 862h90V302h-90v560ZM275 642h52v-52h-52v52Zm0 120h52v-52h-52v52Zm0-252h292V402H275v108Zm120 132h52v-52h-52v52Zm0 120h52v-52h-52v52Zm120-120h52v-52h-52v52Zm0 120h52v-52h-52v52Zm112 60V342H215v480h412Zm-440 28V314h440v-40h146v616H627v-40H187Zm28-28V342v480Z"/>
    </Icon>
  );
});

IconMaterialDeskphoneW100.displayName = 'AmauiIconMaterialDeskphoneW100';

export default IconMaterialDeskphoneW100;
