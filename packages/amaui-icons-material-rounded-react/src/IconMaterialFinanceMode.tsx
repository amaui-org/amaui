import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceMode'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-414v-266q0-17 11.5-28.5T360-720h40q17 0 28.5 11.5T440-680v266l-5-5q-23-22-55-22t-55 22l-5 5Zm200 60v-486q0-17 11.5-28.5T560-880h40q17 0 28.5 11.5T640-840v366L520-354ZM120-216v-304q0-17 11.5-28.5T160-560h40q17 0 28.5 11.5T240-520v184L120-216Zm96 98q-26 0-36.5-24.5T188-186l164-164q11-11 26.5-12t27.5 10l114 98 224-224h-24q-17 0-28.5-11.5T680-518q0-17 11.5-28.5T720-558h120q17 0 28.5 11.5T880-518v120q0 17-11.5 28.5T840-358q-17 0-28.5-11.5T800-398v-24L550-172q-11 11-26.5 12T496-170l-114-98-138 138q-5 5-12.5 8.5T216-118Z"/>
    </Icon>
  );
});

IconMaterialFinanceMode.displayName = 'AmauiIconMaterialFinanceMode';

export default IconMaterialFinanceMode;
