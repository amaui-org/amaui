import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabDuplicateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateW100'

      short_name='TabDuplicate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 872q-12 0-20-8t-8-20h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160q0-12 8-20t20-8v28h-28Zm108 588v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h28q0 12-8 20t-20 8ZM326 764q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22V366H564q-13 0-21.5-8.5T534 336v-80H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100.displayName = 'AmauiIconMaterialTabDuplicateW100';

export default IconMaterialTabDuplicateW100;
