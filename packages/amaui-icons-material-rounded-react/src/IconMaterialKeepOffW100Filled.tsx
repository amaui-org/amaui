import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOffW100Filled'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-513 323.2-749.8Q319-754 318-757t-1-8q0-8.79 5.5-15.9Q328-788 339-788h275q5.95 0 9.97 4.11 4.03 4.1 4.03 10.18 0 5.71-4 9.71-4 4-10 4h-26v236q0 10.69-10 14.84-10 4.16-18-3.84Zm-94 329v-188h-89q-17.27 0-27.64-12Q339-396 339-410q0-7 2.61-13.53 2.6-6.53 8.39-12.47l22-22v-90L142-778q-4-4-4.5-9.5t4.72-10.72Q147-803 152-803q5 0 10 5l596 596q4 4 4.5 9.5t-4.5 10.72q-5 4.78-10 4.78t-10-5L548-372h-54v188q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialKeepOffW100Filled.displayName = 'AmauiIconMaterialKeepOffW100Filled';

export default IconMaterialKeepOffW100Filled;
