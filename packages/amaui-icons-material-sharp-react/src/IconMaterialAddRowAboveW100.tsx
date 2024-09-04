import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveW100'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-269H200v269Zm588 28H172v-616h114v28h-86v263h560v-263h-86v-28h114v616ZM480-457Zm0 28v-28 28Zm0 0Zm-14-211v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveW100.displayName = 'AmauiIconMaterialAddRowAboveW100';

export default IconMaterialAddRowAboveW100;
