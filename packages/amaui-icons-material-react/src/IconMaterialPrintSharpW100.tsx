import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintSharpW100'
      short_name='Print'

      {...props}
    >
      <path d="M16 8.8V5.8H8V8.8H7.3V5.1H16.7V8.8ZM17.5 12Q17.925 12 18.212 11.712Q18.5 11.425 18.5 11Q18.5 10.575 18.212 10.287Q17.925 10 17.5 10Q17.075 10 16.788 10.287Q16.5 10.575 16.5 11Q16.5 11.425 16.788 11.712Q17.075 12 17.5 12ZM16 19V14.3H8V19ZM16.7 19.7H7.3V15.7H4.05V8.8H19.95V15.7H16.7ZM19.25 15V9.5H4.75V15H7.3V13.6H16.7V15ZM4.75 9.5H19.25H16.7H7.3Z"/>
    </Icon>
  );
});

IconMaterialPrintSharpW100.displayName = 'AmauiIconMaterialPrintSharpW100';

export default IconMaterialPrintSharpW100;
