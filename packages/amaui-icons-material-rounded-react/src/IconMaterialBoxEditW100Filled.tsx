import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditW100Filled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-304 651-181q-5 5-10 7t-11 2h-40q-13 0-21.5-8.5T560-202v-39q0-6 2-11t7-10l123-123 82 81ZM232-172q-25 0-42.5-17.5T172-232v-417q0-11 3.5-20.5T186-687l66-79q8-11 20-16.5t26-5.5h362q14 0 26.5 5.5T707-766l67 81q7 8 10.5 18t3.5 21v80q-7 0-14 .5t-14 2.5q-17 3-33 10.5T697-532L588-422v-228H372v208q0 17 14 26t29 1l65-32 89 44-91 91q-8 8-13 19t-5 23v68q0 13-8.5 21.5T430-172H232Zm584-175-82-81 31-30q9-8 21.5-8t20.5 8l40 40q8 8 8 20.5t-8 21.5l-31 29ZM215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Z"/>
    </Icon>
  );
});

IconMaterialBoxEditW100Filled.displayName = 'AmauiIconMaterialBoxEditW100Filled';

export default IconMaterialBoxEditW100Filled;
