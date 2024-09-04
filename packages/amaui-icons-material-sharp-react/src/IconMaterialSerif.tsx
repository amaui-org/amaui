import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSerif = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Serif'

      short_name='Serif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M248-240h104v-13h-51l53-147h134l50 147h-48v13h222v-13h-31L509-720h-55L280-253h-32v13Zm112-175 64-178 59 178H360ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSerif.displayName = 'AmauiIconMaterialSerif';

export default IconMaterialSerif;
