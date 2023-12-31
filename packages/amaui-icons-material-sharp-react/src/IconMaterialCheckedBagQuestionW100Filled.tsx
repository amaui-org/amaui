import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagQuestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagQuestionW100Filled'

      short_name='CheckedBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M423-668h120q0-25-17.5-42.5T483-728q-25 0-42.5 17.5T423-668Zm244 176v-176h84v180q-20-5-41.5-5.5T667-492ZM215-312v-356h84v356h-84Zm112 0v-356h68q0-37 25.735-62.5 25.736-25.5 62.5-25.5Q520-756 545.5-730.333 571-704.667 571-668h68v182q-63 17-107.5 63.5T474-312H327Zm356 88h28v-6q0-11 6-18.5t14.4-15.5q12.6-11 21.1-25 8.5-14 8.5-30.58 0-26.334-18.823-44.377Q723.353-382 697-382q-23 0-40.5 13.5T631-334l26 10q5-13 15.606-21.5T697-354q14.625 0 25.312 10Q733-334 733-320.458q0 11.458-7 19.958-7 8.5-15 16.5-6 6-11.5 12.5T689-258q-4 5-5 11.5t-1 12.5v10Zm14 70q8.462 0 14.231-5.769T717-174q0-8.462-5.769-14.231T697-194q-8.462 0-14.231 5.769T677-174q0 8.462 5.769 14.231T697-154Zm0 36q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-542-86v-28h317q1 8 2.5 14.667Q476-210.667 478-204H155Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagQuestionW100Filled.displayName = 'AmauiIconMaterialCheckedBagQuestionW100Filled';

export default IconMaterialCheckedBagQuestionW100Filled;
