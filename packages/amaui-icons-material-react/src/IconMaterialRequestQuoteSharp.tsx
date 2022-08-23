import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestQuoteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteSharp'
      short_name='RequestQuote'

      {...props}
    >
      <path d="M4 22V2H14L20 8V22ZM6 8V4V20V8ZM11 19V18H9V16H13V15H9V10H11V9H13V10H15V12H11V13H15V18H13V19ZM13 8V4H6V20H18V8Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteSharp.displayName = 'AmauiIconMaterialRequestQuoteSharp';

export default IconMaterialRequestQuoteSharp;
