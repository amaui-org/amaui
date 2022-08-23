import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffSharpW100'
      short_name='GridOff'

      {...props}
    >
      <path d="M19.4 16.9 18.7 16.2V14.7H17.2L16.5 14H18.7V10H14.7V12.2L14 11.5V10H12.5L11.8 9.3H14V5.3H10V7.5L9.3 6.8V5.3H7.8L7.1 4.6H19.4ZM14.7 9.3H18.7V5.3H14.7ZM21.4 22.4 18.4 19.4H4.6V5.6L1.6 2.6L2.1 2.1L21.9 21.9ZM14.7 18.7H17.7L14.7 15.7ZM10 14H13L10 11ZM10 18.7H14V15L13.7 14.7H10ZM5.3 9.3H8.3L5.3 6.25ZM5.3 14H9.3V10.3L9 10H5.3ZM5.3 18.7H9.3V14.7H5.3Z"/>
    </Icon>
  );
});

IconMaterialGridOffSharpW100.displayName = 'AmauiIconMaterialGridOffSharpW100';

export default IconMaterialGridOffSharpW100;
