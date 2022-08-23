import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatClearRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearRounded'
      short_name='FormatClear'

      {...props}
    >
      <path d="M13.2 10.35 10.875 8.025 7.85 5H18.5Q19.125 5 19.562 5.438Q20 5.875 20 6.5Q20 7.125 19.562 7.562Q19.125 8 18.5 8H14.2ZM19.1 21.9 11.5 14.3 9.9 18.075Q9.725 18.5 9.338 18.75Q8.95 19 8.5 19Q7.7 19 7.25 18.325Q6.8 17.65 7.125 16.9L9.2 12L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9Z"/>
    </Icon>
  );
});

IconMaterialFormatClearRounded.displayName = 'AmauiIconMaterialFormatClearRounded';

export default IconMaterialFormatClearRounded;
