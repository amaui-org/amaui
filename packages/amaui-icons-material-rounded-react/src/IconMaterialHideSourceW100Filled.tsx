import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideSourceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceW100Filled'

      short_name='HideSource'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.625 20.6-1.975-1.975q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q3.325 13.8 3.325 12q0-1.625.55-3.05.55-1.425 1.525-2.575l-2-2q-.1-.1-.088-.238.013-.137.113-.237.125-.125.25-.125t.25.125L20.15 20.125q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Zm-.2-4-12-12Q8.45 3.975 9.6 3.637q1.15-.337 2.425-.337 1.8 0 3.388.687Q17 4.675 18.175 5.85t1.863 2.762q.687 1.588.687 3.388 0 1.275-.337 2.425-.338 1.15-.963 2.175Z"/>
    </Icon>
  );
});

IconMaterialHideSourceW100Filled.displayName = 'AmauiIconMaterialHideSourceW100Filled';

export default IconMaterialHideSourceW100Filled;
