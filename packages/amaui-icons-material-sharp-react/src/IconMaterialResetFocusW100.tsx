import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetFocusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetFocusW100'

      short_name='ResetFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-356v-124h124v28h-96v96h-28Zm0 224v-124h28v96h96v28H480Zm320-224v-96h-96v-28h124v124h-28Zm-96 224v-28h96v-96h28v124H704Zm67-448h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 97.96-66 55.96-24 120.04-24 102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetFocusW100.displayName = 'AmauiIconMaterialResetFocusW100';

export default IconMaterialResetFocusW100;
