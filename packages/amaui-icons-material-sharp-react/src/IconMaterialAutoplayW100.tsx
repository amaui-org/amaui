import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoplayW100'

      short_name='Autoplay'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M406 708V444l206 132-206 132Zm74 256q-119 0-213-63T120 723v161H92V676h207v28H143q45 107 135 169.5T480 936q120 0 215-72.5T824 676l28 5q-35 127-138 205t-234 78ZM94 536q8-61 27-107t57-97l21 19q-32 42-49 83t-28 102H94Zm161-240-19-21q47-36 98.5-57T440 192v28q-48 5-95.5 24.5T255 296Zm448 0q-35-30-86.5-51T520 220v-28q54 5 105.5 26.5T723 276l-20 20Zm133 240q-7-57-26.5-102.5T758 352l20-20q37 44 58.5 95.5T864 536h-28Z"/>
    </Icon>
  );
});

IconMaterialAutoplayW100.displayName = 'AmauiIconMaterialAutoplayW100';

export default IconMaterialAutoplayW100;
