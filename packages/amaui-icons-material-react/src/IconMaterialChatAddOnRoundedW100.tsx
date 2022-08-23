import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatAddOnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnRoundedW100'
      short_name='ChatAddOn'

      {...props}
    >
      <path d="M3.65 19.425V6.15Q3.65 5.5 4.075 5.075Q4.5 4.65 5.15 4.65H16.85Q17.5 4.65 17.925 5.075Q18.35 5.5 18.35 6.15V11Q18.275 11 18.188 11Q18.1 11 18 11Q17.9 11 17.825 11Q17.75 11 17.65 11V6.15Q17.65 5.85 17.4 5.6Q17.15 5.35 16.85 5.35H5.15Q4.85 5.35 4.6 5.6Q4.35 5.85 4.35 6.15V16.65H12Q12 16.725 12 16.812Q12 16.9 12 17Q12 17.1 12 17.175Q12 17.25 12 17.35H5.725ZM7.15 9.35V8.65H14.85V9.35ZM7.15 13.35V12.65H11.85V13.35ZM17.65 20.35V17.35H14.65V16.65H17.65V13.65H18.35V16.65H21.35V17.35H18.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnRoundedW100.displayName = 'AmauiIconMaterialChatAddOnRoundedW100';

export default IconMaterialChatAddOnRoundedW100;
