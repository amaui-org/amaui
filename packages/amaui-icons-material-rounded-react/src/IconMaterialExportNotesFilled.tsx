import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExportNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExportNotesFilled'

      short_name='ExportNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 17.7v1.8q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15h1.8l-2.45 2.45q-.15.15-.15.35 0 .2.15.35.15.15.35.15.2 0 .35-.15ZM18 23q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM8 9h8q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm3.675 12H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.7q-.725-.35-1.462-.525Q18.8 11 18 11q-.275 0-.512.012-.238.013-.488.063-.225-.05-.5-.063Q16.225 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h5.125q-.45.425-.813.925-.362.5-.637 1.075H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17h3.075q-.05.25-.063.488Q11 17.725 11 18q0 .825.15 1.538.15.712.525 1.462Z"/>
    </Icon>
  );
});

IconMaterialExportNotesFilled.displayName = 'AmauiIconMaterialExportNotesFilled';

export default IconMaterialExportNotesFilled;
