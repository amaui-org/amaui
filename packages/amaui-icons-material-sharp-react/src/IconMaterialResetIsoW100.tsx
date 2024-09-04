import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetIsoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetIsoW100'

      short_name='ResetIso'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-412v-68h68l-68 68Zm0 150v-40l179-178h40L478-262Zm0 111 330-329h20v20L500-132h-22v-19Zm132 19 218-218v39L650-132h-40Zm150 0 68-68v68h-68Zm11-448h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24q102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetIsoW100.displayName = 'AmauiIconMaterialResetIsoW100';

export default IconMaterialResetIsoW100;
