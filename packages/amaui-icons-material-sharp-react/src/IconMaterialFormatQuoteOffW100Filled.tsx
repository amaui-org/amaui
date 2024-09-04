import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOffW100Filled'

      short_name='FormatQuoteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M770-150 430-490 306-276h-32l97-169q-9 5-21 7t-24 2q-53 0-88.5-36.5T202-560q0-33 14.5-60t39.5-44L150-770l20-20 620 620-20 20Zm-64-217L558-515q-4-11-6-22t-2-23q0-54 35.5-89t88.5-35q51 0 87.5 35.5T798-560q0 18-4.5 34T781-496l-75 129Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOffW100Filled.displayName = 'AmauiIconMaterialFormatQuoteOffW100Filled';

export default IconMaterialFormatQuoteOffW100Filled;
