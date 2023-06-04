import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartBrokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenW100'

      short_name='HeartBroken'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 20.3q-2.5-2.5-4.175-4.275-1.675-1.775-2.687-3.113-1.013-1.337-1.438-2.375Q3.3 9.5 3.3 8.5q0-2.025 1.413-3.438Q6.125 3.65 8.15 3.65q.9 0 1.75.3t1.55.875L9.775 10.65h3.075l-.725 7.975L15.25 8.35H12.2l1.4-4.2q.5-.25 1.063-.375.562-.125 1.137-.125 2.025 0 3.438 1.412Q20.65 6.475 20.65 8.5q0 1.025-.462 2.1-.463 1.075-1.5 2.45-1.038 1.375-2.675 3.125-1.638 1.75-3.988 4.125Zm-.55-1.55.675-7.4h-3.3l1.8-6.275q-.575-.3-1.212-.513Q8.8 4.35 8.15 4.35q-1.725 0-2.937 1.212Q4 6.775 4 8.5q0 .825.363 1.725.362.9 1.237 2.087.875 1.188 2.312 2.738 1.438 1.55 3.563 3.7Zm1.325-.225q3.975-4.1 5.563-6.263Q19.95 10.1 19.95 8.5q0-1.725-1.212-2.938Q17.525 4.35 15.8 4.35q-.425 0-.825.1-.4.1-.8.225L13.2 7.65h2.925ZM16.125 7.65Zm-7.275 3.7Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100.displayName = 'AmauiIconMaterialHeartBrokenW100';

export default IconMaterialHeartBrokenW100;
