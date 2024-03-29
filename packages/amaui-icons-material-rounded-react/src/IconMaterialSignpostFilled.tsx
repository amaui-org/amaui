import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpostFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostFilled'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-3H6.625q-.3 0-.588-.125-.287-.125-.487-.325l-1.5-1.5q-.225-.225-.325-.5t-.1-.55q0-.275.1-.55t.325-.5l1.5-1.5q.2-.2.487-.325.288-.125.588-.125H11v-2H5.5q-.625 0-1.062-.438Q4 9.125 4 8.5v-3q0-.625.438-1.062Q4.875 4 5.5 4H11V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v1h4.375q.3 0 .587.125.288.125.488.325l1.5 1.5q.225.225.325.5t.1.55q0 .275-.1.55t-.325.5l-1.5 1.5q-.2.2-.488.325-.287.125-.587.125H13v2h5.5q.625 0 1.062.438.438.437.438 1.062v3q0 .625-.438 1.062Q19.125 18 18.5 18H13v3q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSignpostFilled.displayName = 'AmauiIconMaterialSignpostFilled';

export default IconMaterialSignpostFilled;
