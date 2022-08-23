import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldMoonSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonSharpW100'
      short_name='ShieldMoon'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.15L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12.525 15.35Q13.175 15.35 13.8 15.137Q14.425 14.925 14.925 14.5Q15.05 14.375 15.025 14.275Q15 14.175 14.8 14.1Q13.875 13.775 13.163 13.212Q12.45 12.65 11.95 11.775Q11.6 11.125 11.363 10.05Q11.125 8.975 11.4 8.225Q11.475 8.025 11.325 7.925Q11.175 7.825 11.025 7.875Q9.9 8.35 9.262 9.35Q8.625 10.35 8.625 11.5Q8.625 13.1 9.775 14.225Q10.925 15.35 12.525 15.35Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonSharpW100.displayName = 'AmauiIconMaterialShieldMoonSharpW100';

export default IconMaterialShieldMoonSharpW100;
