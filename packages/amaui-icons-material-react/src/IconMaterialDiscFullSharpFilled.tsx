import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiscFullSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFullSharpFilled'
      short_name='DiscFull'

      {...props}
    >
      <path d="M12 16.5Q13.875 16.5 15.188 15.188Q16.5 13.875 16.5 12Q16.5 10.125 15.188 8.812Q13.875 7.5 12 7.5Q10.125 7.5 8.812 8.812Q7.5 10.125 7.5 12Q7.5 13.875 8.812 15.188Q10.125 16.5 12 16.5ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q15 2 17.475 3.625Q19.95 5.25 21.15 8H18V20Q16.675 20.95 15.15 21.475Q13.625 22 12 22ZM20 18V10H22V18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialDiscFullSharpFilled.displayName = 'AmauiIconMaterialDiscFullSharpFilled';

export default IconMaterialDiscFullSharpFilled;
