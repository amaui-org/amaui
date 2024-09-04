import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPassword2OffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2OffW100'

      short_name='Password2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M181.06-459Q144-459 118-485.15q-26-26.14-26-63.5 0-37.35 25.94-62.85t63-25.5Q218-637 244-611.33q26 25.66 26 62.33 0 37.5-25.94 63.75t-63 26.25Zm598-1Q742-460 716-485.94t-26-63Q690-586 715.94-612t63-26Q816-638 842-612.06t26 63Q868-512 842.06-486t-63 26ZM561-511 444-630q7.64-4 16.91-6t19.09-2q37.08 0 63.04 25.96T569-549q0 10.36-2 20.15T561-511ZM828-92 680-240H132v-40h508L92-828l20-20 736 736-20 20Z"/>
    </Icon>
  );
});

IconMaterialPassword2OffW100.displayName = 'AmauiIconMaterialPassword2OffW100';

export default IconMaterialPassword2OffW100;
