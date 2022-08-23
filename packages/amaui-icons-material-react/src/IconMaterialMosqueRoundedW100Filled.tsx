import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMosqueRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueRoundedW100Filled'
      short_name='Mosque'

      {...props}
    >
      <path d="M8.5 8.95Q7.725 8.95 7.188 8.412Q6.65 7.875 6.65 7.1Q6.65 6.275 7.05 5.562Q7.45 4.85 8.125 4.4L12 1.775L15.875 4.4Q16.55 4.85 16.95 5.562Q17.35 6.275 17.35 7.1Q17.35 7.875 16.812 8.412Q16.275 8.95 15.5 8.95ZM1.65 20.35V8.35Q1.2 8.15 0.925 7.8Q0.65 7.45 0.65 7Q0.65 6.6 0.975 6.087Q1.3 5.575 2 4.925Q2.7 5.575 3.025 6.087Q3.35 6.6 3.35 7Q3.35 7.45 3.075 7.8Q2.8 8.15 2.35 8.35V13.65H5.65V11Q5.65 10.425 6.038 10.037Q6.425 9.65 7 9.65H17Q17.575 9.65 17.962 10.037Q18.35 10.425 18.35 11V13.65H21.65V8.35Q21.2 8.15 20.925 7.8Q20.65 7.45 20.65 7Q20.65 6.6 20.975 6.087Q21.3 5.575 22 4.925Q22.7 5.575 23.025 6.087Q23.35 6.6 23.35 7Q23.35 7.45 23.075 7.8Q22.8 8.15 22.35 8.35V20.35H13.65V17Q13.65 16.325 13.163 15.837Q12.675 15.35 12 15.35Q11.325 15.35 10.838 15.837Q10.35 16.325 10.35 17V20.35Z"/>
    </Icon>
  );
});

IconMaterialMosqueRoundedW100Filled.displayName = 'AmauiIconMaterialMosqueRoundedW100Filled';

export default IconMaterialMosqueRoundedW100Filled;
