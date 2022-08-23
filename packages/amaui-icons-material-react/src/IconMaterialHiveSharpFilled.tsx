import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHiveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveSharpFilled'
      short_name='Hive'

      {...props}
    >
      <path d="M16.275 11.5 14.575 8.5 16.275 5.5H19.625L21.325 8.5L19.625 11.5ZM10.325 15 8.625 12 10.325 9H13.675L15.375 12L13.675 15ZM10.325 8 8.625 5 10.325 2H13.675L15.375 5L13.675 8ZM4.375 11.5 2.675 8.5 4.375 5.5H7.725L9.35 8.5L7.725 11.5ZM4.375 18.5 2.675 15.5 4.375 12.5H7.725L9.35 15.5L7.725 18.5ZM10.425 22 8.625 19 10.325 16H13.675L15.375 19L13.675 22ZM16.275 18.5 14.575 15.5 16.275 12.5H19.625L21.325 15.5L19.625 18.5Z"/>
    </Icon>
  );
});

IconMaterialHiveSharpFilled.displayName = 'AmauiIconMaterialHiveSharpFilled';

export default IconMaterialHiveSharpFilled;
