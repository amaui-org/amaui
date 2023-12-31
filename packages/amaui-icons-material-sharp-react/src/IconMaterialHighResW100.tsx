import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighResW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighResW100'

      short_name='HighRes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-236h128v-28H444v-62h80v-28h-80v-62h100v-28H416v208Zm190 0h148v-118H634v-62h120v-28H606v118h120v62H606v28ZM336-516h28v-90h92v90h28v-208h-28v90h-92v-90h-28v208Zm220 0h28v-208h-28v208ZM104-172v-616h752v616H104Zm28-28h696v-560H132v560Zm0 0v-560 560Zm74-36h28v-80h45l36 80h31l-37-80q19 0 32-13t13-32v-38q0-18.75-13.125-31.875T309-444H206v208Zm28-108v-72h75q7 0 12 5t5 12v38q0 7-5 12t-12 5h-75Z"/>
    </Icon>
  );
});

IconMaterialHighResW100.displayName = 'AmauiIconMaterialHighResW100';

export default IconMaterialHighResW100;
