import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintDisabledSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledSharpW100'
      short_name='PrintDisabled'

      {...props}
    >
      <path d="M19.85 20.85 16.7 17.7V19.7H7.3V15.7H4.05V8.8H7.8L3.15 4.15L3.65 3.65L20.35 20.35ZM8 19H16V17L13.3 14.3H8ZM18.5 15.7 17.8 15H19.25V9.5H12.3L11.6 8.8H19.95V15.7ZM4.75 15H7.3V13.6H12.6L8.5 9.5H4.75ZM16 8.8V5.8H8.6L7.9 5.1H16.7V8.8ZM17.5 12Q17.925 12 18.212 11.712Q18.5 11.425 18.5 11Q18.5 10.575 18.212 10.287Q17.925 10 17.5 10Q17.075 10 16.788 10.287Q16.5 10.575 16.5 11Q16.5 11.425 16.788 11.712Q17.075 12 17.5 12ZM12.3 9.5H19.25H12.3ZM4.75 9.5H8.5H7.3H4.75Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledSharpW100.displayName = 'AmauiIconMaterialPrintDisabledSharpW100';

export default IconMaterialPrintDisabledSharpW100;
