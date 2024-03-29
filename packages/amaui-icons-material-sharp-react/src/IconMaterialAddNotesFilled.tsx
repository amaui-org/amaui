import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddNotesFilled'

      short_name='AddNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5Zm.5 2q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM7 9h10V7H7Zm4.675 12H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.7q-.725-.35-1.462-.525Q18.8 11 18 11q-.275 0-.512.012-.238.013-.488.063V11H7v2h6.125q-.45.425-.813.925-.362.5-.637 1.075H7v2h4.075q-.05.25-.063.488Q11 17.725 11 18q0 .825.15 1.538.15.712.525 1.462Z"/>
    </Icon>
  );
});

IconMaterialAddNotesFilled.displayName = 'AmauiIconMaterialAddNotesFilled';

export default IconMaterialAddNotesFilled;
