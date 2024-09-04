import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowBelowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelowW100'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-531h560v-269H200v269Zm-28 319v-616h616v616H674v-28h86v-263H200v263h86v28H172Zm308-291Zm0-28v28-28Zm0 0Zm-14 399v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelowW100.displayName = 'AmauiIconMaterialAddRowBelowW100';

export default IconMaterialAddRowBelowW100;
