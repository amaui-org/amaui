import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryFilled'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-140-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-176 20q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q11 0 20.5-.5T520-203v81q-10 1-19.5 1.5t-20.5.5ZM120-560v-240h80v94q51-64 124.5-99T480-840q150 0 255 105t105 255h-80q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120Zm414 190-94-94v-216h80v184l56 56-42 70Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryFilled.displayName = 'AmauiIconMaterialDeleteHistoryFilled';

export default IconMaterialDeleteHistoryFilled;
