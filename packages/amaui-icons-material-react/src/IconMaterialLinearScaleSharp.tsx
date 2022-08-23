import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinearScaleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleSharp'
      short_name='LinearScale'

      {...props}
    >
      <path d="M17 17Q15.2 17 13.825 15.863Q12.45 14.725 12.1 13H6.8Q6.5 13.675 5.875 14.087Q5.25 14.5 4.5 14.5Q3.45 14.5 2.725 13.775Q2 13.05 2 12Q2 10.95 2.725 10.225Q3.45 9.5 4.5 9.5Q5.25 9.5 5.875 9.912Q6.5 10.325 6.8 11H12.1Q12.45 9.275 13.825 8.137Q15.2 7 17 7Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17ZM17 15Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9Q15.75 9 14.875 9.875Q14 10.75 14 12Q14 13.25 14.875 14.125Q15.75 15 17 15Z"/>
    </Icon>
  );
});

IconMaterialLinearScaleSharp.displayName = 'AmauiIconMaterialLinearScaleSharp';

export default IconMaterialLinearScaleSharp;
