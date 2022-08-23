import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrintRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintRoundedW100Filled'
      short_name='Print'

      {...props}
    >
      <path d="M16.7 8.1H7.3V5.85Q7.3 5.525 7.513 5.312Q7.725 5.1 8.05 5.1H15.95Q16.275 5.1 16.488 5.312Q16.7 5.525 16.7 5.85ZM17.5 12Q17.925 12 18.212 11.712Q18.5 11.425 18.5 11Q18.5 10.575 18.212 10.287Q17.925 10 17.5 10Q17.075 10 16.788 10.287Q16.5 10.575 16.5 11Q16.5 11.425 16.788 11.712Q17.075 12 17.5 12ZM8.8 19H15.2Q15.55 19 15.775 18.775Q16 18.55 16 18.2V14.3H8V18.2Q8 18.55 8.225 18.775Q8.45 19 8.8 19ZM8.8 19.7Q8.175 19.7 7.738 19.262Q7.3 18.825 7.3 18.2V15.7H4.8Q4.475 15.7 4.263 15.488Q4.05 15.275 4.05 14.95V10.5Q4.05 9.775 4.537 9.287Q5.025 8.8 5.75 8.8H18.25Q18.975 8.8 19.463 9.287Q19.95 9.775 19.95 10.5V14.95Q19.95 15.275 19.738 15.488Q19.525 15.7 19.2 15.7H16.7V18.2Q16.7 18.825 16.262 19.262Q15.825 19.7 15.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPrintRoundedW100Filled.displayName = 'AmauiIconMaterialPrintRoundedW100Filled';

export default IconMaterialPrintRoundedW100Filled;
