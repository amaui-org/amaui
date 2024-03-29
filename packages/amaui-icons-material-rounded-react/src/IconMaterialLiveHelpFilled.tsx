import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveHelpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpFilled'

      short_name='LiveHelp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 22.3 9 20H5q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v14q0 .825-.587 1.413Q19.825 20 19 20h-4l-2.3 2.3q-.275.275-.7.275-.425 0-.7-.275Zm.65-5.5q.525 0 .888-.362.362-.363.362-.888t-.362-.888q-.363-.362-.888-.362t-.888.362q-.362.363-.362.888t.362.888q.363.362.888.362Zm1-4.7q.075-.4.263-.7.187-.3.737-.85.925-.925 1.25-1.5.325-.575.325-1.3 0-1.275-.937-2.113-.938-.837-2.363-.837-1.075 0-1.913.437-.837.438-1.287 1.163-.225.35-.125.737.1.388.45.538.35.15.688.013.337-.138.537-.463.25-.35.675-.537.425-.188.875-.188.7 0 1.125.375.425.375.425.95 0 .475-.287.95-.288.475-.888 1-.65.575-1 1.175-.35.6-.35 1.125 0 .35.263.6.262.25.637.25.35 0 .587-.237.238-.238.313-.588Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpFilled.displayName = 'AmauiIconMaterialLiveHelpFilled';

export default IconMaterialLiveHelpFilled;
