import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffW100'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m644-850 126 126q8 8 13 19.28 5 11.28 5 23.72v366q0 7.18-4.32 10.59t-9.5 3.41q-5.18 0-9.68-3.5T760-315v-377H657q-18.75 0-31.87-13.13Q612-718.25 612-737v-103H306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h295q12.44 0 23.72 5T644-850ZM352-280h288L320-600v288q0 12 10 22t22 10Zm316 28H352q-26 0-43-17t-17-43v-316L102-818q-4-4-4.5-9.5T102-838q5-5 10-5t10 5l716 716q4 4 4.5 9.5T838-102q-5 5-10 5t-10-5L668-252ZM540-575Zm-60 135ZM192-92q-26 0-43-17t-17-43v-422q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v422q0 12 10 22t22 10h382q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffW100.displayName = 'AmauiIconMaterialFileCopyOffW100';

export default IconMaterialFileCopyOffW100;
