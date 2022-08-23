import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlareSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlareSharpW100Filled'
      short_name='Flare'

      {...props}
    >
      <path d="M2.6 12.35V11.65H7.3V12.35ZM8.4 8.9 6.7 7.2 7.2 6.7 8.9 8.4ZM11.65 7.3V2.6H12.35V7.3ZM15.6 8.9 15.1 8.4 16.8 6.7 17.3 7.2ZM16.7 12.35V11.65H21.4V12.35ZM12 13.7Q11.275 13.7 10.788 13.212Q10.3 12.725 10.3 12Q10.3 11.275 10.788 10.787Q11.275 10.3 12 10.3Q12.725 10.3 13.213 10.787Q13.7 11.275 13.7 12Q13.7 12.725 13.213 13.212Q12.725 13.7 12 13.7ZM16.8 17.3 15.1 15.6 15.6 15.1 17.3 16.8ZM7.2 17.3 6.7 16.8 8.4 15.1 8.9 15.6ZM11.65 21.4V16.7H12.35V21.4Z"/>
    </Icon>
  );
});

IconMaterialFlareSharpW100Filled.displayName = 'AmauiIconMaterialFlareSharpW100Filled';

export default IconMaterialFlareSharpW100Filled;
