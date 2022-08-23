import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnSharpW100'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M7 16.7Q5.05 16.7 3.675 15.325Q2.3 13.95 2.3 12Q2.3 10.05 3.675 8.675Q5.05 7.3 7 7.3H17Q18.95 7.3 20.325 8.675Q21.7 10.05 21.7 12Q21.7 13.95 20.325 15.325Q18.95 16.7 17 16.7ZM17 16Q18.65 16 19.825 14.825Q21 13.65 21 12Q21 10.35 19.825 9.175Q18.65 8 17 8H7Q5.35 8 4.175 9.175Q3 10.35 3 12Q3 13.65 4.175 14.825Q5.35 16 7 16ZM17 14.35Q17.975 14.35 18.663 13.662Q19.35 12.975 19.35 12Q19.35 11.025 18.663 10.337Q17.975 9.65 17 9.65Q16.025 9.65 15.338 10.337Q14.65 11.025 14.65 12Q14.65 12.975 15.338 13.662Q16.025 14.35 17 14.35ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialToggleOnSharpW100.displayName = 'AmauiIconMaterialToggleOnSharpW100';

export default IconMaterialToggleOnSharpW100;
