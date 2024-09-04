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
      <path d="M780-159.78q-5 4.78-10 4.78t-10-5L430-490 310-283q-1.75 3.15-4.91 5.08-3.16 1.92-7.02 1.92-8.07 0-12.07-7t0-14l85-148q-9 5-21 7t-24 2q-53 0-88.5-36.42Q202-508.85 202-560q0-33 14.5-60t39.5-44l-96-96q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l600 600q4 4 4.5 9.5t-4.5 10.72ZM326-464q26 0 48-13t35-34L277-643q-21 13-34 35t-13 48q0 40 28 68t68 28Zm348 0q40 0 68-28t28-68q0-40-28-68t-68-28q-40 0-68 28t-28 68q0 40 28 68t68 28Zm-307-89Zm307-7Zm5 166L570-503q-11.58-11.76-16.79-25.88Q548-543 548-559q0-20 7-40t21-37q17-22 42.73-35 25.73-13 55.27-13 51.15 0 87.58 36.42Q798-611.15 798-560q0 16.6-4.5 32.8Q789-511 781-496l-55 95q-8 13-22 15.5t-25-8.5Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOffW100.displayName = 'AmauiIconMaterialFormatQuoteOffW100';

export default IconMaterialFormatQuoteOffW100;
