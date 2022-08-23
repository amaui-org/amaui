import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDrySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrySharpW100Filled'
      short_name='Dry'

      {...props}
    >
      <path d="M3.05 19.75V13.65L9.075 7.925L9.85 8.725L8.125 11.75H17.35V12.85H10.95V14.05H18.95V15.15H10.95V16.35H18.15V17.45H10.95V18.65H16.55V19.75ZM15.2 8.925 15.225 8.475Q15.225 7.85 14.963 7.275Q14.7 6.7 14.25 6.25Q13.675 5.675 13.388 4.95Q13.1 4.225 13.1 3.45L13.125 3.075H13.8L13.775 3.55Q13.775 4.15 14 4.7Q14.225 5.25 14.675 5.7Q15.25 6.275 15.575 7.05Q15.9 7.825 15.9 8.6L15.875 8.925ZM18.7 8.925 18.725 8.475Q18.725 7.85 18.462 7.275Q18.2 6.7 17.75 6.25Q17.175 5.675 16.888 4.938Q16.6 4.2 16.6 3.45L16.625 3.075H17.3L17.275 3.55Q17.275 4.15 17.5 4.7Q17.725 5.25 18.175 5.7Q18.75 6.3 19.075 7.05Q19.4 7.8 19.4 8.6L19.375 8.925Z"/>
    </Icon>
  );
});

IconMaterialDrySharpW100Filled.displayName = 'AmauiIconMaterialDrySharpW100Filled';

export default IconMaterialDrySharpW100Filled;
