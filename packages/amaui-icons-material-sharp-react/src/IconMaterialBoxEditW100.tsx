import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M215-678h529l-69-82H284l-69 82Zm185 239 80-40 80 40v-211H400v211ZM172-172v-498l98-118h419l99 120v102l-28 3v-87H588v228l-19 19-89-44-108 54v-257H200v450h260v28H172Zm416-478h172-172Zm-388 0h369-369Zm360 478v-81l162-162 20 19-154 154v42h42l154-154 20 20-162 162h-82Zm244-162-82-81 64-64 82 82-64 63Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100.displayName = 'AmauiIconMaterialBoxEditW100';

export default IconMaterialBoxEditW100;
