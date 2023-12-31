import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningW100'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M451-708v-28h-40q-8 0-14-6t-6-14q0-8 6-14t14-6h160q11 0 19.5 8.5T599-748v17q0 4-.5 7t-2.5 6l-31 62h-64v-42l-69 73q-1 1-9 3-6 0-9.5-5.5T413-638l38-70Zm-30 576q-25 0-42.5-17.5T361-192v-158q0-8 1.5-14.5T368-378l125-234q4-8 11-12t15-4h28q13 0 21.5 8.5T577-598v406q0 25-17.5 42.5T517-132h-96Zm0-28h96q14 0 23-9t9-23v-408h-31L389-357v165q0 14 9 23t23 9Zm0 0h-32 160-128Z"/>
    </Icon>
  );
});

IconMaterialCleaningW100.displayName = 'AmauiIconMaterialCleaningW100';

export default IconMaterialCleaningW100;
