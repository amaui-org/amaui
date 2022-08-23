import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQueueMusicSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueueMusicSharpW100'
      short_name='QueueMusic'

      {...props}
    >
      <path d="M16 19.35Q15.025 19.35 14.338 18.663Q13.65 17.975 13.65 17Q13.65 16.025 14.338 15.337Q15.025 14.65 16 14.65Q16.425 14.65 16.825 14.812Q17.225 14.975 17.65 15.35V6.65H21.35V8.05H18.35V17Q18.35 17.975 17.663 18.663Q16.975 19.35 16 19.35ZM3.65 7.35V6.65H14.35V7.35ZM3.65 11.35V10.65H14.35V11.35ZM3.65 15.35V14.65H10.35V15.35Z"/>
    </Icon>
  );
});

IconMaterialQueueMusicSharpW100.displayName = 'AmauiIconMaterialQueueMusicSharpW100';

export default IconMaterialQueueMusicSharpW100;
