import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksSharpW100'
      short_name='Looks'

      {...props}
    >
      <path d="M6.3 17Q6.3 14.625 7.963 12.962Q9.625 11.3 12 11.3Q14.375 11.3 16.038 12.962Q17.7 14.625 17.7 17H17Q17 14.925 15.538 13.462Q14.075 12 12 12Q9.925 12 8.463 13.462Q7 14.925 7 17ZM2.3 17Q2.3 15 3.062 13.225Q3.825 11.45 5.138 10.137Q6.45 8.825 8.225 8.062Q10 7.3 12 7.3Q14 7.3 15.775 8.062Q17.55 8.825 18.863 10.137Q20.175 11.45 20.938 13.225Q21.7 15 21.7 17H21Q21 13.275 18.363 10.637Q15.725 8 12 8Q8.275 8 5.638 10.637Q3 13.275 3 17Z"/>
    </Icon>
  );
});

IconMaterialLooksSharpW100.displayName = 'AmauiIconMaterialLooksSharpW100';

export default IconMaterialLooksSharpW100;
