import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextWrapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrapW100Filled'

      short_name='FormatTextWrap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.35q-.15 0-.25-.1T5.3 19V5q0-.15.1-.25t.25-.1q.15 0 .25.1T6 5v14q0 .15-.1.25t-.25.1Zm12.7 0q-.15 0-.25-.1T18 19V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14q0 .15-.1.25t-.25.1Zm-7.65-2.975-1.85-1.85Q8.625 14.3 8.625 14q0-.3.225-.525l1.85-1.85q.1-.1.238-.1.137 0 .237.1.1.1.1.25t-.1.25L9.65 13.65h3q1.125 0 1.888-.763.762-.762.762-1.887t-.762-1.887q-.763-.763-1.888-.763h-4.3q-.15 0-.25-.1T8 8q0-.15.1-.25t.25-.1h4.3q1.4 0 2.375.975Q16 9.6 16 11t-.975 2.375q-.975.975-2.375.975h-3l1.55 1.525q.1.1.088.238-.013.137-.113.237-.1.125-.237.125-.138 0-.238-.1Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrapW100Filled.displayName = 'AmauiIconMaterialFormatTextWrapW100Filled';

export default IconMaterialFormatTextWrapW100Filled;
