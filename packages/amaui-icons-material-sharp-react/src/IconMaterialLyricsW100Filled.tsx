import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLyricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsW100Filled'

      short_name='Lyrics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 18.85V4.8q0-.625.438-1.063Q4.925 3.3 5.55 3.3h9.4q.625 0 1.062.437.438.438.438 1.063V5q-1.125.575-1.787 1.65Q14 7.725 14 9q0 1.275.663 2.35.662 1.075 1.787 1.65v2.2q0 .625-.438 1.062-.437.438-1.062.438H6.2Zm3.35-5.5h2.7v-.7H7.4Zm11.1-2q-.975 0-1.662-.688Q16.15 9.975 16.15 9q0-.975.688-1.663.687-.687 1.662-.687.55 0 .913.162.362.163.737.563V1.65h2.7v.7h-2V9q0 .975-.687 1.662-.688.688-1.663.688Zm-11.1-1h5.7v-.7H7.4Zm0-3h5.7v-.7H7.4Z"/>
    </Icon>
  );
});

IconMaterialLyricsW100Filled.displayName = 'AmauiIconMaterialLyricsW100Filled';

export default IconMaterialLyricsW100Filled;
