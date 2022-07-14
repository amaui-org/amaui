import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffSharpW100'
      short_name='MusicOff'

      {...props}
    >
      <path d="M19.2 21.45 13.35 15.6V16.75Q13.35 17.875 12.562 18.663Q11.775 19.45 10.65 19.45Q9.525 19.45 8.738 18.663Q7.95 17.875 7.95 16.75Q7.95 15.1 9.525 14.275Q11.1 13.45 12.65 14.9L3.3 5.55L3.8 5.05L19.7 20.95ZM13.35 11.775 12.65 11.075V4.55H17.2V6.65H13.35Z"/>
    </Icon>
  );
});

export default IconMaterialMusicOffSharpW100;
