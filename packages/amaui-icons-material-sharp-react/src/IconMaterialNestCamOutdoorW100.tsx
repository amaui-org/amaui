import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamOutdoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamOutdoorW100'

      short_name='NestCamOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.575 18.6q-.225 0-.462-.1-.238-.1-.438-.25l-3.575-3q-.65-.55-1.063-1.125-.412-.575-.637-1.375-.275.4-.625.575-.35.175-.675.175H3.65V7.2H5.1q.65 0 1.1.425.45.425.45 1.35Q7.15 7.9 8.363 6.9q1.212-1 3.237-1 .95 0 1.75.325t1.5.9l3.6 3q.225.2.375.5t.15.6q0 .225-.075.475-.075.25-.275.475l-4.9 5.9q-.2.275-.537.4-.338.125-.613.125ZM6.85 11.15q0 1.025.413 1.925.412.9 1.237 1.6l3.6 3q.275.2.6.188.325-.013.525-.288l4.825-5.825q.2-.275.188-.6-.013-.325-.288-.525l-3.575-3q-.625-.525-1.363-.788-.737-.262-1.537-.262-1.875 0-3.237 1.35-1.363 1.35-1.388 3.225Zm5.75 1.1Z"/>
    </Icon>
  );
});

IconMaterialNestCamOutdoorW100.displayName = 'AmauiIconMaterialNestCamOutdoorW100';

export default IconMaterialNestCamOutdoorW100;
