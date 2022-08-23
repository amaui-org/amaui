import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropSharpW100Filled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 17.55Q11.8 17.55 11.625 17.388Q11.45 17.225 11.35 17Q10.675 15.475 9.863 14.438Q9.05 13.4 8.35 12.45Q7.65 11.5 7.175 10.475Q6.7 9.45 6.7 7.95Q6.7 5.725 8.238 4.187Q9.775 2.65 12 2.65Q14.225 2.65 15.763 4.187Q17.3 5.725 17.3 7.95Q17.3 9.45 16.825 10.475Q16.35 11.5 15.65 12.45Q14.95 13.4 14.138 14.438Q13.325 15.475 12.65 17Q12.55 17.225 12.375 17.388Q12.2 17.55 12 17.55ZM12 9.3Q12.575 9.3 12.963 8.912Q13.35 8.525 13.35 7.95Q13.35 7.375 12.963 6.987Q12.575 6.6 12 6.6Q11.425 6.6 11.038 6.987Q10.65 7.375 10.65 7.95Q10.65 8.525 11.038 8.912Q11.425 9.3 12 9.3ZM5.65 21.1H18.35V20.4H5.65Z"/>
    </Icon>
  );
});

IconMaterialPinDropSharpW100Filled.displayName = 'AmauiIconMaterialPinDropSharpW100Filled';

export default IconMaterialPinDropSharpW100Filled;
