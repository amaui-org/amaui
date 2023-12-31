import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPenW100'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m476-505 36 36 238-238-36-36-238 238ZM207-200h36l248-248-36-36-248 248v36Zm315-238-76-77 199-199-10-10q-8-8-24-8t-24 8L408-545q-4 4-9 4t-9-4q-5-4-5-9.5t4-9.5l180-180q18-18 43-18t43 18l10 10 28-28q9-9 21-9t21 9l38 38q9 9 8 19t-10 19L522-438ZM209-172q-13 0-21.5-8.5T179-202v-34q0-6 2-11t7-10l257-257 77 76-258 257q-5 5-10 7t-11 2h-34Z"/>
    </Icon>
  );
});

IconMaterialInkPenW100.displayName = 'AmauiIconMaterialInkPenW100';

export default IconMaterialInkPenW100;
