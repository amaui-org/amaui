import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCottageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageFilled'

      short_name='Cottage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-9.375L2.2 13 1 11.4l3-2.3V6h2v1.575L12 3l11 8.4-1.2 1.575-1.8-1.35V21h-7v-6h-2v6ZM4 5q0-1.25.875-2.125T7 2q.425 0 .713-.288Q8 1.425 8 1h2q0 1.25-.875 2.125T7 4q-.425 0-.713.287Q6 4.575 6 5Z"/>
    </Icon>
  );
});

IconMaterialCottageFilled.displayName = 'AmauiIconMaterialCottageFilled';

export default IconMaterialCottageFilled;
