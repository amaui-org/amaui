import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFlashSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashSharpW100'
      short_name='NoFlash'

      {...props}
    >
      <path d="M21.3 22.3 17.6 18.6V20.1H3.9V9.8H6.95L7.825 8.825L2.25 3.25L2.75 2.75L21.8 21.8ZM4.6 19.4H16.9V17.9L13.575 14.575Q13.6 14.675 13.6 14.762Q13.6 14.85 13.6 14.95Q13.6 16.15 12.775 16.975Q11.95 17.8 10.75 17.8Q9.55 17.8 8.725 16.975Q7.9 16.15 7.9 14.95Q7.9 13.75 8.725 12.925Q9.55 12.1 10.75 12.1Q10.85 12.1 10.938 12.1Q11.025 12.1 11.125 12.125L9.5 10.5H4.6ZM17.6 14.8 16.9 14.1V10.5H13.3L11.2 8.4H13.3L14.575 9.8H17.6ZM18.4 9.25V6.35H17.9V3.4H20.075L19.1 5.55H20.275ZM16.9 14.1ZM13.2 14.2ZM10.75 17.1Q11.65 17.1 12.275 16.462Q12.9 15.825 12.9 14.95Q12.9 14.05 12.275 13.425Q11.65 12.8 10.75 12.8Q9.875 12.8 9.238 13.425Q8.6 14.05 8.6 14.95Q8.6 15.825 9.238 16.462Q9.875 17.1 10.75 17.1Z"/>
    </Icon>
  );
});

IconMaterialNoFlashSharpW100.displayName = 'AmauiIconMaterialNoFlashSharpW100';

export default IconMaterialNoFlashSharpW100;
