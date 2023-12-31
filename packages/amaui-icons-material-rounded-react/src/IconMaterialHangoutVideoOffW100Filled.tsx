import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffW100Filled'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 16.5-43t39.5-17l9 9v40l-93-93q-4-4-4.5-9.5T104-812q5-5 10-5t10 5l698 698q4 4 4.5 9.5T822-94q-5 5-10 5t-10-5L684-212H192Zm623-22L672-378v-183q0-14-13-20.5t-24 2.5l-91 73v-72q0-13-8.5-21.5T514-608h-72L302-748h466q26 0 43 17t17 43v416q0 11-3.5 20.5T815-234ZM318-352h226L288-608v226q0 13 8.5 21.5T318-352Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffW100Filled.displayName = 'AmauiIconMaterialHangoutVideoOffW100Filled';

export default IconMaterialHangoutVideoOffW100Filled;
