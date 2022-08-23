import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropSharpFilled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 19Q11.725 19 11.5 18.837Q11.275 18.675 11.175 18.4Q10.6 16.65 9.725 15.438Q8.85 14.225 8.037 13.125Q7.225 12.025 6.638 10.837Q6.05 9.65 6.05 7.95Q6.05 5.45 7.775 3.725Q9.5 2 12 2Q14.5 2 16.225 3.725Q17.95 5.45 17.95 7.95Q17.95 9.65 17.363 10.837Q16.775 12.025 15.963 13.125Q15.15 14.225 14.275 15.438Q13.4 16.65 12.825 18.4Q12.725 18.675 12.5 18.837Q12.275 19 12 19ZM12 10.075Q12.875 10.075 13.5 9.45Q14.125 8.825 14.125 7.95Q14.125 7.075 13.5 6.45Q12.875 5.825 12 5.825Q11.125 5.825 10.5 6.45Q9.875 7.075 9.875 7.95Q9.875 8.825 10.5 9.45Q11.125 10.075 12 10.075ZM5 22H19V20H5Z"/>
    </Icon>
  );
});

IconMaterialPinDropSharpFilled.displayName = 'AmauiIconMaterialPinDropSharpFilled';

export default IconMaterialPinDropSharpFilled;
