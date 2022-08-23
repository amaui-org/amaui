import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubwaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwaySharpW100Filled'
      short_name='Subway'

      {...props}
    >
      <path d="M3.3 20.7V8.85Q3.3 7.2 4.213 5.925Q5.125 4.65 6.7 4Q7.875 3.55 9.3 3.425Q10.725 3.3 12 3.3Q13.275 3.3 14.7 3.425Q16.125 3.55 17.3 4Q18.875 4.65 19.788 5.925Q20.7 7.2 20.7 8.85V20.7ZM8 20H8.65L10.15 18.3H13.85L15.35 20H16V19.5L14.9 18.25Q16.025 18.1 16.613 17.363Q17.2 16.625 17.2 15.5V9Q17.2 7.725 15.85 7.237Q14.5 6.75 12 6.75Q9.725 6.75 8.263 7.237Q6.8 7.725 6.8 9V15.5Q6.8 16.625 7.388 17.375Q7.975 18.125 9.1 18.25L8 19.5ZM7.5 13.3V9H16.5V13.3ZM14.95 16.3Q14.625 16.3 14.413 16.087Q14.2 15.875 14.2 15.55Q14.2 15.225 14.413 15.012Q14.625 14.8 14.95 14.8Q15.275 14.8 15.488 15.012Q15.7 15.225 15.7 15.55Q15.7 15.875 15.488 16.087Q15.275 16.3 14.95 16.3ZM9.05 16.3Q8.725 16.3 8.512 16.087Q8.3 15.875 8.3 15.55Q8.3 15.225 8.512 15.012Q8.725 14.8 9.05 14.8Q9.375 14.8 9.588 15.012Q9.8 15.225 9.8 15.55Q9.8 15.875 9.588 16.087Q9.375 16.3 9.05 16.3Z"/>
    </Icon>
  );
});

IconMaterialSubwaySharpW100Filled.displayName = 'AmauiIconMaterialSubwaySharpW100Filled';

export default IconMaterialSubwaySharpW100Filled;
