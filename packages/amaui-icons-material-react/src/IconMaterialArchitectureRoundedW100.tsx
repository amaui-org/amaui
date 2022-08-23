import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchitectureRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureRoundedW100'
      short_name='Architecture'

      {...props}
    >
      <path d="M10.25 12.3 7.825 19Q7.8 19.05 7.7 19.15L7.525 19.3Q7.425 19.375 7.338 19.337Q7.25 19.3 7.225 19.225L7.15 19Q7.125 18.95 7.175 18.8L9.65 12Q9.8 12.125 9.95 12.188Q10.1 12.25 10.25 12.3ZM13.75 12.3Q13.9 12.25 14.05 12.188Q14.2 12.125 14.325 12L16.8 18.8Q16.8 18.8 16.825 19L16.75 19.225Q16.725 19.3 16.638 19.337Q16.55 19.375 16.45 19.3L16.275 19.15Q16.275 19.15 16.15 19ZM12 10.35Q11.025 10.35 10.338 9.662Q9.65 8.975 9.65 8Q9.65 7.025 10.275 6.4Q10.9 5.775 11.65 5.7V3.35Q11.65 3.2 11.75 3.1Q11.85 3 12 3Q12.15 3 12.25 3.1Q12.35 3.2 12.35 3.35V5.7Q13.1 5.775 13.725 6.4Q14.35 7.025 14.35 8Q14.35 8.975 13.663 9.662Q12.975 10.35 12 10.35ZM12 9.65Q12.675 9.65 13.163 9.162Q13.65 8.675 13.65 8Q13.65 7.325 13.163 6.837Q12.675 6.35 12 6.35Q11.325 6.35 10.838 6.837Q10.35 7.325 10.35 8Q10.35 8.675 10.838 9.162Q11.325 9.65 12 9.65Z"/>
    </Icon>
  );
});

IconMaterialArchitectureRoundedW100.displayName = 'AmauiIconMaterialArchitectureRoundedW100';

export default IconMaterialArchitectureRoundedW100;
