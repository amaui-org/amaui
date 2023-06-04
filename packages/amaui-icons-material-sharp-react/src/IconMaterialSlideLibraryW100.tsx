import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryW100'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V7.3h8.775V8H4v12h16v-5.85h.7v6.55ZM4 20V8v6.15-.525Zm13.65-8.35-.95-2.125-2.125-.95L16.7 7.65l.95-2.125.925 2.125 2.125.925-2.125.95Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100.displayName = 'AmauiIconMaterialSlideLibraryW100';

export default IconMaterialSlideLibraryW100;
