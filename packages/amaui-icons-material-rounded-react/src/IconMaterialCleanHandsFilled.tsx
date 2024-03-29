import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleanHandsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsFilled'

      short_name='CleanHands'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 9-.65-1.375L15 7l1.35-.625L17 5l.625 1.375L19 7l-1.375.625Zm3 5q-.825 0-1.413-.588Q18 12.825 18 12q0-.5.337-1.262.338-.763 1.238-2.113.175-.275.425-.275t.425.275q.9 1.35 1.238 2.113Q22 11.5 22 12q0 .825-.587 1.412Q20.825 14 20 14Zm-5-2.35L9.225 9.5H5.25q.425-1.275 1.413-2.2Q7.65 6.375 9 6.1V4h-.5q-.425 0-.712-.288Q7.5 3.425 7.5 3t.288-.713Q8.075 2 8.5 2H13q.375 0 .75.05t.825.225q.575.2.725.662.15.463-.15.888-.2.3-.55.375-.35.075-.7-.05-.2-.075-.425-.113Q13.25 4 13 4h-2v2.1q1.725.35 2.863 1.712Q15 9.175 15 11ZM1 20v-7q0-.825.588-1.413Q2.175 11 3 11t1.412.587Q5 12.175 5 13v7q0 .825-.588 1.413Q3.825 22 3 22t-1.412-.587Q1 20.825 1 20Zm12.375 1.825L7 20.025V11h1.6q.175 0 .35.037.175.038.35.088l6.925 2.575q.35.125.563.45.212.325.212.675 0 .525-.362.85-.363.325-.838.325h-2.625q-.125 0-.187-.012-.063-.013-.163-.063L11.7 15.5q-.2-.075-.4.025t-.25.275q-.05.2.025.375.075.175.275.25l1.475.525q.05.025.15.038.1.012.175.012H20q.8 0 1.4.575.6.575.6 1.425l-7.375 2.775q-.25.1-.613.112-.362.013-.637-.062Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsFilled.displayName = 'AmauiIconMaterialCleanHandsFilled';

export default IconMaterialCleanHandsFilled;
