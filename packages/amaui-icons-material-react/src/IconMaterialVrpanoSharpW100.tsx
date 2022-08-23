import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVrpanoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoSharpW100'
      short_name='Vrpano'

      {...props}
    >
      <path d="M6.8 14.7Q8.05 14.575 9.325 14.512Q10.6 14.45 12 14.45Q13.4 14.45 14.675 14.512Q15.95 14.575 17.2 14.7L14 10.85L11.375 13.975L9.375 11.575ZM4 17.65Q5.95 17.075 7.963 16.788Q9.975 16.5 12 16.5Q14.025 16.5 16.038 16.788Q18.05 17.075 20 17.65V6.4Q18.05 6.975 16.038 7.237Q14.025 7.5 12 7.5Q9.975 7.5 7.963 7.237Q5.95 6.975 4 6.4ZM12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025Q12 12.025 12 12.025ZM3.3 18.55V5.5Q5.325 6.075 7.338 6.462Q9.35 6.85 12 6.85Q14.65 6.85 16.663 6.462Q18.675 6.075 20.7 5.5V18.55Q18.675 17.975 16.663 17.613Q14.65 17.25 12 17.25Q9.35 17.25 7.338 17.613Q5.325 17.975 3.3 18.55Z"/>
    </Icon>
  );
});

IconMaterialVrpanoSharpW100.displayName = 'AmauiIconMaterialVrpanoSharpW100';

export default IconMaterialVrpanoSharpW100;
