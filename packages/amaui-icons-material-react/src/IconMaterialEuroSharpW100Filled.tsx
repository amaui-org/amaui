import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEuroSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSharpW100Filled'
      short_name='Euro'

      {...props}
    >
      <path d="M15.05 19.7Q12.175 19.7 10.188 18.112Q8.2 16.525 7.45 14.1H3.95V13.4H7.325Q7.2 12.825 7.213 12.012Q7.225 11.2 7.325 10.6H3.95V9.9H7.5Q8.225 7.475 10.2 5.887Q12.175 4.3 15.05 4.3Q16.475 4.3 17.75 4.75Q19.025 5.2 20.075 6L19.575 6.475Q18.625 5.775 17.475 5.387Q16.325 5 15.05 5Q12.45 5 10.688 6.425Q8.925 7.85 8.225 9.9H14.9V10.6H8.05Q7.925 11.175 7.925 12Q7.925 12.825 8.05 13.4H14.9V14.1H8.2Q8.925 16.15 10.688 17.575Q12.45 19 15.05 19Q16.325 19 17.475 18.613Q18.625 18.225 19.575 17.525L20.075 18Q19.025 18.8 17.75 19.25Q16.475 19.7 15.05 19.7Z"/>
    </Icon>
  );
});

IconMaterialEuroSharpW100Filled.displayName = 'AmauiIconMaterialEuroSharpW100Filled';

export default IconMaterialEuroSharpW100Filled;
