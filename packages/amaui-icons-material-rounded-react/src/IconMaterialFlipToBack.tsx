import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBack'

      short_name='FlipToBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9V7h2v2Zm0 4v-2h2v2Zm0-8q0-.825.588-1.413Q8.175 3 9 3v2Zm4 12v-2h2v2Zm8-12V3q.825 0 1.413.587Q21 4.175 21 5Zm-8 0V3h2v2ZM9 17q-.825 0-1.412-.587Q7 15.825 7 15h2Zm10-4v-2h2v2Zm0-4V7h2v2Zm0 8v-2h2q0 .825-.587 1.413Q19.825 17 19 17ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v11h11q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 21 16 21ZM15 5V3h2v2Zm0 12v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlipToBack.displayName = 'AmauiIconMaterialFlipToBack';

export default IconMaterialFlipToBack;
