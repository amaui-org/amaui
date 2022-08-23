import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectAllRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectAllRoundedW100Filled'
      short_name='SelectAll'

      {...props}
    >
      <path d="M4.3 5Q4.3 4.7 4.5 4.5Q4.7 4.3 5 4.3V5ZM4.3 13V11H5V13ZM7 19.7V19H9V19.7ZM4.3 9V7H5V9ZM11 5V4.3H13V5ZM19 5V4.3Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5ZM5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19H5ZM4.3 17V15H5V17ZM7 5V4.3H9V5ZM11 19.7V19H13V19.7ZM19 13V11H19.7V13ZM19 19.7V19H19.7Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM19 8.75V6.75H19.7V8.75ZM19 17.25V15.25H19.7V17.25ZM15 19.7V19H17V19.7ZM15 5V4.3H17V5ZM9.05 15.7Q8.725 15.7 8.512 15.488Q8.3 15.275 8.3 14.95V9.05Q8.3 8.725 8.512 8.512Q8.725 8.3 9.05 8.3H14.95Q15.275 8.3 15.488 8.512Q15.7 8.725 15.7 9.05V14.95Q15.7 15.275 15.488 15.488Q15.275 15.7 14.95 15.7ZM9 15H15V9H9Z"/>
    </Icon>
  );
});

IconMaterialSelectAllRoundedW100Filled.displayName = 'AmauiIconMaterialSelectAllRoundedW100Filled';

export default IconMaterialSelectAllRoundedW100Filled;
