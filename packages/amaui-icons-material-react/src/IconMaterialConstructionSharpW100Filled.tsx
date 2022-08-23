import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConstructionSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionSharpW100Filled'
      short_name='Construction'

      {...props}
    >
      <path d="M17.8 19.625 12.725 14.55 13.475 13.8 18.55 18.875ZM4.875 19.625 4.125 18.875 10.6 12.4 7.875 9.675 7.375 10.175 6.525 9.3V11.025L6.025 11.525L3.525 9.025L4.025 8.525H5.75L4.875 7.675L6.625 5.925Q6.925 5.625 7.288 5.475Q7.65 5.325 8.075 5.325Q8.5 5.325 8.863 5.475Q9.225 5.625 9.525 5.925L8.075 7.375L9.125 8.425L8.625 8.925L11.35 11.65L14.275 8.725Q14 8.375 13.9 8.012Q13.8 7.65 13.8 7.2Q13.8 6.05 14.6 5.25Q15.4 4.45 16.55 4.45Q16.775 4.45 16.988 4.475Q17.2 4.5 17.4 4.6L15.45 6.55L17.2 8.3L19.15 6.35Q19.25 6.55 19.275 6.762Q19.3 6.975 19.3 7.2Q19.3 8.35 18.5 9.15Q17.7 9.95 16.55 9.95Q16.1 9.95 15.738 9.85Q15.375 9.75 15.025 9.475Z"/>
    </Icon>
  );
});

IconMaterialConstructionSharpW100Filled.displayName = 'AmauiIconMaterialConstructionSharpW100Filled';

export default IconMaterialConstructionSharpW100Filled;
