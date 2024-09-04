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
      <path d="M780-160q-5 5-10 5t-10-5L430-490 310-283q-2 3-5 5t-7 2q-8 0-12-7t0-14l85-148q-9 5-21 7t-24 2q-53 0-88.5-36.5T202-560q0-33 14.5-60t39.5-44l-96-96q-4-4-4.5-9.5T160-780q5-5 10-5t10 5l600 600q4 4 4.5 9.5T780-160ZM679-394 570-503q-12-12-17-26t-5-30q0-20 7-40t21-37q17-22 42.5-35t55.5-13q51 0 87.5 36.5T798-560q0 17-4.5 33T781-496l-55 95q-8 13-22 15.5t-25-8.5Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOffW100Filled.displayName = 'AmauiIconMaterialFormatQuoteOffW100Filled';

export default IconMaterialFormatQuoteOffW100Filled;
