import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoodBadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoodBadFilled'

      short_name='MoodBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 11q.65 0 1.075-.425Q17 10.15 17 9.5q0-.65-.425-1.075Q16.15 8 15.5 8q-.65 0-1.075.425Q14 8.85 14 9.5q0 .65.425 1.075Q14.85 11 15.5 11Zm-7 0q.65 0 1.075-.425Q10 10.15 10 9.5q0-.65-.425-1.075Q9.15 8 8.5 8q-.65 0-1.075.425Q7 8.85 7 9.5q0 .65.425 1.075Q7.85 11 8.5 11ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-4.25-5h8.5q.35 0 .5-.238.15-.237-.025-.537Q16 15 14.775 14.25T12 13.5q-1.55 0-2.775.75Q8 15 7.275 16.225q-.175.3-.025.537.15.238.5.238Z"/>
    </Icon>
  );
});

IconMaterialMoodBadFilled.displayName = 'AmauiIconMaterialMoodBadFilled';

export default IconMaterialMoodBadFilled;
