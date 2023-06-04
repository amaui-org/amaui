import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeW100Filled'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 2.35q-.15 0-.25-.1T9.5 2q0-.15.1-.25t.25-.1h4.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM10 16.2l-1.7-3.35q-.05-.1-.125-.15-.075-.05-.175-.05H4.3q.125-3.1 2.35-5.225Q8.875 5.3 12 5.3q1.425 0 2.763.525Q16.1 6.35 17.2 7.3l.75-.75q.125-.125.25-.125t.25.125q.125.1.125.237 0 .138-.125.263l-.75.75q.875 1.025 1.413 2.262.537 1.238.587 2.588h-3.475l-1.9-3.8q-.1-.2-.312-.2-.213 0-.313.2Zm2 4.5q-3.125 0-5.35-2.138-2.225-2.137-2.35-5.212h3.475l1.9 3.8q.1.2.313.213.212.012.312-.188L14 9.8l1.7 3.35q.05.1.125.15.075.05.175.05h3.7q-.125 3.075-2.35 5.212Q15.125 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100Filled.displayName = 'AmauiIconMaterialAvgTimeW100Filled';

export default IconMaterialAvgTimeW100Filled;
