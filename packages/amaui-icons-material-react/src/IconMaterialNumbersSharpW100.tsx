import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNumbersSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NumbersSharpW100'
      short_name='Numbers'

      {...props}
    >
      <path d="M7.475 18.8 8.475 14.8H4.975L5.15 14.1H8.65L9.7 9.9H6.2L6.375 9.2H9.875L10.875 5.2H11.525L10.525 9.2H14.875L15.875 5.2H16.525L15.525 9.2H19.025L18.85 9.9H15.35L14.3 14.1H17.8L17.625 14.8H14.125L13.125 18.8H12.475L13.475 14.8H9.125L8.125 18.8ZM9.3 14.1H13.65L14.7 9.9H10.35Z"/>
    </Icon>
  );
});

export default IconMaterialNumbersSharpW100;
