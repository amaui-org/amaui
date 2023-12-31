import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPenW100Filled'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-458-76-77 179-179-10-10q-8-8-24-8t-24 8L408-545q-4 4-9 4t-9-4q-5-4-5-9.5t4-9.5l180-180q18-18 43-18t43 18l10 10 28-28q9-9 21-9t21 9l38 38q9 9 8 19t-10 19L542-458ZM209-172q-13 0-21.5-8.5T179-202v-34q0-6 2-11t7-10l257-257 77 76-258 257q-5 5-10 7t-11 2h-34Z"/>
    </Icon>
  );
});

IconMaterialInkPenW100Filled.displayName = 'AmauiIconMaterialInkPenW100Filled';

export default IconMaterialInkPenW100Filled;
