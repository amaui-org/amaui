import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOffW100'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-760H400v87l-77-77q-4-4-5-7t-1-8q0-8.79 5.5-15.9Q328-788 339-788h275q5.95 0 9.97 4.11 4.03 4.1 4.03 10.18 0 5.71-4 9.71-4 4-10 4h-26v240q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-240Zm-94 576v-188h-89q-17.27 0-27.64-12Q339-396 339-410q0-7 2.61-13.53 2.6-6.53 8.39-12.47l22-22v-90L142-778q-4-4-4.5-9.5t4.72-10.72Q147-803 152-803q5 0 10 5l596 596q4 4 4.5 9.5t-4.5 10.72q-5 4.78-10 4.78t-10-5L548-372h-54v188q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98ZM354-400h168L400-520v74l-46 46Zm126-193Zm-80 73Z"/>
    </Icon>
  );
});

IconMaterialKeepOffW100.displayName = 'AmauiIconMaterialKeepOffW100';

export default IconMaterialKeepOffW100;
