import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackHandSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandSharpW100'
      short_name='BackHand'

      {...props}
    >
      <path d="M13 22.1Q10.65 22.1 8.875 20.837Q7.1 19.575 6.225 16.875L4.35 11.05L7.15 10.075L8.7 13.975V4.1H11.2V1.8H13.9V2.7H16.5V5.45H19.1V16Q19.1 19.075 17.587 20.587Q16.075 22.1 13 22.1ZM13 21.4Q15.75 21.4 17.075 20.075Q18.4 18.75 18.4 16V6.15H17.2V12H15.8V3.4H14.6V12H13.2V2.5H12V12H10.6V4.8H9.4V15.35H8.5L6.75 10.95L5.225 11.5L6.9 16.65Q7.7 19.15 9.263 20.275Q10.825 21.4 13 21.4Z"/>
    </Icon>
  );
});

IconMaterialBackHandSharpW100.displayName = 'AmauiIconMaterialBackHandSharpW100';

export default IconMaterialBackHandSharpW100;
