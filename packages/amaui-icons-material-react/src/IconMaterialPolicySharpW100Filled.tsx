import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicySharpW100Filled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 12.575 18.275 13.925Q17.85 15.275 17.15 16.55L14.2 13.6Q14.425 13.25 14.562 12.837Q14.7 12.425 14.7 12Q14.7 10.875 13.913 10.087Q13.125 9.3 12 9.3Q10.875 9.3 10.088 10.087Q9.3 10.875 9.3 12Q9.3 13.125 10.088 13.912Q10.875 14.7 12 14.7Q12.475 14.7 12.913 14.55Q13.35 14.4 13.7 14.1L16.725 17.125Q15.725 18.275 14.6 19.237Q13.475 20.2 12 20.65ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPolicySharpW100Filled.displayName = 'AmauiIconMaterialPolicySharpW100Filled';

export default IconMaterialPolicySharpW100Filled;
