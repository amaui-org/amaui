import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatQuoteOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOutlinedFilled'
      short_name='FormatQuote'

      {...props}
    >
      <path d="M15 11H18V8H15ZM6 11H9V8H6ZM15 17 17 13H13V6H20V13L18 17ZM6 17 8 13H4V6H11V13L9 17ZM6 11V8H9V11ZM15 11V8H18V11Z"/>
    </Icon>
  )
});

export default IconMaterialFormatQuoteOutlinedFilled;
