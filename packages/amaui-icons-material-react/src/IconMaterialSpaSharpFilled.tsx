import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaSharpFilled'
      short_name='Spa'

      {...props}
    >
      <path d="M12 22Q7.275 21.425 4.638 18.462Q2 15.5 2.025 10.85Q4.775 11.125 6.675 11.85Q8.575 12.575 9.763 13.9Q10.95 15.225 11.475 17.212Q12 19.2 12 22ZM14 21.6Q13.95 19.85 13.738 18.363Q13.525 16.875 13.075 15.55Q14.25 13.525 16.312 12.25Q18.375 10.975 21.975 10.85Q22 14.825 19.863 17.675Q17.725 20.525 14 21.6ZM12 13.575Q11.425 12.7 10.438 11.85Q9.45 11 8.15 10.3Q8.45 8.175 9.5 5.912Q10.55 3.65 12 2Q13.45 3.65 14.5 5.912Q15.55 8.175 15.85 10.3Q14.55 10.975 13.562 11.825Q12.575 12.675 12 13.575Z"/>
    </Icon>
  );
});

IconMaterialSpaSharpFilled.displayName = 'AmauiIconMaterialSpaSharpFilled';

export default IconMaterialSpaSharpFilled;
