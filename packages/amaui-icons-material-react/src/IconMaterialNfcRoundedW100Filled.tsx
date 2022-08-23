import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNfcRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcRoundedW100Filled'
      short_name='Nfc'

      {...props}
    >
      <path d="M14.2 15.7Q14.825 15.7 15.263 15.262Q15.7 14.825 15.7 14.2V9.8Q15.7 9.175 15.263 8.737Q14.825 8.3 14.2 8.3H12.35Q12.075 8.3 11.863 8.512Q11.65 8.725 11.65 9V11.3Q11.5 11.375 11.35 11.537Q11.2 11.7 11.2 12Q11.2 12.35 11.413 12.575Q11.625 12.8 12 12.8Q12.3 12.8 12.55 12.575Q12.8 12.35 12.8 12Q12.8 11.7 12.65 11.537Q12.5 11.375 12.35 11.3V9H15V15H9V9H10V8.3H9.8Q9.175 8.3 8.738 8.737Q8.3 9.175 8.3 9.8V14.2Q8.3 14.825 8.738 15.262Q9.175 15.7 9.8 15.7ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialNfcRoundedW100Filled.displayName = 'AmauiIconMaterialNfcRoundedW100Filled';

export default IconMaterialNfcRoundedW100Filled;
