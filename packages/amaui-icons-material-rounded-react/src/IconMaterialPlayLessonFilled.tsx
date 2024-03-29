import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLessonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLessonFilled'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V4q0-.825.587-1.413Q4.175 2 5 2h12q.825 0 1.413.587Q19 3.175 19 4v7.075q-.25-.05-.538-.063Q18.175 11 18 11q-2.875 0-4.938 2.037Q11 15.075 11 18q0 1.075.325 2.1.325 1.025.95 1.9Zm13 1q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-.475-2.975 2.55-1.6q.225-.15.225-.425t-.225-.425l-2.55-1.6q-.275-.15-.525-.012-.25.137-.25.437v3.2q0 .3.25.438.25.137.525-.013ZM7.75 10.55 9.5 9.5l1.75 1.05q.25.15.5 0t.25-.425V4H7v6.125q0 .275.25.425.25.15.5 0Z"/>
    </Icon>
  );
});

IconMaterialPlayLessonFilled.displayName = 'AmauiIconMaterialPlayLessonFilled';

export default IconMaterialPlayLessonFilled;
