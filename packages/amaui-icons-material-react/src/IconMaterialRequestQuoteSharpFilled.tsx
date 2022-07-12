import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestQuoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteSharpFilled'
      short_name='RequestQuote'

      {...props}
    >
      <path d="M4 22V2H14L20 8V22ZM11 19H13V18H15V13H11V12H15V10H13V9H11V10H9V15H13V16H9V18H11ZM13.175 8H17.175L13.175 4Z"/>
    </Icon>
  )
});

export default IconMaterialRequestQuoteSharpFilled;
