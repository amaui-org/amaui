import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibrary'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22H4q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.825.588-1.412Q3.175 6 4 6h5.975v2H4v12h16v-3.975h2V20q0 .825-.587 1.413Q20.825 22 20 22ZM4 20V8 16.025v-.675V20Zm11.45-9.45L13 9.45q-.3-.125-.3-.45t.3-.45l2.45-1.1 1.1-2.425q.125-.3.45-.3t.45.3l1.1 2.425 2.425 1.1q.3.125.3.45t-.3.45l-2.425 1.1-1.1 2.45q-.125.3-.45.3t-.45-.3Z"/>
    </Icon>
  );
});

IconMaterialSlideLibrary.displayName = 'AmauiIconMaterialSlideLibrary';

export default IconMaterialSlideLibrary;
