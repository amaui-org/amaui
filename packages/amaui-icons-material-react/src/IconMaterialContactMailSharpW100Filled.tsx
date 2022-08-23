import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailSharpW100Filled'
      short_name='ContactMail'

      {...props}
    >
      <path d="M1.3 19.2V4.8H22.7V19.2ZM9 14.3Q9.975 14.3 10.663 13.612Q11.35 12.925 11.35 11.95Q11.35 10.975 10.663 10.287Q9.975 9.6 9 9.6Q8.025 9.6 7.338 10.287Q6.65 10.975 6.65 11.95Q6.65 12.925 7.338 13.612Q8.025 14.3 9 14.3ZM14.25 11.25H20.75V6.75H14.25ZM17.5 10.2 15.05 8.45V7.6L17.5 9.3L19.95 7.6V8.45ZM3.55 18.5H14.45Q13.4 17.3 12 16.55Q10.6 15.8 9 15.8Q7.4 15.8 6 16.55Q4.6 17.3 3.55 18.5Z"/>
    </Icon>
  );
});

IconMaterialContactMailSharpW100Filled.displayName = 'AmauiIconMaterialContactMailSharpW100Filled';

export default IconMaterialContactMailSharpW100Filled;
