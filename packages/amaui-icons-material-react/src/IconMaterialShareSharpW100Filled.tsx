import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShareSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareSharpW100Filled'
      short_name='Share'

      {...props}
    >
      <path d="M18 21.35Q17.025 21.35 16.338 20.663Q15.65 19.975 15.65 19Q15.65 18.8 15.688 18.575Q15.725 18.35 15.8 18.15L7.85 13.45Q7.5 13.875 7.025 14.113Q6.55 14.35 6 14.35Q5.025 14.35 4.338 13.662Q3.65 12.975 3.65 12Q3.65 11.025 4.338 10.337Q5.025 9.65 6 9.65Q6.55 9.65 7.025 9.887Q7.5 10.125 7.85 10.55L15.8 5.85Q15.725 5.65 15.688 5.425Q15.65 5.2 15.65 5Q15.65 4.025 16.338 3.337Q17.025 2.65 18 2.65Q18.975 2.65 19.663 3.337Q20.35 4.025 20.35 5Q20.35 5.975 19.663 6.662Q18.975 7.35 18 7.35Q17.45 7.35 16.975 7.112Q16.5 6.875 16.15 6.45L8.2 11.15Q8.275 11.35 8.312 11.575Q8.35 11.8 8.35 12Q8.35 12.2 8.312 12.425Q8.275 12.65 8.2 12.85L16.15 17.55Q16.5 17.125 16.975 16.887Q17.45 16.65 18 16.65Q18.975 16.65 19.663 17.337Q20.35 18.025 20.35 19Q20.35 19.975 19.663 20.663Q18.975 21.35 18 21.35Z"/>
    </Icon>
  );
});

IconMaterialShareSharpW100Filled.displayName = 'AmauiIconMaterialShareSharpW100Filled';

export default IconMaterialShareSharpW100Filled;
