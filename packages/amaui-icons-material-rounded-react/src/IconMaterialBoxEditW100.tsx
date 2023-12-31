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
      <path d="M215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 239 80-40 80 40v-211H400v211ZM232-172q-25 0-42.5-17.5T172-232v-417q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v80q-7 0-14 .5t-14 2.5v-87H588v228l-19 19-89-44-65 32q-15 8-29-1t-14-26v-208H200v418q0 14 9 23t23 9h214q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm356-28h42l154-154 20 20-153 153q-5 5-10 7t-11 2h-40q-13 0-21.5-8.5T560-202v-39q0-6 2-11t7-10l153-153 20 19-154 154v42Zm216-134-82-81 43-43q9-8 21.5-8t20.5 8l40 40q8 8 8 20.5t-8 21.5l-43 42ZM588-650h172-172Zm-388 0h369-369Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100.displayName = 'AmauiIconMaterialBoxEditW100';

export default IconMaterialBoxEditW100;
