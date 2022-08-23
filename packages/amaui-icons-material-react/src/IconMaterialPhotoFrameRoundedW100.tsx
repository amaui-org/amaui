import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFrameRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameRoundedW100'
      short_name='PhotoFrame'

      {...props}
    >
      <path d="M9.025 11.525 6.825 14.35H17.2L14 10.075L11 13.925ZM5.55 18.95Q5.225 18.95 5.013 18.737Q4.8 18.525 4.8 18.2V17.7H3.8Q3.15 17.7 2.725 17.275Q2.3 16.85 2.3 16.2V6.8Q2.3 6.15 2.725 5.725Q3.15 5.3 3.8 5.3H20.2Q20.85 5.3 21.275 5.725Q21.7 6.15 21.7 6.8V16.2Q21.7 16.85 21.275 17.275Q20.85 17.7 20.2 17.7H19.2V18.2Q19.2 18.525 18.988 18.737Q18.775 18.95 18.45 18.95ZM3.8 17H20.2Q20.5 17 20.75 16.75Q21 16.5 21 16.2V6.8Q21 6.5 20.75 6.25Q20.5 6 20.2 6H3.8Q3.5 6 3.25 6.25Q3 6.5 3 6.8V16.2Q3 16.5 3.25 16.75Q3.5 17 3.8 17ZM3 17Q3 17 3 16.775Q3 16.55 3 16.2V6.8Q3 6.45 3 6.225Q3 6 3 6Q3 6 3 6.225Q3 6.45 3 6.8V16.2Q3 16.55 3 16.775Q3 17 3 17Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameRoundedW100.displayName = 'AmauiIconMaterialPhotoFrameRoundedW100';

export default IconMaterialPhotoFrameRoundedW100;
