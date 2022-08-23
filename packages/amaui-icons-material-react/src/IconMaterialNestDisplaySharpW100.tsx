import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestDisplaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplaySharpW100'
      short_name='NestDisplay'

      {...props}
    >
      <path d="M12 18.35Q9.175 18.35 7.913 18.038Q6.65 17.725 6.65 17.35V16.35H4.325Q3.675 16.35 3.225 15.863Q2.775 15.375 2.825 14.725L3.475 7.025Q3.525 6.45 3.963 6.05Q4.4 5.65 4.975 5.65H19.025Q19.6 5.65 20.038 6.05Q20.475 6.45 20.525 7.025L21.175 14.725Q21.225 15.375 20.775 15.863Q20.325 16.35 19.675 16.35H17.35V17.35Q17.35 17.725 16.088 18.038Q14.825 18.35 12 18.35ZM4.35 15.65H19.65Q20 15.65 20.25 15.387Q20.5 15.125 20.45 14.775L19.8 7.075Q19.775 6.75 19.55 6.55Q19.325 6.35 19 6.35H5Q4.675 6.35 4.45 6.55Q4.225 6.75 4.2 7.075L3.55 14.775Q3.5 15.125 3.75 15.387Q4 15.65 4.35 15.65Z"/>
    </Icon>
  );
});

IconMaterialNestDisplaySharpW100.displayName = 'AmauiIconMaterialNestDisplaySharpW100';

export default IconMaterialNestDisplaySharpW100;
