import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOffFilled'

      short_name='FormatQuoteOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-56 425-422 320-240h-92l92-160q-66 0-113-47t-47-113q0-27 8.5-51t23.5-44L56-791l56-57 736 736-57 56Zm-55-281L520-553v-7q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480l-82 143Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteOffFilled.displayName = 'AmauiIconMaterialFormatQuoteOffFilled';

export default IconMaterialFormatQuoteOffFilled;
