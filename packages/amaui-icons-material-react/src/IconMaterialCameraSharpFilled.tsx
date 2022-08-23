import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraSharpFilled'
      short_name='Camera'

      {...props}
    >
      <path d="M11.2 8.375 14.7 2.375Q16.975 2.975 18.738 4.575Q20.5 6.175 21.3 8.375ZM8.425 10.875 5 4.875Q6.35 3.55 8.138 2.775Q9.925 2 12 2Q12.325 2 12.75 2.037Q13.175 2.075 13.525 2.125ZM2.325 14.5Q2.175 13.9 2.088 13.275Q2 12.65 2 12Q2 10.225 2.575 8.65Q3.15 7.075 4.2 5.775L9.25 14.5ZM9.325 21.625Q7.05 21.025 5.275 19.425Q3.5 17.825 2.7 15.625H12.775ZM12 22Q11.625 22 11.238 21.95Q10.85 21.9 10.5 21.85L15.575 13.125L19 19.125Q17.65 20.45 15.863 21.225Q14.075 22 12 22ZM19.8 18.225 14.75 9.5H21.675Q21.825 10.1 21.913 10.725Q22 11.35 22 12Q22 13.75 21.388 15.35Q20.775 16.95 19.8 18.225Z"/>
    </Icon>
  );
});

IconMaterialCameraSharpFilled.displayName = 'AmauiIconMaterialCameraSharpFilled';

export default IconMaterialCameraSharpFilled;
