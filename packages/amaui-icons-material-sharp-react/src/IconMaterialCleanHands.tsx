import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleanHands = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHands'

      short_name='CleanHands'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 9-.65-1.375L15 7l1.35-.625L17 5l.625 1.375L19 7l-1.375.625Zm3 5q-.825 0-1.413-.588Q18 12.825 18 12q0-.575.413-1.463Q18.825 9.65 20 8q1.175 1.65 1.587 2.537Q22 11.425 22 12q0 .825-.587 1.412Q20.825 14 20 14Zm-5-2.35-2-.75q-.05-1.2-.912-2.05Q11.225 8 10 8q-.825 0-1.512.412Q7.8 8.825 7.4 9.5H5.25q.425-1.275 1.413-2.2Q7.65 6.375 9 6.1V4H7.5V2H13q.85 0 1.6.275.75.275 1.375.75L14.55 4.45q-.35-.2-.738-.325Q13.425 4 13 4h-2v2.1q1.725.35 2.863 1.712Q15 9.175 15 11ZM14 22.5l-7-1.95V22H1V11h7.95L17 14v2h5v4ZM3 20h2v-7H3Zm10.95.4 5.95-1.85V18h-7.075L9.7 16.95l.6-1.9 2.925.95H15v-.65L8.6 13H7v5.5ZM9.225 9.5Z"/>
    </Icon>
  );
});

IconMaterialCleanHands.displayName = 'AmauiIconMaterialCleanHands';

export default IconMaterialCleanHands;
