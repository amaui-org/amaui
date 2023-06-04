import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInvertColorsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOffW100'

      short_name='InvertColorsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.3 15.45 12 9.15V4.775l-2.225 2.2-.5-.5L12 3.8l4.75 4.65q1 .975 1.475 2.2.475 1.225.475 2.5 0 .575-.113 1.213-.112.637-.287 1.087Zm1.5 5.35-3.05-3.05q-1.025 1.05-2.262 1.5-1.238.45-2.488.45-2.8 0-4.75-1.875Q5.3 15.95 5.3 13.15q0-1.225.45-2.45t1.6-2.35L4.1 5.1l.5-.5 15.7 15.7ZM12 19v-6L7.85 8.85Q6.775 9.9 6.388 10.962 6 12.025 6 13.15q0 2.5 1.75 4.175Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOffW100.displayName = 'AmauiIconMaterialInvertColorsOffW100';

export default IconMaterialInvertColorsOffW100;
