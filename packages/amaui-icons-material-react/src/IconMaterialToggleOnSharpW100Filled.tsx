import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnSharpW100Filled'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M7 16.7Q5.05 16.7 3.675 15.325Q2.3 13.95 2.3 12Q2.3 10.05 3.675 8.675Q5.05 7.3 7 7.3H17Q18.95 7.3 20.325 8.675Q21.7 10.05 21.7 12Q21.7 13.95 20.325 15.325Q18.95 16.7 17 16.7ZM17 14.35Q17.975 14.35 18.663 13.662Q19.35 12.975 19.35 12Q19.35 11.025 18.663 10.337Q17.975 9.65 17 9.65Q16.025 9.65 15.338 10.337Q14.65 11.025 14.65 12Q14.65 12.975 15.338 13.662Q16.025 14.35 17 14.35Z"/>
    </Icon>
  );
});

IconMaterialToggleOnSharpW100Filled.displayName = 'AmauiIconMaterialToggleOnSharpW100Filled';

export default IconMaterialToggleOnSharpW100Filled;
