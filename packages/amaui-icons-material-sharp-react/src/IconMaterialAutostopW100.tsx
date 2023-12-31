import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutostopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutostopW100'

      short_name='Autostop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M386-386v-188h188v188H386Zm94 294q-119 0-213-63T120-333v161H92v-208h207v28H143q45 107 135 169.5T480-120q120 0 215-72.5T824-380l28 5q-35 127-138 205T480-92ZM94-520q8-61 27-107t57-97l21 19q-32 42-49 83t-28 102H94Zm161-240-19-21q47-36 98.5-57T440-864v28q-48 5-95.5 24.5T255-760Zm448 0q-35-30-86.5-51T520-836v-28q54 5 105.5 26.5T723-780l-20 20Zm133 240q-7-57-26.5-102.5T758-704l20-20q37 44 58.5 95.5T864-520h-28Z"/>
    </Icon>
  );
});

IconMaterialAutostopW100.displayName = 'AmauiIconMaterialAutostopW100';

export default IconMaterialAutostopW100;
