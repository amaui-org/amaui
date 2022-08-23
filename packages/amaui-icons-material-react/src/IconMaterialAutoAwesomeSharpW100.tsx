import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeSharpW100'
      short_name='AutoAwesome'

      {...props}
    >
      <path d="M17.7 7.95 16.95 6.25 15.25 5.5 16.95 4.75 17.7 3.05 18.45 4.75 20.15 5.5 18.45 6.25ZM17.7 20.95 16.95 19.25 15.25 18.5 16.95 17.75 17.7 16.05 18.45 17.75 20.15 18.5 18.45 19.25ZM8.7 16.85 7.2 13.5 3.85 12 7.2 10.5 8.7 7.15 10.2 10.5 13.55 12 10.2 13.5ZM8.7 15.15 9.7 13 11.85 12 9.7 11 8.7 8.85 7.7 11 5.55 12 7.7 13ZM8.7 12Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeSharpW100.displayName = 'AmauiIconMaterialAutoAwesomeSharpW100';

export default IconMaterialAutoAwesomeSharpW100;
