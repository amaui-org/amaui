import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningW100Filled'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-656v-42l-69.079 73.026Q431-624 422.6-622q-5.6 0-9.1-5.5T413-638l38-70v-28h-40q-8.5 0-14.25-5.75T391-756q0-8.5 5.75-14.25T411-776h160q11 0 19.5 8.5T599-748v17q0 4.167-.5 7.083Q598-721 596-718l-31 62h-64Zm-80 524q-24.75 0-42.375-17.625T361-192v-157.981q0-8.019 1.5-14.519T368-378l125-234q4-8 10.783-12 6.784-4 15.217-4h28q12.75 0 21.375 8.625T577-598v406q0 24.75-17.625 42.375T517-132h-96Z"/>
    </Icon>
  );
});

IconMaterialCleaningW100Filled.displayName = 'AmauiIconMaterialCleaningW100Filled';

export default IconMaterialCleaningW100Filled;
