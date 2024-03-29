import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectJumpToEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectJumpToEnd'

      short_name='TextSelectJumpToEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M407 616H160q-17 0-28.5-11.5T120 576q0-17 11.5-28.5T160 536h247l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L428 708q-11 11-27.5 11.5T372 708q-11-11-11-28t11-28l35-36Zm353 280V256q0-17 11.5-28.5T800 216q17 0 28.5 11.5T840 256v640q0 17-11.5 28.5T800 936q-17 0-28.5-11.5T760 896ZM600 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80Zm-80 0q-33 0-56.5-23.5T120 856h80v80Zm-80-640q0-33 23.5-56.5T200 216v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectJumpToEnd.displayName = 'AmauiIconMaterialTextSelectJumpToEnd';

export default IconMaterialTextSelectJumpToEnd;
