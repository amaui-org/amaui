import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabDuplicateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateW100Filled'

      short_name='TabDuplicate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 872q-11.55 0-19.775-8.225Q158 855.55 158 844h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160q0-11.55 8.225-19.775Q174.45 256 186 256v28h-28Zm108 588v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h28q0 12-8.225 20T746 872ZM326 764q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm448-398v-78q0-12-10-22t-22-10H534v80q0 12.75 8.625 21.375T564 366h210Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100Filled.displayName = 'AmauiIconMaterialTabDuplicateW100Filled';

export default IconMaterialTabDuplicateW100Filled;
