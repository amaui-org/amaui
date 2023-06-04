import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextWrapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrapW100'

      short_name='FormatTextWrap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.35V4.65H6v14.7Zm12.7 0V4.65h.7v14.7Zm-7.05-2.725L8.325 14l2.625-2.6.475.475L9.65 13.65h3q1.125 0 1.888-.763.762-.762.762-1.887t-.762-1.887q-.763-.763-1.888-.763H8v-.7h4.65q1.4 0 2.375.975Q16 9.6 16 11t-.975 2.375q-.975.975-2.375.975h-3l1.775 1.775Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrapW100.displayName = 'AmauiIconMaterialFormatTextWrapW100';

export default IconMaterialFormatTextWrapW100;
