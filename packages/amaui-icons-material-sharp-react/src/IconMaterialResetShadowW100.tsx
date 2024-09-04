import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShadowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShadowW100'

      short_name='ResetShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M654.15-132Q582-132 531-182.85t-51-123Q480-378 530.85-429t123-51Q726-480 777-429.15t51 123Q828-234 777.15-183t-123 51ZM653-161q-23-31-36.5-67T603-306q0-42 13.41-78.28Q629.83-420.56 653-452q-60.42 0-102.71 43Q508-366 508-306t42.29 102.5Q592.58-161 653-161Zm118-419h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 97.96-66 55.96-24 120.04-24 102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetShadowW100.displayName = 'AmauiIconMaterialResetShadowW100';

export default IconMaterialResetShadowW100;
