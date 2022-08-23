import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatAddOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnSharpFilled'
      short_name='ChatAddOn'

      {...props}
    >
      <path d="M3 21V6Q3 5.175 3.587 4.588Q4.175 4 5 4H17Q17.825 4 18.413 4.588Q19 5.175 19 6V11.075Q18.75 11.025 18.513 11.012Q18.275 11 18 11Q17.725 11 17.488 11.012Q17.25 11.025 17 11.075V6Q17 6 17 6Q17 6 17 6H5Q5 6 5 6Q5 6 5 6V16H12.075Q12.025 16.25 12.012 16.488Q12 16.725 12 17Q12 17.275 12.012 17.512Q12.025 17.75 12.075 18H6ZM7 10V8H15V10ZM7 14V12H12V14ZM17 21V18H14V16H17V13H19V16H22V18H19V21Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnSharpFilled.displayName = 'AmauiIconMaterialChatAddOnSharpFilled';

export default IconMaterialChatAddOnSharpFilled;
