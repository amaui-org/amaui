import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlagCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircleFilled'

      short_name='FlagCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 18q.325 0 .538-.212.212-.213.212-.538V13H12l.725 1.45q.125.275.375.413.25.137.525.137H17q.425 0 .712-.288Q18 14.425 18 14v-4q0-.425-.288-.713Q17.425 9 17 9h-2l-.725-1.45q-.125-.275-.375-.413Q13.65 7 13.375 7H9q-.425 0-.712.287Q8 7.575 8 8v9.25q0 .325.213.538.212.212.537.212ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialFlagCircleFilled.displayName = 'AmauiIconMaterialFlagCircleFilled';

export default IconMaterialFlagCircleFilled;
