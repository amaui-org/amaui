import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFlashSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashSharpW100Filled'
      short_name='NoFlash'

      {...props}
    >
      <path d="M21.3 22.3 17.6 18.6V20.1H3.9V9.8H6.95L7.825 8.825L2.25 3.25L2.75 2.75L21.8 21.8ZM11.125 12.125Q11.025 12.1 10.938 12.1Q10.85 12.1 10.75 12.1Q9.55 12.1 8.725 12.925Q7.9 13.75 7.9 14.95Q7.9 16.15 8.725 16.975Q9.55 17.8 10.75 17.8Q11.95 17.8 12.775 16.975Q13.6 16.15 13.6 14.95Q13.6 14.85 13.6 14.762Q13.6 14.675 13.575 14.575ZM10.75 17.1Q9.875 17.1 9.238 16.462Q8.6 15.825 8.6 14.95Q8.6 14.05 9.238 13.425Q9.875 12.8 10.75 12.8Q11.65 12.8 12.275 13.425Q12.9 14.05 12.9 14.95Q12.9 15.825 12.275 16.462Q11.65 17.1 10.75 17.1ZM17.6 14.8 11.2 8.4H13.3L14.575 9.8H17.6ZM18.4 9.25V6.35H17.9V3.4H20.075L19.1 5.55H20.275Z"/>
    </Icon>
  );
});

IconMaterialNoFlashSharpW100Filled.displayName = 'AmauiIconMaterialNoFlashSharpW100Filled';

export default IconMaterialNoFlashSharpW100Filled;
