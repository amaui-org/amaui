import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryFilled'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.825.588-1.412Q3.175 6 4 6h6.65q-.35.725-.512 1.475-.163.75-.163 1.55 0 2.925 2.038 4.962 2.037 2.038 4.962 2.038 1.425 0 2.725-.538 1.3-.537 2.3-1.562V20q0 .825-.587 1.413Q20.825 22 20 22Zm11.45-11.45L13 9.45q-.3-.125-.3-.45t.3-.45l2.45-1.1 1.1-2.425q.125-.3.45-.3t.45.3l1.1 2.425 2.425 1.1q.3.125.3.45t-.3.45l-2.425 1.1-1.1 2.45q-.125.3-.45.3t-.45-.3Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryFilled.displayName = 'AmauiIconMaterialSlideLibraryFilled';

export default IconMaterialSlideLibraryFilled;
