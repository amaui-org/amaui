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
      <path d="m17 9-.65-1.375L15 7l1.35-.625L17 5l.625 1.375L19 7l-1.375.625Zm3 5q-.825 0-1.413-.588Q18 12.825 18 12q0-.575.413-1.463Q18.825 9.65 20 8q1.175 1.65 1.587 2.537Q22 11.425 22 12q0 .825-.587 1.412Q20.825 14 20 14ZM1 22V11h4v11Zm13 0-7-1.975V11h1.975L17 14v2h-4l-1.75-.675-.35.925L13 17h9v2Zm1-10.35L9.225 9.5H5.25q.425-1.275 1.413-2.2Q7.65 6.375 9 6.1V4H7.5V2H13q.85 0 1.6.275.75.275 1.375.75L14.55 4.45q-.35-.2-.738-.325Q13.425 4 13 4h-2v2.1q1.725.35 2.863 1.712Q15 9.175 15 11Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsFilled.displayName = 'AmauiIconMaterialCleanHandsFilled';

export default IconMaterialCleanHandsFilled;
