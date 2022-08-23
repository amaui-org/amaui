import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilePresentSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentSharpW100Filled'
      short_name='FilePresent'

      {...props}
    >
      <path d="M18.7 20.7H5.3V3.3H14.65L18.7 7.35ZM12 17.975Q13.275 17.975 14.137 17.025Q15 16.075 15 14.75V10H14.3V14.75Q14.3 15.775 13.638 16.525Q12.975 17.275 12 17.275Q11.025 17.275 10.363 16.525Q9.7 15.775 9.7 14.75V9.3Q9.7 8.85 9.975 8.512Q10.25 8.175 10.675 8.175Q11.1 8.175 11.375 8.512Q11.65 8.85 11.65 9.3V14.75H12.35V9.3Q12.35 8.575 11.875 8.025Q11.4 7.475 10.675 7.475Q9.95 7.475 9.475 8.025Q9 8.575 9 9.3V14.75Q9 16.075 9.863 17.025Q10.725 17.975 12 17.975ZM14.3 7.7H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialFilePresentSharpW100Filled.displayName = 'AmauiIconMaterialFilePresentSharpW100Filled';

export default IconMaterialFilePresentSharpW100Filled;
