import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintDisabledSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledSharpW100Filled'
      short_name='PrintDisabled'

      {...props}
    >
      <path d="M19.85 20.85 16.7 17.7V19.7H7.3V15.7H4.05V8.8H7.8L3.15 4.15L3.65 3.65L20.35 20.35ZM8 19H16V17L13.3 14.3H8ZM18.5 15.7H19.95V8.8H11.6ZM10.9 8.1 7.9 5.1H16.7V8.1ZM17.5 12Q17.075 12 16.788 11.712Q16.5 11.425 16.5 11Q16.5 10.575 16.788 10.287Q17.075 10 17.5 10Q17.925 10 18.212 10.287Q18.5 10.575 18.5 11Q18.5 11.425 18.212 11.712Q17.925 12 17.5 12Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledSharpW100Filled.displayName = 'AmauiIconMaterialPrintDisabledSharpW100Filled';

export default IconMaterialPrintDisabledSharpW100Filled;
