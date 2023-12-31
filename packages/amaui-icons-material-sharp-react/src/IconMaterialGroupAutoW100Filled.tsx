import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupAutoW100Filled'

      short_name='GroupAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-50q0-23 12-39.5t33-27.5q45-22 87-35t108-13q66 0 109.5 13t88.5 35q22 11 34 27.5t12 39.5v50H132Zm564 0v-50q0-29-11-56t-30-45q22 5 43.5 14t42.5 20q21 11 34 28.5t13 38.5v50h-92ZM377.889-389Q336-389 307-418q-29-29-29-70.889 0-41.889 29-71.5Q336-590 377.889-590q41.889 0 71.5 29.611Q479-530.778 479-488.889 479-447 449.389-418q-29.611 29-71.5 29ZM627-488.889Q627-447 597.421-418 567.843-389 526-389h-3q17-21 26.5-46.651 9.5-25.65 9.5-53.5 0-27.849-9.5-53.349Q540-568 523-590h3q41.843 0 71.421 29.611Q627-530.778 627-488.889ZM713-558q0-64.583-45.208-109.792Q622.583-713 558-713q64.583 0 109.792-45.208Q713-803.417 713-868q0 64.583 45.208 109.792Q803.417-713 868-713q-64.583 0-109.792 45.208Q713-622.583 713-558Z"/>
    </Icon>
  );
});

IconMaterialGroupAutoW100Filled.displayName = 'AmauiIconMaterialGroupAutoW100Filled';

export default IconMaterialGroupAutoW100Filled;
