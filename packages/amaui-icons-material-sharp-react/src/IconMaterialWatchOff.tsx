import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOff'

      short_name='WatchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.175 15.3-1.5-1.5q.175-.425.25-.862Q17 12.5 17 12q0-2.075-1.462-3.538Q14.075 7 12 7q-.5 0-.938.075-.437.075-.862.25l-2.15-2.15L9 2h6l1.35 4.525q1.2.95 1.925 2.375Q19 10.325 19 12q0 .9-.2 1.725-.2.825-.625 1.575ZM10.1 5.275q.375-.125.925-.2Q11.575 5 12 5q.45 0 .988.075.537.075.912.2L13.5 4h-3ZM19.8 22.6l-3.85-3.85L15 22H9l-1.35-4.525q-1.2-.95-1.925-2.375Q5 13.675 5 12q0-.9.225-1.738.225-.837.65-1.587L1.4 4.2l1.425-1.425 18.4 18.4ZM10.5 20h3l.4-1.275q-.375.125-.912.188-.538.062-.988.062-.45 0-.987-.062-.538-.063-.913-.188Zm1.5-3q.5 0 .95-.087.45-.088.875-.263L7.35 10.175q-.175.425-.262.875Q7 11.5 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM10.1 4h3.8-3.8Zm.4 16h-.4 3.8-.4Z"/>
    </Icon>
  );
});

IconMaterialWatchOff.displayName = 'AmauiIconMaterialWatchOff';

export default IconMaterialWatchOff;
