import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastRoundedW100Filled'
      short_name='Cast'

      {...props}
    >
      <path d="M12.3 18.7Q12.3 16.825 11.588 15.188Q10.875 13.55 9.663 12.337Q8.45 11.125 6.813 10.412Q5.175 9.7 3.3 9.7V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM10.075 18.7Q9.5 18.7 9.05 18.288Q8.6 17.875 8.4 17.225Q8.025 15.9 7.062 14.938Q6.1 13.975 4.775 13.6Q4.125 13.4 3.713 12.925Q3.3 12.45 3.3 11.875Q3.3 11.225 3.75 10.812Q4.2 10.4 4.775 10.525Q7.35 11 9.175 12.825Q11 14.65 11.475 17.225Q11.6 17.8 11.163 18.25Q10.725 18.7 10.075 18.7ZM6 18.7Q5.7 18.7 5.325 18.425Q4.95 18.15 4.5 17.65Q4.45 17.6 4.425 17.575Q4.4 17.55 4.35 17.5Q3.85 17.05 3.575 16.663Q3.3 16.275 3.3 15.95Q3.3 15.125 3.888 14.675Q4.475 14.225 5.125 14.5Q5.925 14.85 6.55 15.462Q7.175 16.075 7.525 16.875Q7.8 17.525 7.325 18.112Q6.85 18.7 6 18.7Z"/>
    </Icon>
  );
});

IconMaterialCastRoundedW100Filled.displayName = 'AmauiIconMaterialCastRoundedW100Filled';

export default IconMaterialCastRoundedW100Filled;
