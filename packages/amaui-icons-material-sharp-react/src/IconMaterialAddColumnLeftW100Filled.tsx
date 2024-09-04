import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddColumnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddColumnLeftW100Filled'

      short_name='AddColumnLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M531-172v-616h297v616H531Zm-319 0v-114h14q80.51 0 137.26-56.26Q420-398.52 420-480q0-81.48-56.74-137.74Q306.51-674 226-674h-14v-114h291v616H212Zm0-214v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddColumnLeftW100Filled.displayName = 'AmauiIconMaterialAddColumnLeftW100Filled';

export default IconMaterialAddColumnLeftW100Filled;
