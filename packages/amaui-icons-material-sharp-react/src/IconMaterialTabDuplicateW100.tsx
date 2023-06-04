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
      <path d="M186 872h-28v-28h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-28h28v28h-28Zm108 588v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h28v28h-28ZM266 764V228h536v536H266Zm28-28h480V366H534V256H294v480Zm0-480v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100.displayName = 'AmauiIconMaterialTabDuplicateW100';

export default IconMaterialTabDuplicateW100;
