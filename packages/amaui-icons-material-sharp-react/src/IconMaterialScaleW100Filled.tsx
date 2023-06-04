import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScaleW100Filled'

      short_name='Scale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7q.1-1.65.588-2.938.487-1.287 1.312-2.25.825-.962 1.95-1.574 1.125-.613 2.5-.888V9.075q-3.25-.35-4.637-1.7Q4.625 6.025 4.35 4.3h15.3q-.3 1.725-1.675 3.075t-4.625 1.7v2.975q1.375.275 2.5.888 1.125.612 1.95 1.574.825.963 1.313 2.25.487 1.288.587 2.938h-4.35V19H19q-.525-3.4-2.512-4.875Q14.5 12.65 12 12.65q-2.5 0-4.487 1.475Q5.525 15.6 5 19h3.65v.7Zm7.7 0q-.575 0-.962-.388-.388-.387-.388-.962 0-.275.1-.513.1-.237.3-.412.35-.35 1.538-.913 1.187-.562 2.237-.987-.425.95-.987 2.187-.563 1.238-.913 1.588-.175.2-.413.3-.237.1-.512.1Z"/>
    </Icon>
  );
});

IconMaterialScaleW100Filled.displayName = 'AmauiIconMaterialScaleW100Filled';

export default IconMaterialScaleW100Filled;
