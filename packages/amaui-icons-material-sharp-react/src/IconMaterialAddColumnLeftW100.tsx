import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeftW100'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-200v-560H531v560h269Zm-588 28v-114h28v86h263v-560H240v86h-28v-114h616v616H212Zm291-308Zm28 0h-28 28Zm0 0Zm-319 94v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeftW100.displayName = 'AmauiIconMaterialAddColumnLeftW100';

export default IconMaterialAddColumnLeftW100;
