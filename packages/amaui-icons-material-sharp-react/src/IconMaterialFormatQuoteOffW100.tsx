import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOffW100'

      short_name='FormatQuoteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M770-150 430-490 306-276h-32l97-169q-9 5-21 7t-24 2q-53 0-88.5-36.42Q202-508.85 202-560q0-33 14.5-60t39.5-44L150-770l20-20 620 620-20 20Zm-64-217L558-515q-4-11-6-22t-2-23q0-54 35.5-89t88.5-35q51.15 0 87.58 35.5Q798-613 798-560.35q0 18.35-4.5 34.35T781-496l-75 129Zm-380-97q26 0 48-13t35-34L277-643q-21 13-34 35t-13 48q0 40 28 68t68 28Zm348 0q40 0 68-28t28-68q0-40-28-68t-68-28q-40 0-68 28t-28 68q0 40 28 68t68 28Zm-307-89Zm307-7Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOffW100.displayName = 'AmauiIconMaterialFormatQuoteOffW100';

export default IconMaterialFormatQuoteOffW100;
